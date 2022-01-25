
  // message format
  // [command]|[scope]|[name]|[value]
  // [commands]
  // watch nowatch set get add list call
  
  // examples
  // watch sessionvalue user
  // nowatch sessionvalue user
  // set sessionvalue user frank
  // watch channel chat
  // nowatch channel chat
  // add channel chat "hello world"
  // call someproc parm1 parm2 ...
  
  // [scope]
  // sessionvalue hostvalue channel table

// -------------------------------------------------------------------
function ntSockets(){
this.url=new Array();
this.connection=new Array();
this.onmessagelist=new Array();
this.onopenlist=new Array();
this.watching=false;
this.watchingList=new Array();
}

// -------------------------------------------------------------------
ntSockets.prototype._buildURL = function (url){
	var arr = url.split('//');
	switch (arr[0].toLowerCase()){
	case "ws:":
	case "wss:":
		return (url);
	case "http:":
		url.replace('http:','ws:')
		return (url);
	case "https:":
		url.replace('https:','wss:')
		return (url);
	default:
		if (window.location.protocol=='https:'){
			protocol='wss:';
		} else {
			protocol='ws:';
		}
		url = protocol + '//' + location.hostname.toLowerCase() + (location.port ? ':'+location.port: '') + '/' + url;
	}	
	return(url)
}
// -------------------------------------------------------------------
ntSockets.prototype.open = function (url, onopen, onmessage){
	var found=false;
	var j=0;
	var i=0	
	var _this=this;
	
	url = this._buildURL(url);
	
	for(i=0 ; i < this.url.length ; i++){
		if  (this.url[i] == url){
			//console.log('existing url ' + url + ' i=' + i)
			found = true;
			this.onopenlist[i].push(onopen);
			j = this.onopenlist[i].length - 1

			if (this.connection[i].readyState==1){  //1==OPEN; CLOSING=2; CLOSED=3; CONNECTING=0
				_this.onopen(0,i,j);			
			}	
			this.onmessagelist[i].push(onmessage);
			break;
		}
	}
	if (!found){
		//console.log('new url ' + url);
		this.url.push(url);
		this.onopenlist.push(new Array());
		this.onmessagelist.push(new Array());
		this.connection.push( new WebSocket(url, ['json']));

		i = this.url.length - 1;
		this.onopenlist[i].push(onopen);		
		this.onmessagelist[i].push(onmessage);
		j = this.onopenlist[i].length - 1;
		
		
		this.connection[i].onopen = function (event) {
			//console.log('on open not found ' + i + ' ' + j)
			_this.onopen(event,i,j);	
		}
		this.connection[i].onmessage = function (event) {
			_this.onmessage(event,i);
		}
		this.connection[i].onerror = function (event) {
			_this.onerror(event,i);
		}
		this.connection[i].onclose = function (event) {
			_this.onclose(event,i);
		}
	}	
	return i;
};
// -------------------------------------------------------------------
ntSockets.prototype.onopen = function(event,i,j){

	if (j){
		this.onopenlist[i][j](i);
	} else {	
		for(j=0; j < this.onopenlist[i].length ; j++){
			this.onopenlist[i][j](i);		
		}
	}
};
// -------------------------------------------------------------------
ntSockets.prototype.onmessage = function(event,i){
	var obj = JSON.parse(event.data);
	for(var j=0; j < this.onmessagelist[i].length ; j++){
		this.onmessagelist[i][j](event,obj,i)
	}
};
// -------------------------------------------------------------------
ntSockets.prototype.onerror = function(event,i){
	//console.log('ntSockets.onerror state=' + this.connection[i].readyState)
};
// -------------------------------------------------------------------
ntSockets.prototype.onclose = function(event,i){
	//console.log('ntSockets.onclose')
};
// -------------------------------------------------------------------
ntSockets.prototype.sendText = function(i,text){
	//console.log('Sending Connection ' + i + ' text=' + text);
	this.connection[i].send(text);
};
// -------------------------------------------------------------------
ntSockets.prototype.inWatchingList = function(maybeWatch) {
	var exists = false;
	for (var i=0 ; i < this.watchingList.length ; i++){
		exists=true;
		for(var prop in maybeWatch) {
			if(maybeWatch[prop] !== this.watchingList[i][prop]) {
				exists = false;
				break;
			}
		}
		if (exists){
			break
		}
	}	
	return exists;
};
// -------------------------------------------------------------------
ntSockets.prototype.animate = function(domId){
	//console.log('animate ' + domId)
	var ac = getComputedStyle(document.documentElement).getPropertyValue('--lighter-warning');
	var bc = $(domId).css('backgroundColor');
	$(domId).stop().animate({backgroundColor:ac}, 750,function(){
		$(domId).stop().animate({backgroundColor:bc},750)
	});
};
// -------------------------------------------------------------------
// check if there's a custom css property with this name, and if there is, set it. 
ntSockets.prototype.customCss = function(name,value){
	var prop = getComputedStyle(document.documentElement).getPropertyValue(name);
	//console.log('name=' + json['name'] + ' prop = ' + prop)
	if (prop){
		setCss(name,value)
	}		
};	
// -------------------------------------------------------------------
ntSockets.prototype.watchlist = function(list){
	var _this=this;
	//console.log(_this)
	var text = '';
	list.forEach(function(item,index){
		text = text + 'watch ' + item[2] + ' ' + item[4] + '\r\n';
	})
	
	//_this.sendText(connectionId,'watch ' + scope + ' ' + varname);
	
	list.forEach(function(item,index){
		//_this.watch(item[0],item[1],item[2],item[3],item[4],item[5],item[6],item[7])
		//console.log(_this)
		var thisWatch={
			wid:item[0],
			url:item[1],
			scope:item[2],
			domId:item[3],
			varname:item[4]
		}
		if (_this.inWatchingList(thisWatch)==true){
			return
		}
		_this.watchingList.push(thisWatch);

		if (thisWatch.varname == undefined){
			thisWatch.varname = domId;
		}
		thisWatch.varname = thisWatch.varname.toLowerCase()
		_this.open(thisWatch.url,
			function(connectionId){ // on open
				if(index==0){
					_this.sendText(connectionId,text);	
				}	
			},
			function(event,json,connectionId){ // on message
				_this.handleIncoming(json,thisWatch.scope,thisWatch.domId,thisWatch.varname,item[5],item[6])
			}
		)
	})
};
// -------------------------------------------------------------------
ntSockets.prototype.watch = function(wid,url,scope,domId,varname,callback,that){
	var thisWatch={
		wid:wid,
		url:url,
		scope:scope,
		domId:domId,
		varname:varname
	}
	if (this.inWatchingList(thisWatch)==true){
		return
	}
	this.watchingList.push(thisWatch);

	var _this=this;
	if (varname == undefined){
		varname = domId;
	}
	varname = varname.toLowerCase()
	this.open(url,
		function(connectionId){ // on open
			_this.sendText(connectionId,'watch ' + scope + ' ' + varname);	
		},
		function(event,json,connectionId){ // on message
			_this.handleIncoming(json,scope,domId,varname,callback,that)
		}
	)
};
// -------------------------------------------------------------------
ntSockets.prototype.handleIncoming = function(json,scope,domId,varname,callback,that){
	var _this=this;
	if (callback){
		if ((json['name']==varname) && (json['scope'] == scope)){
			callback(json,that);
		}	
	} else {
		if (json['scope'] == scope){
			if (json['name'] == varname){
				//console.log('received: name=' + json['name'] + ' value=' + json['value'] + ' domId=' + domId )
				var needAnimate = false;
				if(domId != '' && domId != '#'){
					switch ($(domId).prop('tagName')){
					case "INPUT":	
					case "TEXTAREA":
						//console.log('type=' + $(domId).attr('type'))
						switch ($(domId).attr('type')){
						case 'checkbox':
							//console.log('checked=' + $(domId).prop('checked'))
							if (json['value'] == '1' && $(domId).prop('checked') != true){ 
								$(domId).prop('checked', true);
								_this.animate(domId);
								needAnimate = true;
							} else if (json['value'] == '0' && $(domId).prop('checked') != false){ 
								$(domId).prop('checked', false);
								_this.animate(domId);
								needAnimate = true;
							}
							//console.log('done cb')
							break
						case 'radio':
							if($(domId+"[value="+ json['value'] +"]").prop('checked') != true){
								$(domId).prop('checked',false)
								$(domId+"[value="+ json['value'] +"]").prop('checked',true)
								_this.animate(domId);
								needAnimate = true;
							}
							break								
						default:
							//console.log('a1 ' + $(domId).val() + ' = ' + json['value'])
							if($(domId).val() != json['value']){
								$(domId).val(json['value']);									
								_this.animate(domId);
								needAnimate = true;
							}
							break;
						}	
						break;
					case "SELECT":
						if($(domId).val() != json['value']){
							$(domId).val(json['value']);
							_this.animate(domId);
							needAnimate = true;
						}
						break;
					case "IMG":
						//console.log($(domId).attr('src'))
						if ($(domId).attr('src') != json['value']){
							$(domId).attr('src',json['value'])
						}
						break;
					default: // DIV, SPAN et al
						if ($(domId).html != json['value']){
							$(domId).html(json['value']);
							_this.animate(domId);
						}
					}
				}
				
				if(json['name'].substring(0,2) == '--'){
					//console.log('a2')
					_this.customCss(json['name'],json['value'])
				}
				
				if(needAnimate){
					switch ($(domId).attr('data-widget')){
						case 'checkboxbutton':
							$(domId).checkboxbutton('refresh');
							_this.animate("label[for='" + $(domId).attr('domId') + "']")								
							break;
						case 'checkboxradio':
							$(domId).checkboxradio('refresh');							
							break;
						case 'ntslider':	
							$(domId + '_slider').ntslider('refresh');
							_this.animate(domId + '_slider');
							break;
						case 'selectmenu':
							_this.animate(domId + '-button');
							$(domId).selectmenu('refresh');
							break;
						case 'ColorPicker':
							//console.log('color : ' + domId)
							//$(domId).ColorPickerRefresh();
							break;
					}
				}	
			}
		}
	}	
};
// -------------------------------------------------------------------
var nts = new ntSockets();

//////////////////////////////////////////////////////////////////////////////////////////////
// testing
//	var watchRandom = nts.watch('', 'hostvalue', '#random');
//	var watchCounter = nts.watch('', 'hostvalue', '#counter');


