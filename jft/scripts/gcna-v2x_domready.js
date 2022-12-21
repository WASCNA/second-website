/**
 *
 * File calls pre-defined classes to be run on domready
 *
 */

window.addEvent( 'domready', function () {

	new MainNavFixed( {} );

	new SubNav( {} );
	new PopupAs( {} );
	new Minutes( {} );
	new MeetingsU( {} );
	new IPs( {} );
	new Readings( {} );
	new ReadMoreLinks( {} );
	new ItemHoverFx( {} );
	new ToolTipAbbr( {} );
	new FAQ( {} );

	new Fx.SmoothScroll({
		duration: 400
	},window);

	new SetIFrameSize( {} );
	
	//if( $('MeetingList') ) new MeetingListItems();

});
