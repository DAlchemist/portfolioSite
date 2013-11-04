/*************************************/
/*INSERTION GENERATOR CLASS*/
/*************************************/	

var insertionGenerator = (function() {

	function insertionGenerator(){
		
	}

	insertionGenerator.prototype.insertionSort = function(arr, arrKey, distance, animator, pipe) {

		for (var i = 1; i < arr.length; i++) {

    		var key = arr[i];
			var k = i-1;
			var counter = 0;
			var secondValue = $(".insertion div.value").eq(_.indexOf(arrKey,arr[i]));
			
			pipe.addAnimationMove(animator.highlightSecondCompared.bind(window, secondValue));

			while(k>=0 && arr[k]>key){
    			
    			var firstValue = $(".insertion div.value").eq(_.indexOf(arrKey,arr[k]));
    			pipe.addAnimationMove(animator.highlightNumber.bind(window, firstValue));
    			
    			counter++;

    			if(counter===1){
					
					pipe.addAnimationMove(animator.highlightFirstCompared.bind(window, firstValue));
    				pipe.addAnimationMove(animator.moveUp.bind(window, firstValue, distance));
    				pipe.addAnimationMove(animator.moveDown.bind(window, secondValue, distance));
    				pipe.addAnimationMove(animator.moveRight.bind(window, firstValue, distance));
   					pipe.addAnimationMove(animator.moveDown.bind(window, firstValue, distance));
    				pipe.addAnimationMove(animator.moveLeft.bind(window, secondValue, distance));
    				pipe.addAnimationMove(animator.removeComparedHighlight.bind(window, firstValue));
    			
    			}
    			if(counter>1){
    				
 					pipe.addAnimationMove(animator.highlightFirstCompared.bind(window, firstValue));
    				pipe.addAnimationMove(animator.moveRight.bind(window, firstValue, distance));
					pipe.addAnimationMove(animator.moveLeft.bind(window, secondValue, distance));
    				pipe.addAnimationMove(animator.removeComparedHighlight.bind(window, firstValue));
    				
    			}

    			arr[k+1]=arr[k];
    			k--;

	    	}//end while

	    	arr[k+1]=key;
			
			if(counter!==0){
	    		pipe.addAnimationMove(animator.moveUp.bind(window, secondValue, distance));
    		}

    		pipe.addAnimationMove(animator.removeComparedHighlight.bind(window, firstValue));
    		pipe.addAnimationMove(animator.removeComparedHighlight.bind(window, secondValue));
    		pipe.addAnimationMove(animator.highlightNumber.bind(window, secondValue));
    	
    	}//end for
    	pipe.addAnimationMove(animator.restartInsertion);
    }

	insertionGenerator.prototype.restartInsertion = function(initialArr,finalArr, distance, animator, pipe){

    	for (var i = 0; i < finalArr.length; i++) {
			
			var key = finalArr[i];
			var index = _.indexOf(initialArr,key);
			var crudeDistance = (index-i)*distance;
			var element = $('.insertion div.value').eq(_.indexOf(initialArr,key));
			
			pipe.addRestartMove(animator.customMove.bind(window, element, crudeDistance));
		}

		pipe.addRestartMove(animator.removeNumberHighlight.bind(window,finalArr, '.insertion'));

		pipe.addRestartMove(animator.showPlayInsertion);
	}

    return insertionGenerator;

})();

