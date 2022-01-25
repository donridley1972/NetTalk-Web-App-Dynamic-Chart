///////////////////////////////////////////////////////
//
//   jQuery Plugin for NetTalk Menu
//   Part of NetTalk by CapeSoft
//   (c) 2018
//
///////////////////////////////////////////////////////

(function( $, undefined ) {

$.widget( "ui.ntmenu", {
        options: {
			id: '',          
			ul:'',			// id of first UL for the menu
			burger:'',     // id of hamburger
			viewOnly:0
		},
		state: {
			menuOpen:0,
			mobile:0
		},

		//------------------------------------------------------
        _create: function() {
			var _this=this;
        },

		//------------------------------------------------------
        _init: function() {
			var _this=this;
			$('#' + this.options.ul).menuex(this.options);
			$('#' + this.options.burger).on('click.mn').on('click.mn',function(e){_this.burgerClick();});
            $('#' + this.options.ul).find('> li > ul').addClass('ui-corner-all ui-widget ui-widget-content')       //bj
			$('#' + this.options.ul).addClass('ui-widget');
			$('#' + this.options.ul).children('li').children('a').addClass('ui-widget ui-state-default');						
			$('#' + this.options.ul).hover(function(){return false;},function () {
				$('#' + _this.options.ul).menuex("collapseAll", null, true);
			});			
        },
		//------------------------------------------------------
        burgerClick: function() {
			this.state.mobile = true
			if (this.state.menuOpen==0){
				this.openMenu()
			} else {
				this.closeMenu()
			}
        },
		//------------------------------------------------------
        openMenu: function() {
			$('#' + this.options.ul).show();
			this.state.menuOpen=1
        },
		//------------------------------------------------------
        closeMenu: function() {
			if(this.state.mobile){
				$('#' + this.options.ul).hide();
				this.state.menuOpen=0
			}	
		}
//------------------------------------------------------
});

$.extend( $.ui.ntmenu, {
        version: "@VERSION"
});

})( jQuery );

// derive from ui.menu with options to overide child menu icon and position.
$.widget( "ui.menuex", $.ui.menu, {
	collapseAll: function(event,all){
		if (all){
			$('#' + this.options.ul).ntmenu("closeMenu");
		}
        return this._super(event, all);	// Invoke the parent widget's collapseAll().
	},
	// nt adds ability to override position based on data-pos attribute. 
	_open: function( submenu ) {
		switch($(this.active).attr('data-pos')){  // nt
		case "right":
			var position = $.extend( {
				of: this.active
			}, { my: "right top", at: "left+0 top+0"} ); // i know, this is weird
			break
		case "down":
		default:
			var rad = getPixels(getCss('--menu-radius',submenu[0].id))
			var position = $.extend( {
				of: this.active
			}, { my: "left top", at: "left+"+rad+" bottom-1"} );
			break;
		}									// nt end

		clearTimeout( this.timer );
		this.element.find( ".ui-menu" ).not( submenu.parents( ".ui-menu" ) )
			.hide()
			.attr( "aria-hidden", "true" );

		submenu
			.show()
			.removeAttr( "aria-hidden" )
			.attr( "aria-expanded", "true" )
			.position( position );
	},
	refresh: function() {  // nt adds ability to override sub-menu icon based on data-icon attribute
		var menus, items, newSubmenus, newItems, newWrappers,
			that = this,
			icon = this.options.icons.submenu,														
			submenus = this.element.find( this.options.menus );

		this._toggleClass( "ui-menu-icons", null, !!this.element.find( ".ui-icon" ).length );

		// Initialize nested menus
		newSubmenus = submenus.filter( ":not(.ui-menu)" )
			.hide()
			.attr( {
				role: this.options.role,
				"aria-hidden": "true",
				"aria-expanded": "false"
			} )
			.each( function() {
				var menu = $( this ),
					item = menu.prev(),
					submenuCaret = $( "<span>" ).data( "ui-menu-submenu-caret", true );

				if($(this).attr('data-icon')){					// nt 
					that._addClass( submenuCaret, "ui-menu-icon", "ui-icon " + "ui-icon-" + $(this).attr('data-icon') ); //nt
				} else {					
					that._addClass( submenuCaret, "ui-menu-icon", "ui-icon " + icon ); // jq
				}	
				item
					.attr( "aria-haspopup", "true" )
					.prepend( submenuCaret );
				menu.attr( "aria-labelledby", item.attr( "id" ) );
			} );

		this._addClass( newSubmenus, "ui-menu", "ui-widget ui-widget-content ui-front" );

		menus = submenus.add( this.element );
		items = menus.find( this.options.items );

		// Initialize menu-items containing spaces and/or dashes only as dividers
		items.not( ".ui-menu-item" ).each( function() {
			var item = $( this );
			if ( that._isDivider( item ) ) {
				that._addClass( item, "ui-menu-divider", "ui-widget-content" );
			}
		} );

		// Don't refresh list items that are already adapted
		newItems = items.not( ".ui-menu-item, .ui-menu-divider" );
		newWrappers = newItems.children()
			.not( ".ui-menu" )
				.uniqueId()
				.attr( {
					tabIndex: -1,
					role: this._itemRole()
				} );
		this._addClass( newItems, "ui-menu-item" )
			._addClass( newWrappers, "ui-menu-item-wrapper" );

		// Add aria-disabled attribute to any disabled menu item
		items.filter( ".ui-state-disabled" ).attr( "aria-disabled", "true" );

		// If the active item has been removed, blur the menu
		if ( this.active && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
			this.blur();
		}
	}
		
});		
///////////////////////////////////////////////////////
// end ntmenu
///////////////////////////////////////////////////////


