angular
	.module("TTTApp")
	.controller("TTTController", TTTControllerFunc);


TTTControllerFunc.$inject = ["$firebase"];

function TTTControllerFunc($firebase){

//declare variables here

 	var self = this;

	self.boxes =  new Array ("","","","","","","","","");
 	self.playerMove = playerMove;
 	self.playerNumber = 1;  // alternates between player 1 and 2
 	self.checkWinner = checkWinner;
	self.winner = "";
 	moves = 0;   // 9 total moves
 	xScore = 0;
 	oScore = 0;  
 	self.reset = reset;
 	gameOver = false;

// take turns Player 1 and Player 2

	function playerMove ($index){

		
			if (self.boxes[$index] == "") {
				if(self.playerNumber == 1) {
						self.boxes[$index] = "X";
						self.playerNumber = 2;
						// moves++;
					    // checkWinner();
				} else {
					self.boxes[$index] = "O";
					self.playerNumber = 1;
				}
					moves++; 
					
				} else {
					if (self.boxes[$index] == "X" || self.boxes[$index] == "O"){
						alert("Move is not allowed. Square already taken.");
					}
					
					}
					if (moves >=5){
						checkWinner();
				}

			

		getFirebase();

		}
	
// load and save Firebase gameboard

	var ref = new Firebase("https://tictactoo.firebaseio.com/gameboard");
	
	function getFirebase(){
		self.game = $firebase(ref).$asObject();
		self.game.array = self.boxes;
		self.game.$save();
	}

// winning combinations

	function checkWinner(){
		// TEST
		// console.log("Inside checkWinner");
		// console.log(self.boxes);

	 	if(self.boxes[0] == "X" && self.boxes[1] == "X" && self.boxes[2] == "X" ||
	 	   self.boxes[3] == "X" && self.boxes[4] == "X" && self.boxes[5] == "X" ||
	 	   self.boxes[6] == "X" && self.boxes[7] == "X" && self.boxes[8] == "X" ||
	 	   self.boxes[0] == "X" && self.boxes[3] == "X" && self.boxes[6] == "X" ||
	 	   self.boxes[1] == "X" && self.boxes[4] == "X" && self.boxes[7] == "X" ||
	 	   self.boxes[2] == "X" && self.boxes[5] == "X" && self.boxes[8] == "X" ||
	 	   self.boxes[0] == "X" && self.boxes[4] == "X" && self.boxes[8] == "X" ||
	 	   self.boxes[2] == "X" && self.boxes[4] == "X" && self.boxes[6] == "X")
	 	{
	 		xScore++;
	 		self.winner = ("X is the winner! X score is " + xScore);
	 		gameOver == true;
	 	
	 	}  else if 
	 	  (self.boxes[0] == "O" && self.boxes[1] == "O" && self.boxes[2] == "O" ||
	 	   self.boxes[3] == "O" && self.boxes[4] == "O" && self.boxes[5] == "O" ||
	 	   self.boxes[6] == "O" && self.boxes[7] == "O" && self.boxes[8] == "O" ||
	 	   self.boxes[0] == "O" && self.boxes[3] == "O" && self.boxes[6] == "O" ||
	 	   self.boxes[1] == "O" && self.boxes[4] == "O" && self.boxes[7] == "O" ||
	 	   self.boxes[2] == "O" && self.boxes[5] == "O" && self.boxes[8] == "O" ||
	 	   self.boxes[0] == "O" && self.boxes[4] == "O" && self.boxes[8] == "O" ||
	 	   self.boxes[2] == "O" && self.boxes[4] == "O" && self.boxes[6] == "O")
	 	{
	 		oScore++;
	 		self.winner = ("O is the winner! O score is " + oScore);
	 		gameOver == true;
	 		
	 	} else if (moves == 9 && gameOver == false){
	 		console.log(moves);
	 			self.winner = ("There is a TIE! Play Again.");
	
	 	}
	 		
 	}
 
// reset game

 	function reset(){
 		self.boxes = ["","","","","","","","",""];
 		moves = 0;
 		self.winner = "";
 		gameOver = false;
	}

}



 	

 
