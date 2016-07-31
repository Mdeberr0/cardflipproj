//
let current=1;
let visibleCard=null;
//
//
//
// create a function to flip over next card in lineup
//
// outcome is equal to higher lower none
//
function flip(outcome){
	//
	// get a new image of a random card
	// replace the current image with new image
	//
	let request = new XMLHttpRequest();
	request.open('GET',	'http://deckofcardsapi.com/api/deck/new/draw/?count=1');
	request.addEventListener('load',function(){
		console.log('got a new card');
		let result = JSON.parse(request.responseText);
		let oldVisible = visibleCard;
		let newCard =result.cards[0];
		console.log(newCard);	
		let card = document.getElementById('card-'+current);
		card.src=newCard.image;	
		if (newCard.value==='JACK'){
				visibleCard=11;
			}else if(newCard.value ==='QUEEN'){
				visibleCard=12;
			}else if(newCard.value ==='KING'){
				visibleCard=13;
			}else if(newCard.value ==='ACE'){
				visibleCard=14;
			}else{
				visibleCard = parseInt(newCard.value);
			}
			console.log(visibleCard);
			current=current+1;
			//
			console.log(outcome)
			console.log(visibleCard);
			console.log(oldVisible);
			if(outcome==='none'){
				return;
			}else if (outcome ==='higher' && visibleCard > oldVisible){
				console.log('your right');
			}else if (outcome ==='higher' && visibleCard< oldVisible){
				console.log('sorry you lose');
			}else if (outcome ==='lower' && visibleCard < oldVisible){
				console.log('your right');
			}else if (outcome ==='lower' && visibleCard > oldVisible){
				console.log('sorry you lose');
			}
	});
	request.send();
	//
	//
	}
//
//
//
// Add an 'event listener' to the web page. 
 // You specify two things: 
 //      1. type of event you're interested in 
 //      2. what you want to do when it happens 
 
 window.addEventListener('load', function () { 
 		//console.log(flip)
 			flip('none')
     //console.log('the page has loaded');     
 
 
     // Create a function called 'addThings' 
     // that takes three inputs: a, b, and c. 
     // It returns the sum of a, b, and c. 
     
     function addThings(a, b, c) { 
         return a + b - c; 
     } 
 
 
     let outtie = addThings(1, 2, 7); 
     //console.log(outtie); 
 
 
     // Document Object Model (DOM) lets us mess around with 
     // web pages. 
     let higherButton = document.getElementById('bigUp'); 
     higherButton.addEventListener('click', function () { 
     	flip('higher');
     	
         console.log('you clicked higher'); 
     }); 
     let lowerButton = document.getElementById('littleDown'); 
   		lowerButton.addEventListener('click', function () { 
   			    	flip('lower');
         console.log('you clicked lower'); 
     }); 
 }); 
