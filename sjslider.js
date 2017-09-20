/* SJSlider by https://github.com/pislaru/ */

var canSwitch = 		1;

var current_Class = 	"activ";

var current_Selector = 	"." + current_Class;

var left_Selector = 	".arrow_left";
var right_Selector = 	".arrow_right";
var slide_Selector = 	".slide";

var fadeIn_Time = 		500;
var fadeOut_Time =		500;

var Automated = 1;

$( slide_Selector ).css( "display", "none" );

var _first_Slide = $( slide_Selector + ":first" );

var timer_Changer;
var timer_Interval = 5000 + ( fadeIn_Time + fadeOut_Time + 100 );
			
if( !_first_Slide.length )
	console.log( "JS Slider: No slides found !" );
else
	_first_Slide.addClass( current_Class );

$( current_Selector ).fadeIn( );

reset_Timer( );

$( left_Selector ).click
( 
	function( ) 
	{
  		if( canSwitch ) 
  			prevSlide( );
	}
);

$( right_Selector ).click
( 
	function( ) 
	{
  		if( canSwitch ) 
  			nextSlide( );
	}
);

function prevSlide( )
{
	var _current_Slide = $( current_Selector );
	
	canSwitch = 0;
	
	var _next_Slide = $( current_Selector ).prev( slide_Selector );
	
	if( !_next_Slide.length )
		_next_Slide = $( slide_Selector ).last( );

	_current_Slide.removeClass( current_Class );
	
	_current_Slide.fadeOut( fadeOut_Time );

	_next_Slide.addClass( current_Class );

	_next_Slide.delay( ( fadeOut_Time + 100 ) ).fadeIn( fadeIn_Time );

	reset_Timer( );
	
	setTimeout( canSwitch_reset, ( fadeIn_Time + fadeOut_Time + 100 ) );
}

function nextSlide( )
{ 
	var _current_Slide = $( current_Selector );
	
	canSwitch = 0;
	
	var _next_Slide = $( current_Selector ).next( slide_Selector );
	
	if( !_next_Slide.length )
		_next_Slide = $( slide_Selector ).first( );
	
	_current_Slide.removeClass( current_Class );

	_current_Slide.fadeOut( fadeOut_Time );

	_next_Slide.addClass( current_Class );

	_next_Slide.delay( ( fadeOut_Time + 100 ) ).fadeIn( fadeIn_Time );

	reset_Timer( );

	setTimeout( canSwitch_reset, ( fadeIn_Time + fadeOut_Time + 100 ) );
}

function canSwitch_reset( )
{
	canSwitch = 1;
}

function reset_Timer( )
{
	if( Automated )
	{
		clearTimeout( timer_Changer );
		timer_Changer = setTimeout( slide_Changer, timer_Interval );
	}
}

function slide_Changer( )
{
	if( canSwitch ) 
  			nextSlide( );

  	reset_Timer( );
}