var numSquares = 6;
var colours = [];
var pickedColour;
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var msgDisplay = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init()

function init(){
	//mode buttons event listener
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function() {
	  	modeButtons[0].classList.remove("selected");
	  	modeButtons[1].classList.remove("selected");
	  	this.classList.add("selected");
	  	this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
	  	reset(); 
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
			//add click listeners to squares
			squares[i].addEventListener("click", function(){
			//grab colour of picked square
			var clickedColour = this.style.backgroundColor;
			//compare colour of pickedColour
			if(clickedColour === pickedColour){
				msgDisplay.textContent = "Correct!";
				resetButton.textContent = "Play again?";
				changeColours(clickedColour);
				h1.style.backgroundColor = clickedColour;
			}else{
				this.style.backgroundColor = "#232323";
				msgDisplay.textContent = "Try again";
			}
		});
	}
}

function reset(){
	colours = generateRandomColours(numSquares);
	//pick a new random colour from array
	pickedColour = pickColour();
	//change colourDisplay to match picked colour
	colourDisplay.textContent = pickedColour;
	this.textContent = "New Colours";
	msgDisplay.textContent = "";
	//change colours of squares on page
	for(var i = 0; i < squares.length; i++){
		if(colours[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colours[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function(){
	reset();
	resetButton.textContent = "New colours";
});


function changeColours(colour){
	//loop through all squares 
	for(var i = 0; i < squares.length; i++){
		//change each colour to match picked colour 
		squares[i].style.backgroundColor = colour; 
	}	
}

function pickColour(){
	var random =Math.floor(Math.random() * colours.length);
	return colours[random];
}

function generateRandomColours(num){
	//make an array 
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random colour and push into arr
		arr.push(randomColour())
	}
	//return that array 
	return arr;
}

function randomColour(){
	//pick a red from 0-255 
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}