///////////////////////////////////////////////////////
//   
//   jQuery UI Plugin for Session Manager
//   Part of NetTalk by CapeSoft 
//   (c) 2021 
//
///////////////////////////////////////////////////////

(function( $, undefined ) {

$.widget( "ui.ntsessionmanager", {
	options: {
		divId: '',	
		homePage: '/',
		showCountdown: true,
		prompt: 'Session Expires In:',
		promptCss: 'nt-session-prompt',
		sessionTimeout: 15 * 60, // seconds - server-side timeout
		warn: true,
		warningTime: 30, // seconds
		messageTitle: 'Warning',
		messageText: 'Your Session is about to expire.',
		okButtonText: 'Extend Session',
		okButtonCss: 'nt-session-okbutton',
		cancelButtonText: 'End Session',
		canceButtonCss: 'nt-session-cancelbutton'		
	},
	state: {
		warnOpen: false,
		timeLeft: 15 * 60, // seconds // time when the server-side will expire		
		touchCycles: 0 // keep the server alive from the client for this many cycles.
	},
	//------------------------------------------------------
	_create: function() {      
	},
	//------------------------------------------------------
	_init: function() {
		sessionManagerId = '#' + this.options.divId; // external variable declared in netweb.js 
		this.startCountDown();
	},
	// ---------------------------------------------
	startCountDown(){
		if (this.options.showCountdown){
			$('#' + this.options.divId).html('<div id="' + this.options.divId + '_prompt" class = "' + this.options.promptCss + '">' + this.options.prompt + '</div><div id="' + this.options.divId + '_timer" ></div>')
		}
		this.resetCountDown()
		this.countDown();
	},	
	// ---------------------------------------------
	resetCountDown(){
		this.state.timeLeft = this.options.sessionTimeout;
	},
	// ---------------------------------------------
	setTimeOut(newtimeout){
		if (newtimeout > this.state.timeLeft){
			this.touchSession()
		}
		this.state.touchCycles = 0;
		if (newtimeout > this.options.sessionTimeout){
			this.state.touchCycles = Math.floor((newtimeout-1) / this.options.sessionTimeout)
		}
		this.state.timeLeft = newtimeout - (this.state.touchCycles * this.options.sessionTimeout)
	},
	// ---------------------------------------------
	touchSession(){
		SetSessionValue('_touch_',1);
		this.resetCountDown();
	},
	// ---------------------------------------------
	endSession(homePage){
		var date = new Date();
		date.setTime(date.getTime() + (1 * 100));
		document.cookie = 'logout_btn=true; expires=' + date.toGMTString();
		if (!homePage){
			homePage = this.options.homePage
		} 
		if (!homePage){
			homePage = '/'
		}  
		window.open(homePage,'_top');
	},
	// ---------------------------------------------
	countDown(){
		var showtime = (this.state.touchCycles * this.options.sessionTimeout) + this.state.timeLeft
		var hh = parseInt( showtime / 3600 );
		var mm = parseInt( showtime / 60 ) % 60;
		var ss = showtime % 60;
		if (hh || mm > 5 ){
			var t = ' ' + hh + ":" + (mm < 10 ? "0" + mm : mm);
		} else {
			var t = ' ' + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss);
		}	
		$('#' + this.options.divId + '_timer').html(t);
		this.state.timeLeft -= 1;
		if (this.state.touchCycles > 0 && (this.state.timeLeft < this.options.warningTime || this.state.timeLeft < 5)){
			this.state.touchCycles -= 1
			this.touchSession()
		} else {
			if (this.options.warn && this.state.warnOpen == false && this.state.timeLeft < this.options.warningTime){
				this.confirm();
			}
		}
		if (this.state.timeLeft == 0){
			this.endSession()
		} else {
			setTimeout("$('#"+this.options.divId+"').ntsessionmanager('countDown');",1000);			
		}
	},
	// ---------------------------------------------
	confirm(){		
		var _this = this;
		_this.state.warnOpen = true
		setTimeout(function(){
			var a = $(":focus").attr('id');
			$("#message_alert").remove();
			$('body').append('<div id="message_alert">' + _this.options.messageText + '</div>');
			$("#message_alert").dialog({
				title: '<span style="margin-left:1em;margin-right:1em;" class=" ui-icon ui-icon-info ui-icons-warning"></span>' + _this.options.messageTitle,
				resizable: false,
				modal: true,
				width: 500,
				classes: {"ui-dialog": "nt-warning-dialog no-close"},
				buttons: [	{			
					text: $("<textarea/>").html(_this.options.okButtonText).text(),
					class: "ui-button nt-button nt-save-button",
					click: function() {
						$(this).dialog("close");
						$("#message_alert").remove();
						_this.touchSession();
					} }, {
					text: $("<textarea/>").html(_this.options.cancelButtonText).text(),
					class: "ui-button nt-button nt-delete-button",
					click: function() {
						$(this).dialog("close");
						$("#message_alert").remove();					
						_this.endSession(_this.options.homePage);
					} } 				
				],
				open: function() {
					$(this).parent().find('button:nth-child(1)').focus(); 
				},
				close: function() {
					$('#' + a).focus();
					_this.state.warnOpen = false
				}
			});	
			setTimeout(function() { $("#message_alert").dialog("close"); }, (_this.options.warningTime) * 1000);
		}, 1);
	}	
//------------------------------------------------------
});

$.extend( $.ui.ntsessionmanager, {
	version: "@VERSION"
});

})( jQuery );
