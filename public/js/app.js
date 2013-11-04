
var testArr1 = [5,1,2,3,6,7,10,8,9,4];
var testArr2 = [5,1,2,3,6,7,10,8,9,4];
var finalArr1 = [1,2,3,4,5,6,7,8,9,10];

var testArr3 = [5,1,2,3,6,7,10,8,9,4];
var testArr4 = [5,1,2,3,6,7,10,8,9,4];
var finalArr2 = [1,2,3,4,5,6,7,8,9,10];

var testArr5 = [5,1,2,3,6,7,10,8,9,4];
var testArr6 = [5,1,2,3,6,7,10,8,9,4];
var finalArr3 = [1,2,3,4,5,6,7,8,9,10];
/******************************************/

var testArr7 = [5,2,4,6,1,3];
var testArr8 = [5,2,4,6,1,3];
var finalArr4 = [1,2,3,4,5,6];

var testArr9 = [5,2,4,6,1,3];
var testArr10 = [5,2,4,6,1,3];
var finalArr5 = [1,2,3,4,5,6];

var testArr11 = [5,2,4,6,1,3];
var testArr12 = [5,2,4,6,1,3];
var finalArr6 = [1,2,3,4,5,6];

var SmallArrKey = [5,2,4,6,1,3]; 
var BigArrKey = [5,1,2,3,6,7,10,8,9,4];



var BigInsertionAnimator = new Animator();
var BigSelectionAnimator = new Animator();
var BigBubbleAnimator = new Animator();

var SmallInsertionAnimator = new Animator();
var SmallSelectionAnimator = new Animator();
var SmallBubbleAnimator = new Animator();



var insertionGenerator = new insertionGenerator();
var selectionGenerator = new selectionGenerator();
var bubbleGenerator = new bubbleGenerator();



var BigInsertionPipe = new Pipeline();
var BigSelectionPipe = new Pipeline();
var BigBubblePipe = new Pipeline();

var SmallInsertionPipe = new Pipeline();
var SmallSelectionPipe = new Pipeline();
var SmallBubblePipe = new Pipeline();



/*Big screen arrays*/

insertionGenerator.insertionSort(testArr1, BigArrKey, 38, BigInsertionAnimator, BigInsertionPipe);
insertionGenerator.restartInsertion(testArr2, finalArr1, 38, BigInsertionAnimator, BigInsertionPipe);

selectionGenerator.selectionSort(testArr3, BigArrKey, 38, BigSelectionAnimator, BigSelectionPipe);
selectionGenerator.restartSelection(testArr4, finalArr2, 38, BigSelectionAnimator, BigSelectionPipe);

bubbleGenerator.bubbleSort(testArr5, BigArrKey, 38, BigBubbleAnimator, BigBubblePipe);
bubbleGenerator.restartBubble(testArr6, finalArr3, 38, BigBubbleAnimator, BigBubblePipe);

/*Small screen arrays*/

insertionGenerator.insertionSort(testArr7, SmallArrKey, 33, SmallInsertionAnimator, SmallInsertionPipe);
insertionGenerator.restartInsertion(testArr8, finalArr4, 33, SmallInsertionAnimator, SmallInsertionPipe);

selectionGenerator.selectionSort(testArr9, SmallArrKey, 33, SmallSelectionAnimator, SmallSelectionPipe);
selectionGenerator.restartSelection(testArr10, finalArr5, 33, SmallSelectionAnimator, SmallSelectionPipe);

bubbleGenerator.bubbleSort(testArr11, SmallArrKey, 33, SmallBubbleAnimator, SmallBubblePipe);
bubbleGenerator.restartBubble(testArr12, finalArr6, 33, SmallBubbleAnimator, SmallBubblePipe);


/*************************/
/*Big Insertion manager*/


$('.big.insertion .play').click(function(){
	
	BigInsertionAnimator.restartCounter = 0;
	BigInsertionAnimator.executeAnimation(BigInsertionPipe);
	
	$('.big.insertion .play').css('display','none');
	$('.big.insertion .pause').css('display','inline-block');
})

$('.big.insertion .pause').click(function(){

	BigInsertionAnimator.pauseAnimation();
	
	$('.big.insertion .play').css('display','inline-block');
	$('.big.insertion .pause').css('display','none');
})

$('.big.insertion .replay').click(function(){
	
	BigInsertionAnimator.animationCounter = 0;
	BigInsertionAnimator.executeRestart(BigInsertionPipe);

});


/*************************/
/*Small Insertion manager*/

$('.small.insertion .play').click(function(){
	
	SmallInsertionAnimator.restartCounter = 0;
	SmallInsertionAnimator.executeAnimation(SmallInsertionPipe);
	
	$('.small.insertion .play').css('display','none');
	$('.small.insertion .pause').css('display','inline-block');
})

$('.small.insertion .pause').click(function(){

	SmallInsertionAnimator.pauseAnimation();
	
	$('.small.insertion .play').css('display','inline-block');
	$('.small.insertion .pause').css('display','none');
})

$('.small.insertion .replay').click(function(){
	
	SmallInsertionAnimator.animationCounter = 0;
	SmallInsertionAnimator.executeRestart(SmallInsertionPipe);
});




/*************************/
/*Big Selection manager*/

$('.big.selection .play').click(function(){
	
	BigSelectionAnimator.restartCounter = 0;
	BigSelectionAnimator.executeAnimation(BigSelectionPipe);
	
	$('.big.selection .play').css('display','none');
	$('.big.selection .pause').css('display','inline-block');
})

$('.big.selection .pause').click(function(){
	
	BigSelectionAnimator.pauseAnimation();
	
	$('.big.selection .play').css('display','inline-block');
	$('.big.selection .pause').css('display','none');
})

$('.big.selection .replay').click(function(){

	BigSelectionAnimator.animationCounter = 0;
	BigSelectionAnimator.executeRestart(BigSelectionPipe);

})

/*************************/
/*Small Selection manager*/

$('.small.selection .play').click(function(){
	
	SmallSelectionAnimator.restartCounter = 0;
	SmallSelectionAnimator.executeAnimation(SmallSelectionPipe);
	
	$('.selection .play').css('display','none');
	$('.selection .pause').css('display','inline-block');
})

$('.small.selection .pause').click(function(){
	
	SmallSelectionAnimator.pauseAnimation();
	
	$('.small.selection .play').css('display','inline-block');
	$('.small.selection .pause').css('display','none');
})

$('.small.selection .replay').click(function(){

	SmallSelectionAnimator.animationCounter = 0;
	SmallSelectionAnimator.executeRestart(SmallSelectionPipe);

})



/*************************/
/*Big Bubble manager*/

$('.big.bubble .play').click(function(){
	
	BigBubbleAnimator.restartCounter = 0;
	BigBubbleAnimator.executeAnimation(BigBubblePipe);
	
	$('.big.bubble .play').css('display','none');
	$('.bubble .pause').css('display','inline-block');
})

$('.big.bubble .pause').click(function(){
	
	BigBubbleAnimator.pauseAnimation();
	
	$('.big.bubble .play').css('display','inline-block');
	$('.big.bubble .pause').css('display','none');
})

$('.big.bubble .replay').click(function(){
	
	BigBubbleAnimator.animationCounter = 0;
	BigBubbleAnimator.executeRestart(BigBubblePipe);

})

/*************************/
/*Small Bubble manager*/

$('.small.bubble .play').click(function(){
	
	SmallBubbleAnimator.restartCounter = 0;
	SmallBubbleAnimator.executeAnimation(SmallBubblePipe);
	
	$('.small.bubble .play').css('display','none');
	$('.bubble .pause').css('display','inline-block');
})

$('.small.bubble .pause').click(function(){
	
	SmallBubbleAnimator.pauseAnimation();
	
	$('.small.bubble .play').css('display','inline-block');
	$('.small.bubble .pause').css('display','none');

})

$('.small.bubble .replay').click(function(){
	
	SmallBubbleAnimator.animationCounter = 0;
	SmallBubbleAnimator.executeRestart(SmallBubblePipe);

})




