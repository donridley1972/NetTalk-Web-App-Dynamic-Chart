///////////////////////////////////////////////////////
//   
// 	Get some data from another web server, and push it into an attribute of an element on this page.
//  By default the alternate input comes from http://127.0.0.1:80/GetData
//
// d) GenerateForm routine, add
//    p_web.script('$(''#whatever'').ntother();')
///////////////////////////////////////////////////////

(function( $, undefined ) {

$.widget( "ui.ntother", {
	options: {
		ssl:0, 				// this widget should make an SSL connection to the other server
		host: "127.0.0.1", 	// the host name of the other server
		port:80,			// the port number of the other procedure
		url:"GetData", 		// the page (proceudre) of the other procedure
		parms:"", 			// any parameters to send as part of the call
		id:'', 				// the id of the element to receive the value
		autostart:0, 		// start polling the other server immediately when this widget is created
		timer:1000, 		// the poll time for polling the other server
		polling:0,			// if 1 then polling is active. (Use start and stop methods to change this value.)
		attr:"value"		// the attribute of the element to place the result into
	},
//------------------------------------------------------
	_init: function() {
		if (this.options.autostart){
			this.start();
		}	
	},	
//------------------------------------------------------
	start: function() {
		this.options.polling = 1;
		this.poll(true);
	},	
//------------------------------------------------------
	stop: function() {
		this.options.polling = 0;
	},	
//------------------------------------------------------
	_onAjaxComplete: function(d) {
		if (d){
			$("#"+this.options.id).attr(this.options.attr,d);		
		}	
	},	
//------------------------------------------------------
	poll: function(auto) {
		this.getData();
		if (this.options.polling && auto){
			setTimeout('$("#'+this.options.id+'").ntother("poll",true);',this.options.timer);
		}	
	},	
//------------------------------------------------------  	
	getData: function() {
		var _this=this;
		var protocol = 'http://';
		if (this.options.ssl){
			protocol = 'https://';
			if (this.options.port==80){
				this.options.port=443;
			}
		}	
		$.get(protocol + this.options.host+":"+this.options.port+"/"+this.options.url,
			"_ajax_=1&" + this.options.parms,
			function(d){_this._onAjaxComplete(d);});	
	}
//------------------------------------------------------
});

$.extend( $.ui.ntother, {
	version: "@VERSION"
});

})( jQuery );
