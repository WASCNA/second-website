/**
 *
 * Main Site Javascript - scottcoffrin.com
 *
 * This file employees the following external resources for
 * functionality: quickbox, mootools-core, mootools-more, and
 * mootools-clientcide.
 *
 * @package sc-web
 * @subpackage sc-web_javascript
 *
 * @author Rob Frawley <projects@inserrat.com>
 * @copyright Scott Coffrin <scott@scottcoffrin.com>
 * 
 * @version 0.2.1 BETA
 *
 */
 
var MainNavFixed = new Class({
    
    Implements: Options,
    
	options: {
		'fxOptions': {
			'duration': 100,
			'link': 'cancel'
		}	
	},
	
    initialize: function( options ) {

        this.setOptions( options );
        
        this.setupElement();
    
    },
    
    setupElement: function() {
        
		//console.log( 'this' );
        this.setupEvents();
        
    },
    
    setupEvents: function() {
		
		/*
		
        this.windowSize = window.getSize().y - $('Top').getSize().y;
        this.sidebarSize = this.element.getSize().y;
        this.coors = this.element.getCoordinates();
        this.footCoors = $('Footer').getCoordinates();
        this.trailCoors = $('Trail').getCoordinates();

        this.bottomTrigger = this.footCoors.height+this.trailCoors.height;
        this.coorsContent = $('Content').getCoordinates();
        $('Side').setStyles({
            'height': this.coorsContent.height-80,
            'position': 'relative'
        });
        //console.log(this.bottomTrigger);
        //console.log( this.windowSize );
        //console.log( this.sidebarSize );

        this.origWindowWidth = window.getSize().x;

        this.windowSize = window.getSize().y - $('Top').getSize().y;
        this.sidebarSize = this.element.getSize().y;
        this.coors = this.element.getCoordinates();
        this.footCoors = $('Footer').getCoordinates();
        this.trailCoors = $('Trail').getCoordinates();

        this.origCordsLeft = this.coors.left;
        this.bottomTrigger = this.footCoors.height+this.trailCoors.height;
        this.coorsContent = $('Content').getCoordinates();
        this.sizeContent = $('Content').getSize();
		*/
		
		this.smallLogo = $('SmallLogo');
		this.smallLogo.set( 'morph', this.options.fxOptions );
		this.smallLogo.setStyles({'opacity': 0});
		this.headerHeight = $('HeaderWrapper').getSize().y;
		this.navEl = $('NavWrapper');
		this.navSubEl = $('SubHeaderWrap');
		this.mainHeader = $('MainHeader');
		
        //window.addEvent('resize', this.resizeEvent.bind(this) );
        window.addEvent('scroll', this.scrollEvent.bind(this) );
        /*function(e) {
            console.log('scrollEvent');
            console.log( window.getScroll() );
            //console.log(this.element.position());
        });*/

    },

    scrollEvent: function( e ) {
		
		if( window.getScroll().y > this.headerHeight )
		{
			this.navEl.setStyles({
				position: 'fixed',
				left: 0,
				right: 0,
				top: 0
			});
			this.navSubEl.setStyles({
				position: 'fixed',
				left: 0,
				right: 0,
				top: 60
			});
			/*this.mainHeader.setStyles({
				position: 'fixed',
				left: 0,
				right: 0,
				top: 94
			});*/
			this.smallLogo.morph({'opacity': .95});
		}
		else
		{
			this.navEl.setStyles({
				position: 'absolute',
				top: 250
			});
			this.navSubEl.setStyles({
				position: 'absolute',
				top: 310
			});
			/*this.mainHeader.setStyles({
				position: 'absolute',
				left: 0,
				right: 0,
				top: 344
			});*/
			this.smallLogo.morph({'opacity': 0});
		}
		
		return;

    }
});
 
var MeetingListItems = new Class({

	Implements: Options,
	
	options: {
		fxOptions: {
			'duration': 250,
			'link': 'cancel'
		},
		morphEnter: {
			'opacity': 1
		},
		morphLeave: {
			'opacity': 0
		},
	},

	triggers: new Array(),
	containers: new Array(),
	containersAddr: new Array(),
	containersAddrNote: new Array(),
	containersNote: new Array(),
	containersMaps: new Array(),
	fx: new Array(),
	
	initialize: function( options ) {

		//return;
		this.setupElements();
				
	},

	toggleVisibility: function( el, display ) 
	{
       el = $( el );
       if(el.style.display == display)
          el.style.display = 'none';
       else
          el.style.display = display;
    },

	setupElements: function() {

		$$( '#MeetingList li.itemHoverFx' ).each( function( a, i ){

			a.set('styles', {'height': 120});
			a.set( 'morph', this.options.fxOptions );
			this.containers.include( a );
			locNotes = a.getChildren( 'p.locNotes' );
			if( ! locNotes.pick() )
			{
				this.containersAddrNote.include( new Element('p') );
			}
			else
			{
				locNotes = locNotes.pick();
				locNotes.set('styles', {'opacity': 0});
				locNotes.set( 'morph', this.options.fxOptions );
				this.containersAddrNote.include( locNotes );
			}
			
			locNotes = a.getChildren( 'address' );
			if( ! locNotes.pick() )
			{
				this.containersAddr.include( new Element('address') );
			}
			else
			{
				locNotes = locNotes.pick();
				locNotes.set('styles', {'opacity': 0});
				locNotes.set( 'morph', this.options.fxOptions );
				this.containersAddr.include( locNotes );
			}
			
			locNotes = a.getChildren( 'p.meetingInfo' );
			if( ! locNotes.pick() )
			{
				this.containersNote.include( new Element('address') );
			}
			else
			{
				locNotes = locNotes.pick();
				locNotes.set('styles', {'opacity': 0});
				locNotes.set( 'morph', this.options.fxOptions );
				this.containersNote.include( locNotes );
			}
			
		}.bind( this ) );
		
		$$( '#MeetingList li.itemHoverFx a.locMap' ).each( function( a, i ){

			this.containersMaps.include( a );
			a.set('styles', {'height': 120});
			a.set( 'morph', this.options.fxOptions );

		}.bind( this ) );
		
		$$( '#MeetingList li.itemHoverFx button.meetingListItemMore' ).each( function( a, i ){

			this.triggers.include( a );
			a.addEvent('click', this.handleClickEvent.bind(this));

		}.bind( this ) );

	},
	
	handleClickEvent: function( e )
	{
		e.stop();
		t = e.target;
		state = t.get('text');
		if( state == 'Show More' )
		{
			t.set('text', 'Show Less');
			var index = this.triggers.indexOf( t );
			this.triggers[index].morph({'bottom': 30});
			this.containersMaps[index].morph({'height': 280});
			this.containers[index].morph({'height': 280});
			this.containersNote[index].morph({opacity: 1});
			this.containersAddr[index].morph({opacity: 1});
			this.containersAddrNote[index].morph({opacity: 1});
		}
		else
		{
			t.set('text', 'Show More');
			var index = this.triggers.indexOf( t );
			this.triggers[index].morph({'bottom': 46});
			this.containersMaps[index].morph({'height': 120});
			this.containers[index].morph({'height': 120});
			this.containersNote[index].morph({opacity: 0});
			this.containersAddr[index].morph({opacity: 0});
			this.containersAddrNote[index].morph({opacity: 0});
		}
		
	}

});

var SubNav = new Class({

	Implements: Options,
	
	options: {
		fxOptions: {
			'duration': 200,
			'link': 'cancel'
		},
		morphEnter: {
			'opacity': 1
		},
		morphLeave: {
			'opacity': 0
		}
	},
	
	nav: new Array(),
	navSub: new Array(),
	navC: false,
	subHeader: false,
	navSel: 0,
	subNavC: false,
	navRoot: new Array(),
	
	initialize: function( options ) {
		
		this.setOptions( options );
		
		this.setupNav();
		this.setupEvents();
				
	},
	
	setupNav: function() {

		this.navC = $$( 'nav > ul' );
		this.navC = this.navC[ 0 ];
		this.subNavC = $( 'SubHeader' );
		this.subNavCFx = new Fx.Slide( this.subNavC, this.options.fxOptions );
		this.subNavCFx.slideOut();
		this.subNavC.set( 'morph', this.options.fxOptions );
		this.subNavC.set( 'styles', this.options.morphLeave );

		this.nav = $$( 'nav > ul > li' );
		this.subHeader = $( 'SubHeader' );
		this.controller = $( 'CurrentPageController' ).innerHTML;

		this.nav.each( function( n, i ) {

			rootA = n.getChildren( 'a' ).get( 'href' );
			sub = n.getChildren( 'ul' );
			this.navSub.include( sub.clone() );

			if ( rootA == '/'+this.controller )
			{
				this.show( i );
				n.addClass( 'currentPage' );
				this.navSel = i;
			}

		}.bind( this ) );

		

		this.aEls = $$( 'nav > ul > li' );
		
		this.aEls.each( function( a, i ){

			children = a.getChildren( 'ul' );

			if( children.length > 0 )
			{

				a.addEvents({
					'click': function( e ) {

						

						//e.stop();
					}
				})

			}

		}.bind( this ) );



	},
	
	setupEvents: function() {

		this.nav.addEvents({
			
			'mouseover': this.handleMouseover.bind( this ),
			'mouseout': this.handleMouseout.bind( this )

		});
		
	},

	handleMouseover: function( e ) {
		
		e.stop();

		var index = this.nav.indexOf( e.target.getParent() );
		this.index = index;

		this.show( index );
		
	},

	show: function( index ) {

		if( index === this.navSel )
		{
			//return;
		}

		this.nav.each( function( n, i ){

			if( n.hasClass( 'selectedBE' ) )
			{
				n.removeClass( 'selectedBE' );
			}

			if( n.hasClass( 'selected' ) )
			{
				n.removeClass( 'selected' );
			}


			if( n.hasClass( 'selectedNoSub' ) )
			{
				n.removeClass( 'selectedNoSub' );
			}

		}.bind( this ) );

		if( ! this.navSub[ index ] )
		{
			this.nav[ index ].addClass('selected')
			return;
		}

		if( index == this.navSel && this.navSub[ index ].length == 0 )
		{

			this.subNavCFx.slideOut();
			this.subNavC.morph( this.options.morphLeave );
			this.nav[ index ].addClass( 'selectedNoSub' );

		}
		else if( this.navSub[ index ].length == 0 )
		{

			this.subNavCFx.slideOut();
			this.subNavC.morph( this.options.morphLeave );
			this.nav[ index ].addClass( 'selectedNoSub' );

		}
		else
		{

			this.nav[ index ].addClass( 'selected' );

			this.subHeader.empty();
			this.subHeader.adopt( this.navSub[ index ] );
			this.subNavCFx.slideIn();
			this.subNavC.morph( this.options.morphEnter );


		}

	},
	
	handleMouseout: function( e ) {
		
		e.stop();
		return;

		var index = this.nav.indexOf( e.target.getParent() );

		if( this.navSub[ index ].length == 0 )
		{

			this.nav[ index ].removeClass( 'selectedNoSub' );
			this.nav[ this.navSel ].removeClass( 'selectedBE' );
			rootA = this.nav[index].getChildren( 'a' ).get( 'href' );

			if ( rootA == '/'+this.controller )
			{
				this.nav[ index ].addClass( 'selectedNoSub' );
			}

		}

		
		//var index = this.nav.indexOf( e.target.getParent() );
		//this.nav[ index ].removeClass( 'selected' );

		
	},

});

var PopupAs = new Class({

    Implements: Options,
    
    options: {},
    
    aEls: false,
    
    initialize: function( options ) {
        
        this.aEls = $$( 'a[data-popup]' );
        
        this.aEls.each( function( a, i ){

            a.addEvents({
                'click': function( e ) {

                    t = e.target;

                    if( !t.href )
                    {
                        t = t.getParent();
                    }
                    window.open( t.href );

                    e.stop();
                }
            })

        }.bind( this ) );
                
    },

    handleClick: function( e ) {

        

    },

});

var ToolTipAbbr = new Class({

    Implements: Options,
    
    options: {},
    
    aEls: false,
    
    initialize: function( options ) {
        
        $$( 'abbr[title]' ).addEvent('mouseover', function() {
             ToolTip.instance(this, this.get('title')).show();
        });

        $$( '.calendarEvent a' ).addEvent('mouseover', function() {
             ToolTip.instance(this, this.get('html')).show();
        });
                
    }

});

var Minutes = new Class({

	Implements: Options,
	
	options: {
		fxOptions: {
			'duration': 300,
			'link': 'cancel'
		}
	},
	
	triggers: new Array(),
	containers: new Array(),
	fx: new Array(),
	
	initialize: function( options ) {
		
		if( ! $( 'MinutesList' ) )
		{
			return;
		}

		this.setupElements();
				
	},

	setupElements: function() {

		$$( '#MinutesList li a.minutesShowAll' ).each( function( a, i ){

			a.addEvents({

				'click': function( e ){
					e = new Event(e);
					e.stop();

					var target = e.target;
                    if( ! target.hasClass('minutesShowAll') )
                    {
                        newtarget = target.getParent();
                        target = newtarget;
                    }
                    var span = target.getChildren( 'span' );
					if( span[0].get( 'text' ) == 'Show All' )
					{
						span[0].set( 'text', 'Hide All' );
						target.addClass( 'minutesFilesHide' );
						target.removeClass( 'minutesFilesShow' );
					}
					else
					{
						span[0].set( 'text', 'Show All' );
						target.removeClass( 'minutesFilesHide' );
						target.addClass( 'minutesFilesShow' );
					}
					//console.log(target);
					var index = this.triggers.indexOf( a );
					this.fx[ index ].toggle();

				}.bind( this )

			});

			a.addClass( 'minutesFilesShow' );
			this.triggers.include( a );

		}.bind( this ) );

		$$( '#MinutesList li ol' ).each( function( c, i ){

			var fx = new Fx.Slide( c, this.options.fxOptions );
			fx.hide();
			this.fx.include( fx );
			this.containers.include( c );

		}.bind( this ) );

	},

	handleClick: function( e ) {

		

	},

});

var SetIFrameSize = new Class({

	Implements: Options,
	
	options: {
	},
	
	iframes: new Array(),
	windowHeight: 0,
	
	initialize: function( options ) {
		
		this.setupElements();
				
	},

	setupElements: function() {

		$$( 'iframe.scale' ).each( function( f, i ){

			this.iframes.include( f );

		}.bind( this ) );

		this.windowHeight = window.getSize().y;

		this.iframes.each( function( f, i ){

			f.set( 'height', this.windowHeight );

		}.bind( this ) );

	},


});

var MeetingsU = new Class({

	Implements: Options,
	
	options: {
		fxOptions: {
			'duration': 400,
			'link': 'cancel'
		},
	},
	
	triggers: new Array(),
	containers: new Array(),
	fx: new Array(),
	
	initialize: function( options ) {
		
		if( ! $( 'HomeMeetings' ) )
		{
			return;
		}

		this.setupElements();
				
	},

	toggleVisibility: function( el, display ) 
	{
       el = $( el );
       if(el.style.display == display)
          el.style.display = 'none';
       else
          el.style.display = display;
    },

	setupElements: function() {

		$$( '#HomeMeetings .meetingsMoreInfoI' ).each( function( a, i ){

			a.addEvents({

				'click': function( e ){
					e = new Event(e);
					e.stop();

					var target = e.target;
					if( target.get( 'text' ) == 'More Info' )
					{
						target.set( 'text', 'Less Info' );
						target.addClass( 'minutesUHide' );
						target.removeClass( 'minutesUShow' );
					}
					else
					{
						target.set( 'text', 'More Info' );
						target.removeClass( 'minutesUHide' );
						target.addClass( 'minutesUShow' );
					}
					//console.log(target);
					var index = this.triggers.indexOf( a );
					this.fx[ index ].toggle();
					this.toggleVisibility( this.moreInfo[ index ], 'inline' );
					//this.containers[ index ].morph( this.options.morphEnter );

				}.bind( this )

			});

			a.addClass( 'minutesUShow' );
			this.triggers.include( a );

		}.bind( this ) );
		this.moreInfo = $$( '#HomeMeetings .meetingsMoreInfoEndT' );
		$$( '#HomeMeetings .meetingsMoreInfoV' ).each( function( c, i ){

			//c.set( 'morph', this.options.fxOptions );
			//c.set( 'styles', this.options.morphLeave );
			var fx = new Fx.Slide( c, this.options.fxOptions );
			fx.hide();
			this.moreInfo[ i ].set( 'style', 'display:none' );
			this.fx.include( fx );
			this.containers.include( c );

		}.bind( this ) );

	},

});

var FAQ = new Class({

    Implements: Options,

    options: {
        fxOptions: { 'duration': 400, 'link': 'cancel' },
        triggersMorphUnclick: { 'border-radius': '4px 4px 0px 0px' },
        triggersMorphClick: { 'border-radius': '4px 4px 4px 4px' }
    },

    triggers: new Array(),
    containers: new Array(),
    fx: new Array(),

    initialize: function( options ) {

        this.setOptions( options );

        if( !$('PI_FAQ') ) return;

        this.setupElements();
        this.setupEvents();

    },

    setupElements: function() {

        $$( '#PI_FAQ dt' ).each(function(t, i){

            t.addClass( 'ddClosed' );
            t.store( 'index', i );
            this.triggers.include( t );

        }.bind(this));
        $$( '#PI_FAQ dd' ).each(function(c, i){

            fx = new Fx.Slide( c, this.fxOptions );
            fx.hide();
            c.store( 'fx', fx );
            this.containers.include( c );

        }.bind(this));

        this.triggers[ 0 ].removeClass( 'ddClosed' );
        this.triggers[ 0 ].addClass( 'ddOpen' );
        this.containers[ 0 ].retrieve( 'fx' ).slideIn();

    },

    setupEvents: function() {

        this.triggers.each(function(el){
            el.set('morph', { 
                duration: 200 
            }).addEvents({

                mouseenter: this.handleMouseEnter.bind( this ),
                mouseleave: this.handleMouseLeave.bind( this ),
                click: this.handleClick.bind( this )

            })

        }.bind( this ));

    },

    handleMouseEnter: function( e )
    {
        el = e.target;
        if( ! el.hasClass( 'ddOpen' ) )
        {
            el.morph( '.faqDtEnter' )
        }
    },

    handleMouseLeave: function( e )
    {
        el = e.target;
        if( ! el.hasClass( 'ddOpen' ) )
        {
            el.morph( '.faqDtLeave' )
        }
    },

    handleClick: function( e )
    {

        dt = e.target;
        index = dt.retrieve( 'index' );
        if( dt.hasClass( 'ddOpen' ) )
        {
            dt.removeClass( 'ddOpen' );
            dt.addClass( 'ddClosed' );
        }
        else
        {
            dt.addClass( 'ddOpen' );
            dt.removeClass( 'ddClosed' );
        }

        this.containers.each(function( c, i ){

            //fx = c.retrieve( 'fx' );
            //fx.slideOut();

        });

        this.containers[ index ].retrieve( 'fx' ).toggle();

    }

});

var ReadMoreLinks = new Class({

	Implements: Options,
	
	options: {
		fxOptions: {
			'duration': 100,
			'link': 'cancel'
		},
		morphEnter: {
			'opacity': 1
		},
		morphLeave: {
			'opacity': 0
		},
	},

	triggers: new Array(),
	containers: new Array(),
	fx: new Array(),
	
	initialize: function( options ) {

		this.setupElements();
				
	},

	toggleVisibility: function( el, display ) 
	{
       el = $( el );
       if(el.style.display == display)
          el.style.display = 'none';
       else
          el.style.display = display;
    },

	setupElements: function() {

		$$( 'a.readMore' ).each( function( a, i ){

			a.set( 'morph', this.options.fxOptions );
			a.set( 'styles', { 'opacity': 0.6, 'padding-left': 10, 'padding-right': 10 } );

			a.addEvents({

				'mouseenter': function( e ){
					e = new Event(e);
					e.stop();

					e.target.morph( { 'opacity': 1, 'padding-left': 15, 'padding-right': 15 } );

				}.bind( this ),

				'mouseleave': function( e ){
					e = new Event(e);
					e.stop();

					e.target.morph( { 'opacity': .5, 'padding-left': 10, 'padding-right': 10 } );

				}.bind( this ),

			});

			

		}.bind( this ) );

	},

});

var ItemHoverFx = new Class({

    Implements: Options,
    
    options: {
        fxOptions: {
            'duration': 100,
            'link': 'cancel'
        }
    },

    initialize: function( options ) {

        this.setupElements();
                
    },

    setupElements: function() {

        return;
        console.log( $$( '.itemHoverFx' ) );

        $$( '.itemHoverFx' ).each( function( a, i ){

            a.set( 'morph', this.options.fxOptions );
            a.set( 'styles', { 'opacity': 0.1 } );

            a.addEvents({

                'mouseenter': function( e ){
                    e = new Event(e);
                    e.stop();

                    e.target.morph( { 'opacity': 1 } );

                }.bind( this ),

                'mouseleave': function( e ){
                    e = new Event(e);
                    e.stop();

                    e.target.morph( { 'opacity': .1 } );

                }.bind( this ),

            });

            

        }.bind( this ) );

    },

});

var IPs = new Class({

	Implements: Options,
	
	options: {
		fxOptions: {
			'duration': 200,
			'link': 'cancel'
		}
	},
	
	triggers: new Array(),
	containers: new Array(),
	fx: new Array(),
	
	initialize: function( options ) {
		
		if( ! $( 'IpCont' ) )
		{
			return;
		}

		this.setupElements();
				
	},

	setupElements: function() {

		this.containers = $$( '#IpCont > li');
		this.triggers = $$( '#IpList > li > a');

		this.triggers.each( function( t, i ){

			t.set('href', t.get('href')+'-jsE');

		});

		this.containers.each( function( c, i ){

			var fx = new Fx.Slide( c );
			fx.hide();
			this.fx.include( fx );

		}.bind( this ) );

		this.triggers.addEvents({
			
			'click': this.handleClick.bind( this )

		});

		this.triggers[0].addClass('selected');
		this.fx[0].show();

	},

	handleClick: function( e ){

		target = e.target;

		index = this.triggers.indexOf( target );

		this.triggers[index].addClass('selected');
		this.fx[index].show();

		this.fx.each(function( fx, i ){

			if( i == index ) return;

			fx.hide();

		});

		this.triggers.each(function( t, i ){

			if( i == index ) return;

			if( t.hasClass('selected') ){
				t.removeClass('selected');
			}

		});

	},

});

var Readings = new Class({

	Implements: Options,
	
	options: {
		fxOptions: {
			'duration': 200,
			'link': 'cancel'
		}
	},
	
	triggers: new Array(),
	containers: new Array(),
	fx: new Array(),
	
	initialize: function( options ) {
		
		if( ! $( 'ReadingCont' ) )
		{
			return;
		}

		this.setupElements();
				
	},

	setupElements: function() {

		this.containers = $$( '#ReadingCont > li');
		this.triggers = $$( '#ReadingList > li > a');

		this.triggers.each( function( t, i ){

			t.set('href', t.get('href')+'-jsE');

		});

		this.containers.each( function( c, i ){

			var fx = new Fx.Slide( c );
			fx.hide();
			this.fx.include( fx );

		}.bind( this ) );

		this.triggers.addEvents({
			
			'click': this.handleClick.bind( this )

		});

		this.triggers[0].addClass('selected');
		this.fx[0].show();

	},

	handleClick: function( e ){

		target = e.target;

		index = this.triggers.indexOf( target );

		this.triggers[index].addClass('selected');
		this.fx[index].show();

		this.fx.each(function( fx, i ){

			if( i == index ) return;

			fx.hide();

		});

		this.triggers.each(function( t, i ){

			if( i == index ) return;

			if( t.hasClass('selected') ){
				t.removeClass('selected');
			}

		});

	},

});
