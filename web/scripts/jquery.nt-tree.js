///////////////////////////////////////////////////////
//   
//   Tree control, using aciTree widget, wrapped for NetTalk server
//   Part of NetTalk by CapeSoft 
//   (c) 2021
//
///////////////////////////////////////////////////////
(function( $, undefined ) {


$.widget("ui.nttree", {
	_this:this,
	options: {
		parent: '',
		parentrid: '',
		popup: '',
		randomid: '',
		id: '',
		procedure:'',
		ajax:{ url: ''},	
		clickHook: function(parent, item, itemData, level){
		}
	},
	aciTree: null,

//------------------------------------------------------
	_create: function() {           
		var _this = this;
		this.options.clickHook = function(parent, item, itemData, level) {         // send async request to server procedure
			_this.server('row=' + itemData.source ,'_event_=accepted')
		}
	  
		// init the tree
		this.options.ajax.url = this.options.procedure + '?_event_=populatetree&_node_=root&_ajax_=1&id=' + this.options.id;
		// this.options.aciTree = $('#' + this.options.id).aciTree(_this.options);
		this.aciTree = $('#' + this.options.id).aciTree(_this.options).aciTree('api');
	},
//------------------------------------------------------   
	setIcon: function(id,icon) {
		var item = $('#'+id);
		var options = {icon: icon}
		this.aciTree.addIcon(item,options)
		return this;
	},
//------------------------------------------------------   
	onAjaxComplete: function(data) {
		xmlProcess(data);
		return this;
	},
//------------------------------------------------------   
	server : function() {         // send async request to server procedure
		var parms='';
		var _this=this;
		for(var d = 0; d < arguments.length; d++){
			parms += arguments[d] + '&';
		}
		parms += '_parentProc_=' + this.options.parent + '&_parentRid_=' + this.options.parentrid + '&_ajax_=1&_popup_=' + this.options.popup + '&_rid_=' + this.options.randomid + '&_rnd_=' + Math.random().toString(36).substr(5);
		parms = parms.replace(/\r\n/g,"%0D%0A");
		parms = parms.replace(/\n\r/g,"%0D%0A");
		parms = parms.replace(/\r/g,"%0D%0A");
		parms = parms.replace(/\n/g,"%0D%0A");
		$.get(this.options.procedure + '_' + this.options.id + '_value' ,parms,function(data){_this.onAjaxComplete(data);});
		return this;
	}
//------------------------------------------------------
 });
$.extend( $.ui.nttree, {version: "@VERSION"});

})( jQuery );

///////////////////////////////////////////////////////
// end nttree
///////////////////////////////////////////////////////
