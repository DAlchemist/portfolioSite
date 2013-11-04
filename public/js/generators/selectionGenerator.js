/*************************************/
/*SELECTION GENERATOR CLASS*/
/*************************************/	

var selectionGenerator = (function() {

	function selectionGenerator(){

	}

	selectionGenerator.prototype.selectionSort = function(arr, arrKey, distance, animator, pipe) {
		
	
		for (var i = 0; i < arr.length; i++) {
			
			for (var j=i+1; j < arr.length; j++) {
				
				var firstValue = $(".selection div.value").eq(_.indexOf(arrKey, arr[i]));
				var secondValue = $(".selection div.value").eq(_.indexOf(arrKey, arr[j]));

				pipe.addAnimationMove(animator.highlightFirstCompared.bind(window, firstValue));
				pipe.addAnimationMove(animator.highlightSecondCompared.bind(window, secondValue));
			
				if (arr[j]<arr[i]) {
					
					var key = arr[i];
					arr[i]=arr[j];
					arr[j]=key;
					
					var crudeDistance = (j-i)*distance;
					
					pipe.addAnimationMove(animator.moveDown.bind(window, secondValue, distance));
	    			pipe.addAnimationMove(animator.customMoveLeft.bind(window, secondValue, crudeDistance));
	    			pipe.addAnimationMove(animator.moveUp.bind(window, secondValue, distance));
	    			
	    			pipe.addAnimationMove(animator.moveUp.bind(window, firstValue, distance));
	    			pipe.addAnimationMove(animator.customMoveRight.bind(window, firstValue, crudeDistance));
	    			pipe.addAnimationMove(animator.moveDown.bind(window, firstValue, distance));

	    			pipe.addAnimationMove(animator.removeComparedHighlight.bind(window,secondValue));
	    			pipe.addAnimationMove(animator.removeComparedHighlight.bind(window,firstValue));
	    			

	    		} else {
	    			pipe.addAnimationMove(animator.removeComparedHighlight.bind(window, secondValue));
	    		}

			}
			pipe.addAnimationMove(animator.removeComparedHighlight.bind(window,firstValue));
			pipe.addAnimationMove(animator.highlightNumber.bind(window,$(".selection").find('div.value').eq(_.indexOf(arrKey, arr[i]))));
		}
		pipe.addAnimationMove(animator.restartSelection);
	}
	
	selectionGenerator.prototype.restartSelection = function(initialArr, finalArr, distance, animator, pipe){

    	for (var i = 0; i < finalArr.length; i++) {
			
			var key = finalArr[i];
			var index = _.indexOf(initialArr,key);
			var crudeDistance = (index-i)*distance;
			var element = $('.selection div.value').eq(_.indexOf(initialArr,key));
			
			pipe.addRestartMove(animator.customMove.bind(window, element, crudeDistance));
		}

		pipe.addRestartMove(animator.removeNumberHighlight.bind(window,finalArr, '.selection'));
		
		pipe.addRestartMove(animator.showPlaySelection);
	}

	return selectionGenerator;

})();