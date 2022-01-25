///////////////////////////////////////////////////////
//   
//   jQuery Plugin to turn form into wizard.
//   Part of NetTalk by CapeSoft 
//   (c) 2021
//
///////////////////////////////////////////////////////

(function( $, undefined ) {

$.widget( "ui.ntwiz", {
	options: {
		procedure: '',
		validateOnNext: 0,
		active: 0,
		maxTab: 0,
		wizTabs: [],
		minHeight: 0,    
		popup: 0,
		saveOk: 0,
		hidePreviousButton: 0,
		disablePreviousButton: 0,
		ntform: '',
		breadcrumbsId: '',
		pointOfNoReturn: 0,
		hidden: []
	},

//------------------------------------------------------
	_create: function() {           
	  var _this = this;
		this.element.addClass( "ui-widget ui-widget-content ui-corner-all" );
		if (this.options.validateOnNext == 0){	
			$('[data-do="wiznext"]').off('click.wiz').on('click.wiz',function(e){
					_this.next();
				});
		} else {
			$('[data-do="wiznext"]').off('click.wiz').on('click.wiz',function(e){
					_this.tryNext();
				});
		}		
		$('[data-do="wizprev"]').off('click.wiz').on('click.wiz',function(e){
			_this.previous();
			});
		$('[data-tab]').off('click.wiz').on('click.wiz',function(e){
				_this.crumbClick(this);
			});
		this.options.wizTabs = this.element.find('.nt-tab-inner');
		this.options.maxTab=this.options.wizTabs.length-1;
		if (this.options.minHeight){
			var max = this.options.minHeight;
			this.element.find('[data-tabid]').each(function(){
				$(this).show()
				max = Math.max( max, $(this).height() );
				$(this).hide()
			})
			this.element.find('[data-tabid]').height(max);
		}
	},

//------------------------------------------------------
	_init: function() {
		this.active(this.active());
	},	

//------------------------------------------------------
	destroy: function() {
		this.element.removeClass( "ui-widget ui-widget-content ui-corner-all" );
		$.Widget.prototype.destroy.apply( this, arguments );
	},

//------------------------------------------------------
// shortcut to // .option("active", //
	active: function(newValue){ 
		if ( newValue === undefined ) {
			return this.options.active;
		}
		if (this.options.hidden[newValue] != 1){
			this._setOption( "active", newValue );
		}
		return this;
	},

//------------------------------------------------------
	gotoId: function(tabId){ // uses data-tabid attribute, not tab number.
		for(var i=0; i < this.options.wizTabs.length ; i++){
			if ($(this.options.wizTabs[i]).attr('data-tabid') == tabId){
				this.active(i)
				break;
			}
		}	
	},
//------------------------------------------------------
	setTabHeadingIcon: function(index,icon){
		const regex1 = /ui-icon-(.*)/; // to get the name of the existing ui-icon	
		var c = $('#tab_' + this.options.procedure + index + '_div > h3').find('span').eq(0).attr('class').match(regex1)[1]
		$('#tab_' + this.options.procedure + index + '_div > h3').find('span').eq(0).removeClass('ui-icon-' + c).addClass('ui-icon-' + icon)	
	},
//------------------------------------------------------
	setTabHeadingText: function(index,heading){
		$('#tab_' + this.options.procedure + index + '_div > h3 > div').text(heading);
		$('#'+ this.options.breadcrumbsId).find('li:eq('+index+') > a').text(heading);
	},
//------------------------------------------------------
	_setOption: function( key, value ) {
		switch (key){
		case "active":
			$(this.options.wizTabs[this.options.active]).hide();
			this.options.active = value;                        
			$(this.options.wizTabs[this.options.active]).show();
			this.setButtons();
			$(this.options.wizTabs[this.options.active]).find(':input:enabled:visible:first').focus();
			if(this.options.breadcrumbsId){
				$('#'+ this.options.breadcrumbsId).find('li').removeClass('nt-active-crumb');
				$('#'+ this.options.breadcrumbsId).find('li:eq('+this.options.active+')').addClass('nt-active-crumb');
			}
			break;
		case "maxTab":	
			this.options.maxTab = value;
			break;
		case "hideTab":
			this.options.hidden[value] = 1;
			if(this.options.breadcrumbsId){
				$('#'+ this.options.breadcrumbsId).find('li:eq('+value+')').addClass('nt-hidden');
			}
			if(this.options.active==value){
				if(this.next()==false) { 
					this.previous()
				}	
			}
			break;
		case "unhideTab":
			this.options.hidden[value] = 0;
			if(this.options.breadcrumbsId){
				$('#'+ this.options.breadcrumbsId).find('li:eq('+value+')').removeClass('nt-hidden');
			}
			break;
		case "saveOk":		
		  this.options.saveOk = value;  
		  this.setButtons();
		  break;
		} 
		$.Widget.prototype._setOption.apply( this, arguments );
	},

//------------------------------------------------------
	crumbClick: function(elem){
		var tab = $(elem).attr('data-tab');
		if (tab && tab >= 0){
			if (tab < this.options.active && (this.options.disablePreviousButton || tab < this.options.pointOfNoReturn)){
			} else {			
				this.active(tab)
			}	
		}	
	},
//------------------------------------------------------
	setButtons: function(){
		if (this.options.hidePreviousButton){
			$('[name="wizprevious_btn"]').hide();
		} else {
			if (this.active() == 0 || this.options.disablePreviousButton || this.active() <= this.options.pointOfNoReturn){  
				$('[data-do="wizprev"]').button( "option", "disabled", true ).removeClass('ui-state-focus ui-state-hover');
			} else {
				$('[data-do="wizprev"]').button( "option", "disabled", false ).removeClass('ui-state-focus ui-state-hover');
			}
		}
		if (this.active() == this.options.maxTab) {
			$('[data-do="wiznext"]').button( "option", "disabled", true ).removeClass('ui-state-focus ui-state-hover');
		} else {
			$('[data-do="wiznext"]').button( "option", "disabled", false ).removeClass('ui-state-focus ui-state-hover');		
		}
		if (this.options.saveOk != -1 && (this.active() == this.options.maxTab || this.options.saveOk == 1)){
			if (this.options.ntform){
				$(this.options.ntform).ntform('enableSave','wiz');
			} else {
				try{
					$('[name="save_btn"]').button( "option", "disabled", false ).removeClass('ui-state-focus ui-state-hover');
				} catch(e) {
					$('[name="save_btn"]').removeClass('ui-state-focus ui-state-hover');
				}
			}
		}  else {          			
			if (this.options.ntform){
				$(this.options.ntform).ntform('disableSave','wiz');
			} else {
				try{
					$('[name="save_btn"]').button( "option", "disabled", true ).removeClass('ui-state-focus ui-state-hover');
				} catch(e) {
					$('[name="save_btn"]').removeClass('ui-state-focus ui-state-hover');
				}
			}
		} 
		return this;
	},
//------------------------------------------------------  
	noReturn: function() {  
		this.options.pointOfNoReturn = this.active()
	},
//------------------------------------------------------  
	tryNext: function() {  
		var parms = '_ajax_=1&_popup_=' + this.options.popup;
		var _this=this;
		$.get(this.options.procedure + '_nexttab_' + $(this.options.wizTabs[this.options.active]).attr('data-tabid'),parms,function(data){_this._onAjaxComplete(data);});
	},
//------------------------------------------------------  
	tabChanged: function (){
		var parms = '_ajax_=1&_popup_=' + this.options.popup + '&_tab_=' + this.options.active + '&_tabid_=' + $(this.options.wizTabs[this.options.active]).attr('data-tabid');
		var _this=this;
		$.get(this.options.procedure+'_tabchanged',parms,function(data){_this._onAjaxComplete(data);});
	},

//------------------------------------------------------  
	_onAjaxComplete: function(data) {
		xmlProcess(data);

		if (this.options.ntform){
			$(this.options.ntform).ntform('ready');
		}	
		return this;

	},
//------------------------------------------------------  
	next: function() {  
		for(var n = this.active()- -1; n <= this.options.maxTab; n++){
			if (this.options.hidden[n] != 1){
				this.active(n);
				this.tabChanged();
				return true;
			}
		}
		return false;
	},
//------------------------------------------------------   
	previous: function() {
		if (this.options.hidePreviousButton || this.options.disablePreviousButton){
			return this;
		}
		for(var n = this.active()-1; n >= 0; n--){
			if (this.options.hidden[n] != 1){
				this.active(n);
				this.tabChanged();
				return true;
			} 
		}
		return false;
  },
//------------------------------------------------------   
	hideNext: function() {  
		$('[data-do="wiznext"]').hide();	
	},
//------------------------------------------------------   
	showNext: function() {  
		$('[data-do="wiznext"]').show();	
	},
//------------------------------------------------------   
	hidePrevious: function() {  
		$('[data-do="wizprev"]').hide();
	},
//------------------------------------------------------   
	showPrevious: function() {  
		$('[data-do="wizprev"]').show();
	}
//------------------------------------------------------
});

$.extend( $.ui.ntwiz, {
	version: "@VERSION"
});

})( jQuery );

///////////////////////////////////////////////////////
// end ntwiz
///////////////////////////////////////////////////////
