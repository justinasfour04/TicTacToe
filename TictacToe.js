//Canvas elements
var theCanvas;
var c;
var cx;
var sqr = [1,2,3,4,5,6,7,8,9];

//game variables
var clicked;
var content;
var painted;
var winningCombo;
var squaresFilled = 0;
var turn = 0;
var playerX = false;
var playerCircle = false;

function drawX(centerX, centerY) {
	if (c.getContext) {
		for (var i = 0; i < 4; i++) {
			switch(i) {
				case 0:
					var moveX = centerX + 15;
					var moveY = centerY - 15;
					break;
				case 1:
					var moveX = centerX + 15;
					var moveY = centerY + 15;
					break;
				case 2:
					var moveX = centerX - 15;
					var moveY = centerY + 15;
					break;
				case 3:
					var moveX = centerX - 15;
					var moveY = centerY - 15;
					break;
			}
			
			cx.beginPath();
			cx.moveTo(centerX, centerY);
			cx.lineTo(moveX, moveY);
			cx.lineWidth = 3;
			cx.stroke();
		}
	} else {
		alert("Your browser is not compatible with this page");
	} 
}

function drawCircle(centerX, centerY) {
	if (c.getContext) {
		var radius = 15;
		cx.beginPath();
		cx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
		cx.lineWidth = 3;
		cx.stroke();
		
	} else {
		alert("Your browser is not compatible with this page");
	}
}

function drawText(text, size, posX, posY) {
	if (c.getContext) {
		cx.font = size + "px Times New Roman";
		cx.textAlign = "center";
		cx.fillText(text, posX, posY);
		
	} else {
		alert("Your browser is not compatible with this page");
	}
}

function clearCanvas() {
	if (c.getContext) {
		cx.clearRect(0, 0, 500, 500);
	} else {
		alert("Your browser is not compatible with this page");
	}
}

function createBoard() {
	
	for (var i = 0; i < sqr.length; i++) {
		sqr[i] = document.createElement("canvas");
		var script = document.getElementById("script");
		script.parentNode.insertBefore(sqr[i],script);
		
		sqr[i].id = "canvas" + (i+1);
		sqr[i].className = "gameBoard";
		sqr[i].height = 500/3;
		sqr[i].width = 500/3;
		sqr[i].setAttribute ("onclick", "clicked" + "(" + (i + 1) + ")");
	}
	
	
	var br1 = document.createElement("br");
	var br2 = document.createElement("br");
	var cn4 = document.getElementById("canvas4");
	var cn7 = document.getElementById("canvas7");
	
	cn4.parentNode.insertBefore(br1,cn4);
	cn7.parentNode.insertBefore(br2,cn7);
}

function init() {
	theCanvas = "canvas";
	c = document.getElementById(theCanvas);
	cx = c.getContext("2d");
	drawText("Tic-Tac-Toe", 60, 250, 100);
	drawText("Please choose", 40, 250, 200);
	drawX(200, 300);
	drawCircle(300, 300);
}


////////////////
// Title Menu //
////////////////

init();

/////////////////
// Clear Title //
/////////////////

function clearTitleX() {
	playerX = true;
	clearCanvas();
	document.getElementById("x").remove();
	document.getElementById("circle").remove();
	document.getElementById("canvas").remove();
	
	// Create GameBoard
	createBoard();	
}

function clearTitleCircle() {
	playerCircle = true;
	clearCanvas();
	document.getElementById("x").remove();
	document.getElementById("circle").remove();
	document.getElementById("canvas").remove();
	
	// Create GameBoard
	createBoard();
}

//////////
// Game //
//////////

//Array Method
window.onload = function() {
	painted = new Array();
	content = new Array();
	winningCombo = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
	
	for (var i = 0; i < 9; i++) {
		painted[i] = false;
		content[i] = "";
	}
}

//Game Methods
function clicked(canvasNumber) {
	theCanvas = "canvas" + canvasNumber;
	c = document.getElementById(theCanvas);
	cx = c.getContext("2d");

	if (playerX) {
		if (!painted[canvasNumber - 1]) {
			if (turn%2 == 0) {
				drawX(c.height/2,c.width/2);
				content[canvasNumber - 1] = "X";
			} else {
				drawCircle(c.height/2,c.width/2);
				content[canvasNumber - 1] = "O";
			}
			
			turn++;
			painted[canvasNumber - 1] = true;
			squaresFilled++;
			checkWinners(content[canvasNumber - 1]);
		
			if (squaresFilled == 9) {
				alert("No One Won");
				playAgain();
			}
		}
	}
	if (playerCircle) {
		if (!painted[canvasNumber - 1]) {
			if (turn%2 == 0) {
				drawCircle(c.height/2,c.width/2);
				content[canvasNumber - 1] = "O";
			} else {
				drawX(c.height/2,c.width/2);
				content[canvasNumber - 1] = "X";
			}
			
			turn++;
			painted[canvasNumber - 1] = true;
			squaresFilled++;
			checkWinners(content[canvasNumber - 1]);
		
			if (squaresFilled == 9) {
				alert("No One Won");
				playAgain();
			}
		}			
	}
}

function checkWinners (symbol) {
	for (var i = 0; i < winningCombo.length; i++) {
		if (content[winningCombo[i][0]] == symbol && content[winningCombo[i][1]] == symbol && content[winningCombo[i][2]] == symbol) {
			alert (symbol + " WON");
			playAgain();
		}
	}
}

function playAgain() {
	var x = confirm("PLAY AGAIN");
	if (x)
		location.reload();
	else
		alert("BYE");
}