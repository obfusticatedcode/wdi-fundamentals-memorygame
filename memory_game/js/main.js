//This is the modified code with a reset button, further down is the original code. 

//game initialisation section

function creatingGame(){

//creating the array of cards as global variables
cards = [{rank: "queen", 
			suit: "hearts", 
			cardImage: "images/queen-of-hearts.png"
			},

			{rank: "queen", 
			suit: "diamonds", 
			cardImage: "images/queen-of-diamonds.png"
			},

			{rank: "king", 
			suit: "hearts", 
			cardImage: "images/king-of-hearts.png"
			},

			{rank: "king", 
			suit: "diamonds", 
			cardImage: "images/king-of-diamonds.png"
			}

			]; 

//array of cards in play
cardsInPlay = []; 
//creating the game board
	for (var i = 0; i < cards.length; i++) {
		cards[i]
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i); 
		cardElement.addEventListener('click',flipCard); 
		document.getElementById('game-board').appendChild(cardElement); 
		
	}
	
}



//checkForMatch function
var checkForMatch = function(){

	if (cardsInPlay[0] === cardsInPlay[1]) {
		winResults(); 
		 //alert("You found a match!"); 
	} 
	else {
		loseResults(); 	
		//alert("Sorry try again!"); 
	}

}//end of checkForMatch function


//creating the results place holder
var results = function (){
	//making resultsText global
	resultsText = document.createElement('p'); 
	document.getElementById('results').appendChild(resultsText);
	resultsText.innerHTML = "Results displayed here...";  
}
//displaying the win results
var winResults = function(){
	resultsText.innerHTML = "You've found a match!"; 
	resultsText.style.color = '#F15B31;'; 
}
//displaying the lose results
var loseResults = function(){
	resultsText.innerHTML = "Sorry try again!"; 
}


//flip card function taking cardId parameter
var flipCard = function(){
var cardId = this.getAttribute('data-id');
//push the cards[cardId] into the cardsInPlay array
cardsInPlay.push(cards[cardId].rank);
//set the click img
this.setAttribute('src',cards[cardId].cardImage); 
//checking if 2 cards have been played
if (cardsInPlay.length === 2){
	checkForMatch();
}
//otherwise reset
else if (cardsInPlay.length > 2){
	reload(); 
}
//console to display card that was flipped over	
console.log("You flipped " + cards[cardId].rank); 
//check the card image and suit in console
console.log(cards[cardId].cardImage); 
console.log(cards[cardId].suit); 
//checking the cardsInPlay array
console.log(cardsInPlay);

}//end of flipCard function


//game over section
//reset function
var reset = function(){
	//creating the button
	var resetButton = document.createElement('button'); 
	resetButton.innerHTML = "Reset";
	resetButton.setAttribute('class', 'resetButton'); 
	//reload the page to reset the game
	resetButton.addEventListener('click', reload); 
	document.getElementById('reset').appendChild(resetButton);

}

//reload the cards function
var reload = function(){
	//using splice() to remove elements from the cardsInPlay array
	cardsInPlay.splice(0, cardsInPlay.length);
	//using splice() to remove elements from the cards array
	cards.splice(0, cards.length); 
	removeCards(); 
	resetResults();
	creatingGame(); 
	results(); 
}

//removing the cardElements
function removeCards(){
	var gameBoard = document.getElementById('game-board'); 
	while(gameBoard.hasChildNodes()){
		gameBoard.removeChild(gameBoard.firstChild); 
	}
}
//resetting the results
function resetResults(){
	var gameResults = document.getElementById('results'); 
	while(gameResults.hasChildNodes()){
		gameResults.removeChild(gameResults.firstChild); 
	}
}

//game initialisation
creatingGame(); 
//create the reset button
reset(); 
//results text
results(); 
 
/////////////////////////////////////////////////////////////
//This is the original code
//It's got the alert pop ups as required from the assignment
/////////////////////////////////////////////////////////////
/*

//creating the array of cards  

var cards = [{rank: "queen", 
			suit: "hearts", 
			cardImage: "images/queen-of-hearts.png"
			},

			{rank: "queen", 
			suit: "diamonds", 
			cardImage: "images/queen-of-diamonds.png"
			},

			{rank: "king", 
			suit: "hearts", 
			cardImage: "images/king-of-hearts.png"
			},

			{rank: "king", 
			suit: "diamonds", 
			cardImage: "images/king-of-diamonds.png"
			}

			]; 

var cardsInPlay = []; 

//checkForMatch function
var checkForMatch = function(){

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!"); 
	} 
	else {
		alert("Sorry, try again"); 
	}

}//end of checkForMatch function


//flip card function taking cardId parameter
var flipCard = function(){
var cardId = this.getAttribute('data-id');
//push the cards[cardId] into the cardsInPlay array
cardsInPlay.push(cards[cardId].rank);
//set the click img
this.setAttribute('src',cards[cardId].cardImage); 
//checking if 2 cards have been played
if (cardsInPlay.length === 2){
	checkForMatch();
}
//console to display card that was flipped over	
console.log("You flipped " + cards[cardId].rank); 
//check the card image and suit in console
console.log(cards[cardId].cardImage); 
console.log(cards[cardId].suit); 

}//end of flipCard function

//function that will create the game board
var createBoard = function(){

	for (var i = 0; i < cards.length; i++) {
		cards[i]
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i); 
		cardElement.addEventListener('click',flipCard); 
		document.getElementById('game-board').appendChild(cardElement); 
	}

}//end of createBoard function

createBoard(); 

*/


