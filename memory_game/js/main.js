
//creating the array of cards  

var cards = ["queen", "queen", "king", "king"]; 
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
var flipCard = function(cardId){


//push the cards[cardId] into the cardsInPlay array
cardsInPlay.push(cards[cardId]);

if (cardsInPlay.length === 2){
	checkForMatch();
}
//console to display card that was flipped over	
console.log("You flipped " + cards[cardId]); 

}//end of flipCard function

//calling the flipCard function twice
flipCard(0); 
flipCard(2); 
