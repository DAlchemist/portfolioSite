$(function () {
		
	var previousPos = 0;
	
	$('.projects .insertion').css('font-weight','700');
	$('.explanation .insertion').fadeIn("slow");

	$('.projects li').click(function(){
		
		$('.projects li').css('font-weight','500');
		$(this).css('font-weight','700');
		
		var name = '.' + $(this).attr('class');
		var currentPos = $(this).index();
		var distance = ((currentPos - previousPos)*482);
		var ImplantString = distance.toString();
		var assembeled;
		
		if (distance<0) {
			assembeled = "+="+ImplantString.substring(1);
		}else{
			assembeled = "-="+ImplantString;
		}
		
		$(".animation-holder").animate({left: assembeled},500);
		
		$('.explanation .text').css('display','none');
		$('.explanation').find(name).fadeIn('slow');

		previousPos = $(this).index();

	})

	scroller();
});