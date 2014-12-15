angular
	.module('TTTApp')  
	.factory("GameBoard", GameBoardFunc);


GameBoardFunc.$inject = ["$firebase"];

function GameBoardFunc($firebase){

	self.boxes = ["","","","","","","","",""];

	var ref = new Firebase("https://tictactoo.firebaseio.com/gameboard");
	var fireGameBoard = $firebase(ref).$asObject();

	this.fireGameBoard = fireGameBoard;

	function createBoard(){
		fireGameBoard.boxes = ["","","","","","","","",""];
		fireGameBoard.$save();
		return fireGameBoard;
	}
	return createBoard;



}