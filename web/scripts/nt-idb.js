/**********************************************************************************************************
function idbOpen        (db,oncomplete)  

-- these functions write away table.record. 
function idbWrite       (db,table,record,fromSync,oncomplete,onerror)       		[idbPut -- idbAdd]
function idbAdd         (db,table,record,fromSync,oncomplete,onerror)              	[idbOpen -- idbSync]
function idbPut         (db,table,record,fromSync,oncomplete,onnotfound,onerror)    [idbOpen -- idbSync]
function idbDelete      (db,table,guid,oncomplete,onerror)                  		[idbOpen] 
function idbMarkDelete  (db,table,guid,oncomplete,onnotfound,onerror)       		[idbOpen -- idbSync]
function idbEmpty       (db,table,oncomplete,onerror)                       		[idbOpen]

function idbGet         (db,table,guid,oncomplete,onnotfound,onerror)       		[idbOpen]  

function idbSelect      (options)											    	[idbOpen -- idbSort]
  function idbSort       (resultset,orderBy)                                		[idbSortBy]
    function idbSortBy    (orderBy)

function idbFullSync    (db,table,oncomplete,onerror)                       		[idbEmpty -- idbSync]
  function idbSync        (db,table,oncomplete,onerror)                     		[idbSummary -- idbWrite] 
    function idbSummary     (db,table,resultset,oncomplete,onerror)
	
***********************************************************************************************************/	

const recordFiltered = 2;
const recordOutOfRange = 1;
const recordOk = 0;

var idbSorted=false;
//======================================================================================================================================
// these functions are generic
//======================================================================================================================================
function login(db,user,password){
	var syncPost = {user:user,
					password:password
					}
	$.ajax({
	  url: db.options.synchost + '/login',
	  type:"POST",
	  username:db.options.user,
	  password:db.options.password,
	  data:JSON.stringify(syncPost),
	  contentType:"application/json; charset=utf-8",
	  dataType:"json",
	  success: function(data){handleReply(data)}
	})		
	function handleReply(data){
		var response =  'login_response'
		db.options.token = data[response].token;
		//console.log('db.options.token=' + db.options.token)
		db.options.status = data[response].status;
	}
}
//======================================================================================================================================
// WARNING - this operation is destructive. But useful for development, and testing purposes
function idbNuke(db){
	//idbClose(db,doNuke);	
	//function doNuke(){
		console.log('Nuking ' + db.options.name)
		var req = indexedDB.deleteDatabase(db.options.name);
		req.onsuccess = function () {
			console.log("Deleted database pending - navigate away from this site to complete purge");
		};
		req.onerror = function (event) {
			console.log("Couldn't delete database");
		};
		req.onblocked = function () {
			console.log("Couldn't delete database due to the operation being blocked. Database will be nuked as soon as it becomes unblocked. Navigate away from this site to complete purge");
		};
		return false;
	//};	
}
//======================================================================================================================================
function idbOpen(db,oncomplete){
	//console.log('idbOpen ' + db.options.open);
	if(db.options.open){
		if (oncomplete)	{oncomplete()}
		return
	}
	db.options.error = 0;
	//console.log('opening database ' + db.options.name + ' version ' + db.options.version);
	var request = window.indexedDB.open(db.options.name, db.options.version);
	//-------------------------------
	request.onerror = function(event) {  									// Do something with request.errorCode!
		debug('database failed to open ' + event.target.error.message + ' .. ' + event.target.error.name);
		db.options.errorcode = event.target.error.name;
		db.options.error = event.target.error.message;
		return true; 														// returning true suppresses the error bubbling up
	};
	//-------------------------------
	request.onversionchange = function(event) { 						
		//console.log('Version change when opening db')
	}
	//-------------------------------
	request.onupgradeneeded = function(event) { 							// this gets called before onSuccess
		//console.log('Upgrading Database');
		db.options.handle = event.target.result;
		var i=0;
		var j=0;
		for (i in db.tables){
			// create the table with primary key
			try {
				db.tables[i].objectStore = db.options.handle.createObjectStore(db.tables[i].name, { keyPath: db.tables[i].primarykeyfield }); 
			} catch(err) {
				db.tables[i].objectStore = event.currentTarget.transaction.objectStore(db.tables[i].name);
			};
			// create additional indexes
			for (j in db.tables[i].indexes){
				try{
				db.tables[i].objectStore.createIndex(db.tables[i].indexes[j].name, db.tables[i].indexes[j].fields, { unique: db.tables[i].indexes[j].unique }); 
				//console.log('creating index: ' + db.tables[i].indexes[j].name + ' on ' + db.tables[i].name)
				} catch(err) {};
			}
		}		
	};
	//-------------------------------
	request.onsuccess = function(event) {	// Do something with request.result!
		//console.log('database opened');
		var i=0;
		db.options.handle = event.target.result;
		
		db.options.handle.onerror = function(event) {		// Generic error handler for all errors targeted at this database's requests!
			db.options.errorcode = event.target.error.name;
			db.options.error = event.target.error.message;
			debug('Database Error ' + db.options.errorcode + ' .. ' + db.options.error);
			return true;
		};		
		db.options.errorcode = 0;
		db.options.error = "";
		db.options.open = true;		
		if (oncomplete)	{oncomplete()}		
	};
	//-------------------------------
};
//======================================================================================================================================
function idbClose(db,oncomplete,onerror){
	if(db.options.open){
		var request = db.options.handle.close();
		//-------------------------------
		request.onerror = function(event) {  									// Do something with request.errorCode!
			db.options.errorcode = event.target.error.name;
			db.options.error = event.target.error.message;
			if (onerror)	{onerror(event)}
			return true; 														// returning true suppresses the error bubbling up
		};

		//-------------------------------
		request.onsuccess = function(event){
			//console.log('database closed')
			db.options.errorcode = 0;
			db.options.error = "";
			db.options.open = false;		
			if (oncomplete)	{oncomplete()}				  
		}
	}	
}
//======================================================================================================================================
// allows a table name to be passed as a table parameter. Converts from the name to an object.
function idbCheckTable(t){
	if (t){
		if (typeof(t) == 'object'){
			if (t.name){
				return t
			}
			if (t.table && t.table.name){  // allow for database.customers when we really want database.customers.table
				return t.table
			}	
		} else if (database[t]){
			return database[t].table;
		}	
	}
	return t; // not sure, so pass the parameter back as-is
}
//======================================================================================================================================
// checks the parameter points to a record, and if it doesn't tries to correct that.
function idbCheckRecord(r){
	if (r){
		if (typeof(r) == 'object'){
			if (r.hasOwnProperty('guid')){
				return r
			}
			if (r.record && r.record.hasOwnProperty('guid')){  // allow for database.customers when we really want database.customers.record
				return r.record
			}	
		}
	}
	return r; // not sure, so pass the parameter back as-is
}
//======================================================================================================================================
function idbWrite(db,table,record,fromSync,oncomplete,onerror){
	// console.log('idbWrite ' + database + ' ' + table + ' ' + record)
	table = idbCheckTable(table);
	record = idbCheckRecord(record);
	idbPut(db,table,record,fromSync,function() { 
		// on complete
		if(oncomplete){  // on put complete pass the record guid to the oncomplete function
			oncomplete(record[table.primarykeyfield])
		}	
	}, function() { 					  
		//not found
		idbAdd(db,table,record,fromSync,function(){
				// on complete
				if(oncomplete){oncomplete(record[table.primarykeyfield])} // on add complete passes the new guid to the oncomplete function
			},onerror)
	}, function(event) { 					
		// on error
		if(onerror){onerror(event)}
	})
}
//======================================================================================================================================
// small utility function to prime the primary key field with a random string value. Preserves existing value if it exists.
function idbPrimeGuid(table,record){
	table = idbCheckTable(table);
	record = idbCheckRecord(record)
	if (!record[table.primarykeyfield]){
		record[table.primarykeyfield] = Math.random().toString(36).substr(3,8).toUpperCase() + Math.random().toString(36).substr(3,8).toUpperCase(); // 16 chars 0-9, A-Z
	}	
}
//======================================================================================================================================
// 	prime record fields before calling this function. example;	database.customer.record.firstname = "Bruce";
function idbAdd(db,table,record,fromSync,oncomplete,onerror){
	//console.log('idbAdd ' + record + ' table=' + table.name)
	table = idbCheckTable(table);
	record = idbCheckRecord(record)
	idbOpen(db,doAdd);	
	function doAdd(){
		idbPrimeGuid(table,record);
		if (fromSync == 0 || fromSync == 2){
			if (table.timestampfield){
				record[table.timestampfield] = Date.now();
			}
			if (table.servertimestampfield){
				record[table.servertimestampfield] = 0;
			}	
		}	
		var request = db.options.handle.transaction([table.name],"readwrite").objectStore(table.name).add(record);
		//----	// callbacks for request 
		request.onsuccess = function(event) {
			db.options.errorcode = 0;
			db.options.error = "";
			if (oncomplete)	{oncomplete()};
			if (fromSync == 0){
				idbSync(db,table); // syncs are done asyncronously.
			}
		}
		//----
		request.onerror = function(event){
			//console.log('add failed ' + event.target.error.message + ' .. ' + event.target.error.name);
			db.options.errorcode = event.target.error.name;
			db.options.error = event.target.error.message;
			if (onerror){onerror(event)};
			return true; 														// returning true suppresses the error bubbling up		
		}
	}
}
//======================================================================================================================================
function idbPut(db,table,record,fromSync,oncomplete,onnotfound,onerror){
	//console.log('idbPut')
	table = idbCheckTable(table);
	record = idbCheckRecord(record)	
	idbOpen(db,doPut);
	function doPut(){
		//console.log('doPut on ' + table.name + ' pk=' + record[table.primarykeyfield] + ' field=' + table.primarykeyfield + ' fromSync=' + fromSync) ;
		var savRecord = record;
		var objectstore = db.options.handle.transaction([table.name],"readwrite").objectStore(table.name);
		var request = objectstore.get(record[table.primarykeyfield]);

		// callbacks for get request 
		request.onsuccess = function(event) {
			//console.log('get success')
			if (event.target.result){			
				if (!fromSync && table.timestampfield){
					record[table.timestampfield] = Date.now();
				}				
				var requestUpdate = objectstore.put(savRecord);
				requestUpdate.onsuccess = function(event) {
					//console.log('put was a success. fromsync = ' + fromSync);
					db.options.errorcode = 0;
					db.options.error = "";	
					record = savRecord;	
					if (oncomplete)	{oncomplete()}
					if (!fromSync){
						idbSync(db,table); // syncs are done asyncronously.
					}	
				};				
				requestUpdate.onerror = function(event) {
					if (onerror){onerror(event)};
				}
			} else {
				if (onnotfound)	{
					onnotfound()
				} else {
					db.options.errorcode = "RecordNotFound";
					db.options.error = "The requested record was not found in the database";
					//console.log('database Error ' + db.errorcode + ' .. ' + db.error);
				}					
			}						
		}
		request.onerror = function(event){
			if (onerror){ onerror(event)};
		}
	}
}
//======================================================================================================================================
// purge marked-as-deleted records from the database
function idbPurge(db,table,oncomplete,onerror){
	table = idbCheckTable(table);
	idbSelect({	db:db,
				table:table,
				orderBy:table.primarykeyfield,
				greaterThan:0,
				includeDeleted:true,
				onrecord:function(record){
					if(record[table.deletedtimestampfield] > 0 && record[table.timestampfield] == record[table.servertimestampfield]){
						var guid = record[table.primarykeyfield];
						idbDelete(db,table,guid)
					}	
				},
				oncomplete:function(){
					if (oncomplete)	{oncomplete()}
				},
				onerror:function(event){
					if (onerror){ onerror(event)};
				}
			})
	return;
}
//======================================================================================================================================
// deletes a record from the database - probably should not be used for tables being sync'd. Use idbMarkDelete instead.
// this one is called from idbPurge
function idbDelete(db,table,guid,oncomplete,onerror){
	table = idbCheckTable(table);
	idbOpen(db,doDelete);
	function doDelete(){
		if (!guid){
			guid = table.record[table.primarykeyfield]
		}	
		//console.log('do delete record with ' + table.primarykeyfield + ' = ' + guid );
		var request = db.options.handle.transaction([table.name],"readwrite").objectStore(table.name).delete(guid);

		// callbacks for request 
		request.onsuccess = function(event) {
			//console.log('delete was a success');
			db.options.errorcode = 0;
			db.options.error = "";
			if (oncomplete)	{oncomplete()}
		}
		request.onerror = function(event){
			if (onerror){ onerror(event)};
		}
	}
}	
//======================================================================================================================================
function idbMarkDelete(db,table,guid,oncomplete,onnotfound,onerror){
	//console.log('idbMarkDelete')
	table = idbCheckTable(table);
	idbOpen(db,doMarkDelete);
	function doMarkDelete(){
		//console.log('do MarkDelete  -- getting guid ' + guid);
		var objectstore = db.options.handle.transaction([table.name],"readwrite").objectStore(table.name);
		var request = objectstore.get(guid);

		// callbacks for get request 
		request.onsuccess = function(event) {
			if (event.target.result){							
				table.record = request.result;
				if (table.deletedtimestampfield){
					table.record[table.deletedtimestampfield] = Date.now(); // mark record as deleted
				}	
				if (table.timestampfield){
					table.record[table.timestampfield] = Date.now();
				}	
				//console.log('deleting |' + table.record.guid + ' | ' + table.record.ts + ' | ' + table.record.sts + ' | ' + table.record.dts + ' | ' + table.record.firstname +  ' | ' + table.record.lastname);

				var requestUpdate = objectstore.put(table.record);
				
				requestUpdate.onsuccess = function(event) {
					//console.log('idbMarkDelete put was a success.');
					db.options.errorcode = 0;
					db.options.error = "";	
					if (oncomplete){oncomplete()};
					idbSync(db,table); // syncs are done asyncronously.
				};				
				requestUpdate.onerror = function(event) {
					if (onerror){onerror(event)};
				}
			} else {
				if (onnotfound)	{
					onnotfound()
				} else {
					db.options.errorcode = "RecordNotFound";
					db.options.error = "The requested record was not found in the database";
					//console.log('database Error ' + db.options.errorcode + ' .. ' + db.options.error);
				}					
			}						
		}
		request.onerror = function(event){
			if (onerror){ onerror(event)};
		}
	}

}	
//======================================================================================================================================
function idbEmpty(db,table,oncomplete,onerror){
	//console.log('idbEmpty')
	table = idbCheckTable(table);
	idbOpen(db,doEmpty);
	function doEmpty(){
		var request = db.options.handle.transaction([table.name],"readwrite").objectStore(table.name).clear();		
		request.onsuccess = function(){
			//console.log('idbEmpty complete')
			if (oncomplete)	{oncomplete()}				
		}
		request.onerror = function(event){
			if (onerror){ onerror(event)};
		}		
	}
}	

//======================================================================================================================================
// similar to an idbGet, but called from inside a transaction - ie from idbSelect
function idbJoin(db,trans,table,guid,oncomplete,onnotfound,onerror){ 
	//console.log('idbJoin on ' + table.name + ' guid=' + guid)
	table = idbCheckTable(table);
	var request = trans.objectStore(table.name).get(guid);

	request.onsuccess = function(event) {
		if (event.target.result){
			db.options.errorcode = 0;
			db.options.error = "";
			if (oncomplete)	{
				//console.log('idbJoin got record ' + guid);
				for(var k in event.target.result) table.record[k]=event.target.result[k];
				oncomplete(event.target.result)
				}
		} else {
			if (onnotfound)	{
				idbClearRecord(table.record)
				onnotfound()
			} else {
				db.options.errorcode = "RecordNotFound";
				db.options.error = "The requested record was not found in the database";
				//console.log('database Error ' + db.options.errorcode + ' .. ' + db.options.error);				
			}					
		}						
	}
	request.onerror = function(event){
		if (onerror){ onerror(event)};
	}		
}

//======================================================================================================================================
function idbGetBy(db,table,fieldName,value,oncomplete,onnotfound,onerror){ 
	atable = idbCheckTable(table);
	arecord = idbCheckRecord(table);
	idbSelect({	db:db,
				table:atable,
				orderBy:fieldName,
				limit:1,
				equalTo: value,
				oncomplete:function(resultset,options){
					if (resultset.length > 0){
						var row=0;
						for (row in resultset){
							arecord = resultset[row];  
						}						
						if(oncomplete){
							oncomplete(resultset,options)
						}
					} else {
						if(onnotfound){
							onnotfound()
						}
					}	
				},
				onerror:function(event){
					if(onerror){
						onerror(event)
					}
				},
			})	
}
//======================================================================================================================================
function idbGet(db,table,guid,oncomplete,onnotfound,onerror){ 
	table = idbCheckTable(table);
	switch(guid){
	case '_first_':
		idbSelect({	db:db,table:table,
					orderBy:table.primarykeyfield,
					limit:1,
					onrecord:function(record){
						guid = record[table.primarykeyfield];	
						idbGet(db,table,guid,oncomplete,onnotfound,onerror);
						return false; // terminate select loop
					},
					onerror:onerror});
		return;
	}
	idbOpen(db,doGet);
	function doGet(){
		var request = db.options.handle.transaction([table.name]).objectStore(table.name).get(guid);
		// callbacks for request
		request.onsuccess = function(event) {
			if (event.target.result){
				db.options.errorcode = 0;
				db.options.error = "";
				if (oncomplete)	{
					for(var k in event.target.result)table.record[k]=event.target.result[k];
					oncomplete(event.target.result)
					}
			} else {
				if (onnotfound)	{
					onnotfound()
				} else {
					db.options.errorcode = "RecordNotFound";
					db.options.error = "The requested record was not found in the database";
					//console.log('database Error ' + db.options.errorcode + ' .. ' + db.options.error);
				}					
			}						
		}
		request.onerror = function(event){
			if (onerror){ onerror(event)};
		}		
	}
}	

//======================================================================================================================================
// Counts the number of rows in the table, and passes the value to oncomplete. 
function idbRecords(db,table,oncomplete,onerror){
	table = idbCheckTable(table);
	idbOpen(db,doCount);
	function doCount(){
		var request = db.options.handle.transaction([table.name]).objectStore(table.name).count();
		request.onsuccess = function(event) {
			if (oncomplete)	{
				oncomplete(request.result);
			}	
		}
		request.onerror = function(event){
			if (onerror){ onerror(event)};
		}		
	}
}

//======================================================================================================================================
// Makes sure the table contains a minimum of 1 record. Useful for settings tables, which contains the host value, so can't be primed with a sync.
// prime fields before calling this. for example; database.customer.record.firstname = "Bruce"; Guid field is primed here.
function idbOne(db,table,oncomplete,onerror){
	table = idbCheckTable(table);
	idbOpen(db,doOne);
	function doOne(){
		idbRecords(db,table,doAdd,doError);
	}
	function doAdd(r){
		if (r==0){
			idbPrimeGuid(table,table.record);  // TODO remove reference to table.record
			idbAdd(db,table,table.record,0,oncomplete,onerror)
		} else {
			oncomplete()
		}
		return;
	}
	function doError(event){
		if (onerror){ onerror(event)};
	}
}
//======================================================================================================================================
// If onRecord is passed then that is called for each returned record. If not passed then the whole result sent to oncomplete
/* options:{db:database,
			table:null,	 	// required
			join:null,		// an array of table objects
			outer:false,	// should the join be an Outer Join
			orderBy:"guid",	// a field name, or array of field names
			from:null,
			greaterThan:null,
			to:null,
			lessThan:null,
			equalTo:null,
			offset:0,
			limit:0,
			maxRecords: deprecated
			direction:"next",
			filter:function(){},
			includeDeleted:false,
			onrecord:function(record){},
			oncomplete:function(resultset,options){},
			onerror:function(event){},
			}
*/			
function idbSelect(options){
	if (!options.db){options.db=database};
	options.table = idbCheckTable(options.table);	
	if (!options.table){return};
	if (!options.orderBy){options.orderBy='guid'};
	if (options.direction != "next" && options.direction != "prev"  && options.direction != "nextunique" && options.direction != "prevunique"){options.direction = "next"};
	
	//console.log('IDB SELECT ' + options.table.name + ' orderby: ' + options.orderBy + ' includeDeleted:' + options.includeDeleted )
	idbOpen(options.db,doList);
	function doList(){
		var resultset=[];
		var tableList=[];
		tableList.push(options.table.name);
		if (options.join){
			for (var jx = 0; jx < options.join.length; ++jx) {
				tableList = tableList.concat(options.join[jx].table.name);
			}	
		}
		var trans = options.db.options.handle.transaction(tableList)
		var store = trans.objectStore(options.table.name)
		if (options.orderBy=='guid'){
			if (options.equalTo && Array.isArray(options.equalTo)){
				options.equalTo = options.equalTo[0]
			}
			var request = store.openCursor(options.equalTo,options.direction);		
		} else {
			// get index to use based on options.orderBy parameter						
			var found=-1;
			for(var ix = 0; ix < options.table.indexes.length; ++ix) {	
				found=ix;
				if (Array.isArray(options.orderBy)){
					for(var fx = 0; fx < options.orderBy.length; ++fx) {	
						if(options.table.indexes[ix].fields.length-1 < fx || options.orderBy[fx] != options.table.indexes[ix].fields[fx]){
							found=-1;
							break;
						}
					}
				} else { // not an array
					if(options.orderBy != options.table.indexes[ix].fields[0]){
						found=-1;
					}
				}				
				if (found>=0) break;
			}
			if (found>=0){
				var keyRange = idbMakeRange()
				var index = store.index(options.table.indexes[ix].name)
				// open the cursor			
				var request = index.openCursor(keyRange,options.direction);		
				idbSorted = true;
			} else {
				console.log('Index not found for ' + options.orderBy + ' will sort on primary field') ;
				var request = store.openCursor(options.equalTo,options.direction);
				idbSorted = false;
			}			
		}
		
		var recs = 0;
		var offs = 0;
		var complete=false;
		var takerecord=true;
		var allJoined=true;
		//---
		request.onsuccess = function(event){
			var cursor = event.target.result;
			takerecord=true;
			
			if (!cursor){
				takerecord=false;
				complete=true;
			}
			if (takerecord && recs >= options.limit && options.limit > 0 ){
				takerecord=false;
				complete=true;
			}
			if (!complete){				
				if (options.table.deletedtimestampfield && !options.includeDeleted > 0){
					// take care of the case where dts is a string in the database instead of a number
					if (typeof(cursor.value[options.table.deletedtimestampfield])=='string'){
						// remove commas
						cursor.value[options.table.deletedtimestampfield] = cursor.value[options.table.deletedtimestampfield].replace(/\,/g,"")
						// force it to be a number
						cursor.value[options.table.deletedtimestampfield] = parseInt(cursor.value[options.table.deletedtimestampfield])
					}
					// then compare it to 0
					if (cursor.value[options.table.deletedtimestampfield]){
						takerecord=false;
					}
				}
			}
			if (complete){
				withResult();
			} else if (takerecord){
				for(var k in cursor.value){
					options.table.record[k] = cursor.value[k]; // load the record buffer
				}	
				if (options.join){ // try and do an idbGet here on the joined table(s)
					allJoined=true;
					getJoins(options.join,0,function(){withRecord(cursor)})
				} else {
					withRecord(cursor)
				}	
			} else {
				cursor.continue(); // triggers another success event
			}			
		}
		//---
		request.onerror = function(event){
			if (options.onerror){ options.onerror(event)};
		}
		//----
		function withRecord(cursor){
			if (takerecord && options.filter){ 			// join, before filter, before offset
				switch(options.filter(cursor.value)){   // filter must be syncronous.
				case 1: // out of range
					complete=true;
				case 2: // record filtered and out of range
					takerecord=false;
				}
			}
			if (takerecord && offs < options.offset && options.offset > 0){	
				offs += 1;
				takerecord=false;
			}
			if (takerecord){
				if (options.onrecord){
					if( options.onrecord(cursor.value,options) == false){ // return false to terminate loop
						complete=true;
					}
				} else {
					resultset.push(cursor.value);
				}	
				recs += 1;
			}	
			if (complete){
				withResult();
			} else {
				cursor.continue(); // triggers another success event
			}				
		}
		//----
		function withResult(){
			if(options.orderBy){
				idbSort(resultset,options.orderBy)
			};
			if (options.oncomplete)	{
				options.oncomplete(resultset,options)
			}
		}		
		//----
		function getJoins(joinList,idx,whenGotAll){
			if (idx > options.join.length-1){
				whenGotAll()			
			} else {
				for (var rx = 0; rx < options.table.relations.length; ++rx) {
					if (options.table.relations[rx].tableName == options.join[idx].table.name){
						var fields = Object.keys(options.table.relations[rx].links);
						for (var fx = 0; fx < fields.length; ++fx) {
							var linkValue =  options.table.record[fields[fx]];
						}
						break;
					}					
				}	
				idbJoin(options.db,trans,options.join[idx].table,linkValue,
					function(){ // on found
						getJoins(joinList,idx+1,whenGotAll);
					},
					function(){ // on not found
						getJoins(joinList,idx+1,whenGotAll);
					},options.onerror);
			}
		}
		//----
		function idbMakeRange(){
			var keyRangeValue = null
			if (options.equalTo){  // equalsTo wins over other ranges
				keyRangeValue = IDBKeyRange.only(idbMakeArray(options.equalTo));
			} else {
				var incFrom=false;
				var rangeFrom=[];
				if (options.from){ // if from and greaterThan both exist then from wins.
					incFrom=false;
					rangeFrom = idbMakeArray(options.from)
				} else if (options.greaterThan){
					incFrom=true;
					rangeFrom = idbMakeArray(options.greaterThan)
				} else {
					rangeFrom = null
				}
				var incTo=false;
				var rangeTo=[];
				if (options.to){ // if to and lessThan both exist then to wins
					incTo=false;
					rangeTo = idbMakeArray(options.to)
				} else if (options.lessThan){
					incTo=true;
					rangeTo = idbMakeArray(options.lessThan)
				} else {
					rangeTo = null
				}
				if (rangeFrom && rangeTo){
					keyRangeValue = IDBKeyRange.bound(rangeFrom,rangeTo,incFrom,incTo)
				} else if(rangeFrom){
					keyRangeValue = IDBKeyRange.lowerBound(rangeFrom,incFrom)
				} else if (rangeTo){
					keyRangeValue = IDBKeyRange.upperBound(rangeTo,incTo)
				}				
			}
			return keyRangeValue
		}
	}	
}
//======================================================================================================================================
function idbMakeArray(parm){
	 if (Array.isArray(parm)){
		return parm;
	} else {
		var parmArray=[]
		parmArray[0] = parm
		return parmArray;
	}								
}				

//======================================================================================================================================
// orderby = ['fieldname','fieldname',...]
function idbSort(resultset,orderBy){
	var order=[];
	if (Array.isArray(orderBy)){
		order = orderBy;
	} else {
		order.push(orderBy);
	}
	resultset.sort(idbSortBy(order));
}
//======================================================================================================================================
function idbClearRecord(record){
	for (var field in record) {
		if(typeof(record[field])==='string'){
			record[field] = '';
		} else {	
			record[field] = false;
		}	
	}
}
//======================================================================================================================================
function idbSortBy(orderBy){
	return function(a, b) {
		//console.log('idbSortBy orderBy=' + orderBy + ' ' + orderBy.length)
		var field='';
		var left='';
		var right='';
		for (var i=0; i < orderBy.length ; i++){
			field = orderBy[i];
			if (field.substring(0,1)=='-'){ // reverse sort order 
				field = field.substring(1)
				left = b[field]
				right = a[field]				
			} else {
				left = a[field]
				right = b[field]
			}	
			if (left===undefined) return -1;
			if (right===undefined) return 1;			
			if ($.isNumeric(left) && $.isNumeric(right)){
				if (left-right != 0) {
					return left-right;
				} // else they are equal so cycle to next field in sort order.
			} else { // one of them is a string, so compare as strings
				if (left != right) {				
					return left.localeCompare(right,'de', { sensitivity: 'base' })
				} // else they are equal so cycle to next field in sort order.
			} 
		} 
		return 0;			
	}
}
//======================================================================================================================================
// sync all the tables in the database one at a time
function idbSyncAll(db,startTable,oncomplete,onerror){
	if (startTable < db.tables.length){
		idbSync(db,db.tables[startTable],doNext,doError,startTable+1)
	} else {
		if (oncomplete){
			oncomplete()
		}
	}
	function doNext(i){
		idbSyncAll(db,i,oncomplete,onerror)
	}
	function doError(XMLHttpRequest, textStatus, errorThrown){
		onerror()
		doNext(startTable+1)
	}
}
//======================================================================================================================================
// deletes all local data and then syncs from there
// calls same onerror if empty fails or sync fails
function idbFullSync(db,table,oncomplete,onerror){
	//console.log('idbFullSync')
	idbEmpty(db,table,function(){
		//console.log('calling idbSync')
		idbSync(db,table,oncomplete,onerror);
	},onerror)
}
//======================================================================================================================================
// sync one table in the database
function idbSync(db,table,oncomplete,onerror,oncompleteparm){ 
	table = idbCheckTable(table);
	var resultset=[];
	//console.log('idbSync ' + table.name)
	idbSummary(db,table,resultset,doSend,onerror);
	function doSend(){
		var i=0;
		var recs='';
		var act = 'action';
		var date = new Date();
		var syncPost = {token:db.options.token,
						table:table.name,
						deviceid:db.options.deviceid,
						[act]:'sync',
						everythingafter:table.everythingafter,
						localTimeZone:date.getTimezoneOffset()
						}
		if (resultset.length){
			syncPost[table.name]=resultset
		}	
		$.ajax({
		  url: db.options.synchost + '/' + table.syncproc,
		  type:"POST",
		  data:JSON.stringify(syncPost),
		  headers: { "Authorization": "Basic " + btoa(db.options.user + ":" + db.options.password) },		  
		  contentType:"application/json; charset=utf-8",
		  dataType:"json",
		  success: function(data){
				database.onSyncCommsSuccess(data);
				handleReply(data)
			},
		  error: function(XMLHttpRequest, textStatus, errorThrown){
				database.onSyncCommsError(XMLHttpRequest, textStatus, errorThrown);
				if (onerror) { onerror(XMLHttpRequest, textStatus, errorThrown) }
			}
		})		
		function handleReply(data){
			var response = table.syncproc + '_response'
			//console.log(data)
			if (data[response]){
				recs = data[response][table.name];
				if (recs){ // may be nothing to receive.
					putNext()
				} else {
					if (database.options.purgeclient){
						idbPurge(database,table,function(){
							table.afterSync();
							if (oncomplete)	{oncomplete(oncompleteparm)}
						})
					} else {
						table.afterSync();
						if (oncomplete)	{oncomplete(oncompleteparm)}
					}
				}
			} else {
				console.log('Response: "' + response + '" was missing from the Sync Reply. Check the case.')
				console.log(data)
			}
		}
		function putNext(){
			//console.log('putnext i = ' + i + 'recs.length=' + recs.length);
			if (i > recs.length-1){
				table.afterSync();
				if (oncomplete)	{oncomplete(oncompleteparm)}
				return
			}	
			var record = recs[i];
			i++;
			if (table.timestampfield){
				if (typeof(record[table.timestampfield])=='string'){
					// force it to be a number
					record[table.timestampfield] = record[table.timestampfield].replace(/\,/g,"") // remove commas
					record[table.timestampfield] = Number(record[table.timestampfield])
				}
			}
			if (table.servertimestampfield){
				if (typeof (record[table.servertimestampfield])=='string'){
					// force it to be a number
					record[table.servertimestampfield] = record[table.servertimestampfield].replace(/\,/g,"") // remove commas
					record[table.servertimestampfield] = Number(record[table.servertimestampfield])
				}
			}
			if (table.deletedtimestampfield){
				if (typeof (record[table.deletedtimestampfield])=='string'){
					// force it to be a number
					record[table.deletedtimestampfield] = record[table.deletedtimestampfield].replace(/\,/g,"") // remove commas
					record[table.deletedtimestampfield] = parseInt(record[table.deletedtimestampfield])
				}
			}
			idbWrite(db,table,record,true,function(){
				putNext()
			});				
		}
	}
}
//======================================================================================================================================
function idbSummary(db,table,resultset,oncomplete,onerror){
    //console.log('idbSummary '+ table.name)
	table = idbCheckTable(table);
	idbOpen(db,doList);	
	function doList(){		
		//console.log('idbSummary doList table.name=' + table.name);
		resultset.length = 0;		
		table.everythingafter = 0;
		var drecord ={}
		var request = db.options.handle.transaction([table.name]).objectStore(table.name).openCursor();		
		request.onsuccess = function(event){
			//console.log('idbSummary OnSuccess')
			var cursor = event.target.result;
			if (cursor){
				if (table.timestampfield && table.servertimestampfield){
					if (cursor.value[table.timestampfield] != cursor.value[table.servertimestampfield]){  // only interested in records that have been altered here
						if (cursor.value[table.deletedtimestampfield] > 0){								 // TODO if record was deleted, just send minimal info
							//drecord={}
							//drecord[table.primarykeyfield] = cursor.value[table.primarykeyfield];
							//drecord[table.deletedtimestampfield] = cursor.value[table.deletedtimestampfield];
							//drecord[table.servertimestampfield] = cursor.value[table.servertimestampfield];
							//resultset.push(drecord);
							resultset.push(cursor.value);
						} else {
							resultset.push(cursor.value);													// otherwise send whole record
						}	
					} else {
						if (table.everythingafter < cursor.value[table.servertimestampfield]){					// looking for the youngest unchanged record
							table.everythingafter = cursor.value[table.servertimestampfield]
						}
					}				
				}	
				cursor.continue();
			} else {
				//console.log('completed, recs= ' + resultset.length)
				if (oncomplete)	{oncomplete()}				
			}
		}
		request.onerror = function(event){
			if (onerror){ onerror(event)};
		}			
	}
}
//======================================================================================================================================
// sends the contents of the result set to the console view. Used mostly for debugging.
function idbShowResult(table,resultset){
	table = idbCheckTable(table);
	var value='';
	console.log('Database: database  ; Table: ' + table.name + ' ; Records: ' + resultset.length);
	console.log(Object.keys(table.record))
	if(resultset.length){
		for (var rowNum in resultset){
			value = ''
			for(var i in resultset[rowNum]) {
				value = value + ' | ' + resultset[rowNum][i];
			}	
			console.log(value);
		}
	}	
}
//======================================================================================================================================
function testView(){
	idbSelect({table:database.tables[5],

				orderBy:"description",
				//from: "Paid",
				//to:"Sick",
				//offset:2,
				limit:1,
				//to:"Sick",

				//orderBy:["ts"],
				//equalTo:["1533123922534"], 
				//equalTo:"1533123922534", 
				
				//orderBy:null,
				//equalTo:["0P1R48G2TGBKD53S"], 
				
				//filter: function(record){return record.quicksick==1 ? recordOk : recordFiltered};
				
				oncomplete:function(resultset){idbShowResult(database.tables[5],resultset)}})
	}
