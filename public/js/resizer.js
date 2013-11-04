var largeIDbubble, largeIDinsertion, largeIDselection;
var smallIDbubble, smallIDInsertion, smallIDselection;

if($(window).width()<560){
	largeIDbubble = $('.bubble .large-number-holder').detach();
	largeIDinsertion = $('.insertion .large-number-holder').detach();
	largeIDselection = $('.selection .large-number-holder').detach();
	$('.animation-holder').addClass('small');
}

if($(window).width()>560){
	smallIDbubble = $('.bubble .small-number-holder').detach();
	smallIDinsertion = $('.insertion .small-number-holder').detach();
	smallIDselection = $('.selection .small-number-holder').detach();
	$('.animation-holder').addClass('big');
}


$(window).resize(function() {
		
	if($(window).width()>560 && largeIDbubble  && largeIDselection  && largeIDinsertion){
		
		smallIDbubble = $('.bubble .small-number-holder').detach();
		smallIDinsertion = $('.insertion .small-number-holder').detach();
		smallIDselection = $('.selection .small-number-holder').detach();

		largeIDbubble.appendTo('.animation-holder.bubble');
		largeIDselection.appendTo('.animation-holder.selection');
		largeIDinsertion.appendTo('.animation-holder.insertion');

		largeIDbubble = null;
		largeIDselection = null;
		largeIDinsertion = null;
		
		$('.animation-holder').addClass('big');
		$('.animation-holder').removeClass('small');
	}

	if($(window).width()<560 && smallIDbubble  && smallIDselection  && smallIDinsertion){
		
		largeIDbubble = $('.bubble .large-number-holder').detach();
		largeIDinsertion = $('.insertion .large-number-holder').detach();
		largeIDselection = $('.selection .large-number-holder').detach();

		smallIDbubble.appendTo('.animation-holder.bubble');
		smallIDselection.appendTo('.animation-holder.selection');
		smallIDinsertion.appendTo('.animation-holder.insertion');

		smallIDbubble = null;
		smallIDselection = null;
		smallIDinsertion = null;
		
		$('.animation-holder').removeClass('big');
		$('.animation-holder').addClass('small');

	}

});
