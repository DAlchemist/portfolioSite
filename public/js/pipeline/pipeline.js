/*************************************/
/*PIPELINE CLASS*/
/*************************************/	

var Pipeline = (function() {

	function Pipeline(){
		this.AnimationMoves = [];
		this.RestartMoves = []
	}

	Pipeline.prototype.addAnimationMove = function(move){
		this.AnimationMoves.push(move);
	}

	Pipeline.prototype.getAnimationMove = function(){
		return this.AnimationMoves.shift();
	}
	
	Pipeline.prototype.addRestartMove = function(move){
		this.RestartMoves.push(move);
	}

	Pipeline.prototype.getRestartMove = function(){
		return this.RestartMoves.shift();
	}

	return Pipeline;

})();
			
