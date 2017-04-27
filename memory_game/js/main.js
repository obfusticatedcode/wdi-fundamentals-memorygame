
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



