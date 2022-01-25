(function( $, undefined ) {
$.widget( "ui.ntformls", {
	options: {
		tablename: '',    
		table: {},
		divId: '',
		database: null,
		columns:[],
		isOpen:0,
		record: {},
		primeField: function(field,table,fieldname,value,onlyIfBlank) {
			if (onlyIfBlank){
				if ($("#" + field).val() == false){
					$("#" + field).val(value);
				}
				if(fieldname){
					if (this.record[fieldname] == false){
						this.record[fieldname] = value;
						this.database[table].record[fieldname] = value;
					}
				}
			} else {
				$("#" + field).val(value);
				if (table && fieldname){
					this.database[table].record[fieldname] = value; // not needed, but good to do
				}
				if (fieldname){
					this.record[fieldname] = value; // this is this.options here
				}
			}
		},	
		assignField: function(fieldname,value,onlyIfBlank) {			
			if (this.record[fieldname] == false || onlyIfBlank == false){
				this.record[fieldname] = value; // this is this.options here
			}	
		},			
		primeOnInsert: function(){},
		primeOnCopy: function(){},	 // after record loaded  
		primeOnChange: function(){}, // after record loaded
		assignOnSave: function(){},
		gotFocusBack:function(){},
		refresh:function(){},
		onFormOpen: function(action){},
		onFormClose: function(action){}
	},	
	//------------------------------------------------------
	_init: function() {		
		this.options.database = database; // workaround for now, setting in options does not seem to be working.
		for (j in this.options.database.tables){
			if(this.options.database.tables[j].name == this.options.tablename){
				this.options.table = this.options.database.tables[j];
				$.extend(this.options.record,this.options.table.record);
				break;
			}
		}
	},	
//------------------------------------------------------
	start: function() {
	},	
//------------------------------------------------------
	stop: function() {
	},	
//------------------------------------------------------
	clearForm: function(elem) {
		$(elem).find('input').not('button, submit, reset, hidden, checkbox, radio').val('');
		$(elem).find('[type=checkbox]').attr('checked', false);	
		$(elem).find('[type=radio]').attr('checked', false);	
	},	
//------------------------------------------------------
	onFormOpen: function(action) {
		//console.log('on formopen '  + this.options.divId)
		this.options.isOpen=true;
		this.options.onFormOpen(action)
	},	
//------------------------------------------------------
	onFormClose: function(action) {
		//console.log('on formclose '  + this.options.divId )
		this.options.onFormClose(action)
		this.options.isOpen=false;
	},
//------------------------------------------------------
	gotFocusBack: function(action) {
		//console.log('gotFocusBack ' + this.options.divId)
		this.refresh()
		this.options.gotFocusBack(action)
	},	
//------------------------------------------------------
	refresh: function() {	
		//console.log('on refresh ' +  this.options.divId)
		//this.onFormOpen(0)
		this.options.refresh()
	},	
//------------------------------------------------------
	primeLookups: function() {	
	var _this = this;
	$('[data-nt-desc]').each(function(){
			var tbl = $(this).attr('data-nt-lut')
			var guid = $(this).val()
			var desc = $(this).attr('data-nt-desc')
			var elem = this;
			idbGet(_this.options.database,tbl,guid,function(record){ //oncomplete						
				$(elem).val(record[desc])
			})
		})
	},	
//------------------------------------------------------
	populate: function(action,guid) {
		//console.log('form ls populate action=' + action + ' guid=' + guid)
		var _this = this;
		var id = this.options.divId;		
		switch (action){
		case 1: //insert		
			this.clearForm(id);
			this.options.primeOnInsert();
			this.onFormOpen(action);
			$(id).ntform('show');	
			break
		case 2: //change
		case 101: // from form, no action set
			if (!guid){
				//console.log('populating form, but no guid set, continue as a memory form.')
				_this.primeLookups()
				_this.options.primeOnChange();
				_this.onFormOpen(action);
				$(id).ntform('show');					
				break;
			}	
			// case 2 will drop down to case 4 for cases where guid is set
		case 4: //copy
			if (!guid){
				console.log('populating form for COPY, but no guid set.')
			} else {
				idbGet(this.options.database,this.options.table,guid,function(record){ //oncomplete
						_this.options.record = record;
						ntd.setRow(record.guid); // guid might be changed by the idbGet from _first_ etc.
						$(id).ntformls( "populateRecord",_this.options.record)
						if (action==4){
							_this.options.record[_this.options.table.primarykeyfield] = ''; // clear guid, so Write does an Insert
						}
						if (action == 2){
							_this.primeLookups()
							_this.options.primeOnChange();
						} else if (action==4){
							_this.primeLookups()
							_this.options.primeOnCopy();
						}	
						_this.onFormOpen(action);
						$(id).ntform('show');	
					}, function(){ //not found
						console.log('populating form, but guid not found in local database')
						
					}, function(event){  //on error
						console.log('Error: ' + event.target.error.name + ' ' + event.target.error.message);
					});
			}
			break
		default:
			this.options.primeOnChange();
			this.onFormOpen(action);
			$(id).ntform('show');
		}	
	},	
//------------------------------------------------------
	populateRecord: function(record) { // move fields from record to form fields
		var typ='';
		for (var i in this.options.columns){
			for (var j in record){
				if (j == this.options.columns[i].field){
					//
					typ = this.options.columns[i].type //$(this.options.columns[i].id).attr('type');
					switch(typ){
						case 'image':
							$(this.options.columns[i].id).attr('src',record[j])
							break
						case 'checkbox':
							if(record[j]==$(this.options.columns[i].id).attr('data-true')){
								$(this.options.columns[i].id).attr('checked','checked')
								$(this.options.columns[i].id).change()
							}	
							break
						case 'radio':
							var n=$(this.options.columns[i].id).attr('name');
							$('[name='+n+']').each(function(val){
								if (val==record[j]){
									$(this).prop("checked",true)
									$(this).checkboxradio('refresh');
								} else {
									$(this).prop("checked",false)
									$(this).checkboxradio('refresh');
								}
							})	
							break
						default:
							if(this.options.columns[i].picture){
								$(this.options.columns[i].id).val(format(record[j],this.options.columns[i].picture))
							} else {
								$(this.options.columns[i].id).val(record[j])
							}
					}	
					break;
				}
			}
		}
	},
//------------------------------------------------------
	onChangeField: function(elem){
		var id = '#' + $(elem).attr('id')
		for (var i in this.options.columns){
			if(this.options.columns[i].id==id){
				if (typeof this.options.columns[i].onChangeField == "function"){
					this.options.columns[i].onChangeField();
				}	
			}
		}	
	},
//------------------------------------------------------
	close: function(action,browseid,guid,calledfrom) {
		this.onFormClose()
	},
//------------------------------------------------------
	save: function(action,browseid,guid,calledfrom) { // move fields from form fields to options.record, and then write to table.
		//console.log('form save browseid=' + browseid + ' action=' + action + ' guid=' + guid + ' calledfrom = ' + calledfrom)
		var tagname = '';
		if (guid || action == 1){
			this.options.record.guid = guid;
			var elem;
			for (var i in this.options.columns){
				for (var j in this.options.record){
					if (j == this.options.columns[i].field){
						elem = $(this.options.columns[i].id);
						var typ = elem.type;
						if (typ == undefined && elem.length){
							elem = elem[0]
							typ = elem.type;
						}
						if(!typ){
							tagname = $(this.options.columns[i].id).prop("tagName")
							if (tagname == 'IMG'){
								this.options.record[j] = $(elem).attr('src')
							}
						} else if (typ=='radio'){
							var n=elem.name;
							var _this=this;
							$('[name='+n+']').each(function(val){								
								if ($(this).prop("checked")){
									_this.options.record[j] = val;
								}
							})	
							//this.options.record[j] = $("[name='"+n+"']:checked").val()
						} else {
							this.options.record[j] = getFormFieldValue(elem,this.options.record[j]) // might return same value if field not found.
						}	
						break;
					}
				}
			}	
			this.options.assignOnSave();
			idbWrite(this.options.database,this.options.table,this.options.record,false,function(uid){ // oncomplete gets the guid of the saved record
				switch (action){
				case 1: //insert		
				case 4: //copy			
					$(browseid).ntbrowsels("populate",undefined,uid)
					break;
				case 3: //delete
					$(browseid).ntbrowsels("populate")
					break;
				case 2: //change
					$(browseid).ntbrowsels("repopulateRow",uid)
					break;
				default:
				
				}
			})	
		} else { // memory form
			this.options.assignOnSave();
		}
	}
//------------------------------------------------------
});

$.extend( $.ui.ntformls, {
	version: "@VERSION"
});

})( jQuery );

