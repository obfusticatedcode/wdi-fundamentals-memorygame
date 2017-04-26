
//creating the array of cards  

var cards = ["queen", "queen", "king", "king"]; 
var cardsInPlay = []; 
var cardOne; 
var cardTwo; 

//using cardOne to hold the value of the first element in the cards array
cardOne = cards[0]; 
cardTwo = cards[2]; 
//adding cardOne to the array via a push
cardsInPlay.push(cardOne); 
cardsInPlay.push(cardTwo); 

if (cardsInPlay.length === 2){
	
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!"); 
	} else {
		alert("Sorry, try again"); 
	}
}
else {
	alert("Choose two cards");
}
console.log(cardTwo); 
console.log(cardOne); 
