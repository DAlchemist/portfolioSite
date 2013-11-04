/*************************************/
/*BUBBLE GENERATOR CLASS*/
/*************************************/	

var bubbleGenerator = (function(){

	function bubbleGenerator(){

	}
	
	
	bubbleGenerator.prototype.bubbleSort = function(arr, arrKey, distance, animator, pipe){

		do{
			
			var counter = 0;
			
			for (var i = 1; i < arr.length; i++) {
				
				var k = i-1;
				var key = arr[i];

				var firstValue = $(".bubble").find('div.value').eq(_.indexOf(arrKey, arr[k]));
				var secondValue = $(".bubble").find('div.value').eq(_.indexOf(arrKey, arr[i]));
				
				pipe.addAnimationMove(animator.highlightFirstCompared.bind(window, firstValue));
				pipe.addAnimationMove(animator.highlightSecondCompared.bind(window, secondValue));

				if (arr[k]>arr[i]) {
					arr[i]=arr[k]
					arr[k]=key;
					pipe.addAnimationMove(animator.moveUp.bind(window, firstValue, distance));
					pipe.addAnimationMove(animator.moveDown.bind(window, secondValue, distance));
	    			
	    			pipe.addAnimationMove(animator.moveRight.bind(window, firstValue, distance));
	    			pipe.addAnimationMove(animator.moveDown.bind(window, firstValue, distance));
	    			
	    			pipe.addAnimationMove(animator.moveLeft.bind(window, secondValue, distance));
	    			pipe.addAnimationMove(animator.moveUp.bind(window, secondValue, distance));

	    			pipe.addAnimationMove(animator.removeComparedHighlight.bind(window, secondValue));
	    			pipe.addAnimationMove(animator.removeComparedHighlight.bind(window, firstValue));

	    			counter++;
					
				}
				pipe.addAnimationMove(animator.removeComparedHighlight.bind(window,secondValue));
	    		pipe.addAnimationMove(animator.removeComparedHighlight.bind(window,firstValue));
			}
		
		} while(counter!==0);

		pipe.addAnimationMove(animator.restartBubble);
	}

	bubbleGenerator.prototype.restartBubble = function(initialArr,finalArr,distance,animator, pipe){

    	for (var i = 0; i < finalArr.length; i++) {
			
			var key = finalArr[i];
			var index = _.indexOf(initialArr,key);
			var crudeDistance = (index-i)*distance;
			var element = $('.bubble div.value').eq(_.indexOf(initialArr,key));
			
			pipe.addRestartMove(animator.customMove.bind(window, element, crudeDistance));
		}

		pipe.addRestartMove(animator.removeNumberHighlight.bind(window,finalArr,'.bubble'));
		pipe.addRestartMove(animator.showPlayBubble);
	}

	return bubbleGenerator;

})()
