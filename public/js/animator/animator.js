/*************************************/
/*ANIMATOR CLASS*/
/*************************************/	

var Animator = (function() {

	function Animator(){
		this.animationCounter = 0;
		this.restartCounter = 0;
		this.stopTimer = null;
	}

	/*******************/
	/*Move element******/
	
	Animator.prototype.moveUp = function(element, distance1){
		var distance2 = "-=" + distance1;
		element.animate({top:distance2},200);
	}

	Animator.prototype.moveDown = function(element, distance1){
		var distance2 = "+=" + distance1;
		element.animate({top:distance2},200);
	}

	Animator.prototype.moveLeft = function(element,distance1){
		var distance2 = "-=" + distance1;
		element.animate({left:distance2},200);
	}

	Animator.prototype.moveRight = function(element, distance1){
		var distance2 = "+=" + distance1;
		element.animate({left:distance2},200);
	}

	Animator.prototype.customMoveRight = function(element,crudeDistance){
		var ImplantString = crudeDistance.toString();
		var distance = "+=" + crudeDistance;
		element.animate({left: distance},200);
	}

	Animator.prototype.customMoveLeft = function(element,crudeDistance){
		var ImplantString = crudeDistance.toString();
		var distance = "-=" + crudeDistance;
		element.animate({left: distance},200);
	}

	Animator.prototype.customMove = function(element,crudeDistance){
		var ImplantString = crudeDistance.toString();
		var assembeled = crudeDistance<0 ? "-="+ImplantString.substring(1) : "+="+ImplantString
		element.animate({left: assembeled},200);
	}


	/************************/
	/*Highlight element******/

	Animator.prototype.highlightFirstCompared = function(element){
		element.css('border','1px solid #e40000');
	}

	Animator.prototype.highlightSecondCompared = function(element){
		element.css('border','1px solid grey')
	}

	Animator.prototype.highlightNumber = function(element){
		element.css('color','#e40000');
	}
	

	/*******************************/
	/*Remove element highlight******/

	Animator.prototype.removeNumberHighlight = function(arr, arrClass){
		for(var i=0; i<arr.length; i++){
			$(arrClass).find('div.value').eq(i).css('color','black');
		}
	}

	Animator.prototype.removeComparedHighlight = function(element){
		element.css('border','1px solid silver');
	}

	
	/****************************/
	/*Conduct the animation******/

    Animator.prototype.executeAnimation = function(pipe){
		if( this.animationCounter >= pipe.AnimationMoves.length) return;
    	pipe.AnimationMoves[this.animationCounter]();
		this.animationCounter++;
		this.stopTimer = setTimeout(this.executeAnimation.bind(this, pipe), 150);
	}

	Animator.prototype.executeRestart = function(pipe){
		if( this.restartCounter >= pipe.RestartMoves.length) return;
    	pipe.RestartMoves[this.restartCounter]();
		this.restartCounter++;
		this.stopTimer = setTimeout(this.executeRestart.bind(this, pipe), 150);
	}


	Animator.prototype.startAnimation = function() {
    	if( this.stopTimer !== null ) return;
    	this.executeAnimation(); 
    }

    Animator.prototype.pauseAnimation = function(){
    	clearTimeout(this.stopTimer);
    	this.stopTimer = null;
    }

    /*********************/
	/*Button display******/

	Animator.prototype.restartInsertion = function(){
		$('.insertion .play').css('display','none');
		$('.insertion .pause').css('display','none');
		$('.insertion .replay').css('display','inline-block');
	}

	Animator.prototype.restartSelection = function(){
		$('.selection .play').css('display','none');
		$('.selection .pause').css('display','none');
		$('.selection .replay').css('display','inline-block');
	}

	Animator.prototype.restartBubble = function(){
		$('.bubble .play').css('display','none');
		$('.bubble .pause').css('display','none');
		$('.bubble .replay').css('display','inline-block');
	}

	Animator.prototype.showPlayInsertion = function(){
		$('.insertion .replay').css('display','none');
		$('.insertion .play').css('display','inline-block');
		$('.insertion .pause').css('display','none');
	}

	Animator.prototype.showPlaySelection = function(){
		$('.selection .replay').css('display','none');
		$('.selection .play').css('display','inline-block');
		$('.selection .pause').css('display','none');
	}

	Animator.prototype.showPlayBubble = function(){
		$('.bubble .replay').css('display','none');
		$('.bubble .play').css('display','inline-block');
		$('.bubble .pause').css('display','none');
	}

	return Animator;

})();