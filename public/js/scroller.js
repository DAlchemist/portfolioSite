var scroller = function(){
				
	var scrollToElement = function(el, speed) {
		
		if (speed == null || speed == 'undefined') { speed = 500; }

		$('html, body').animate({
	        scrollTop: el.offset().top
	    }, speed );
	}
   
  
    var handle = function(e){

  		e.preventDefault()
    
		var el       = $(this);
		var selector = $(this).attr('data-scroll');
		var to       = $(selector);
	    
		scrollToElement(to);
    }
   
    
  $('a[data-scroll]').on('click', handle);

}