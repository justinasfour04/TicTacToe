function drawX(centerX,centerY) {
	var c = document.getElementById("mainMenu");
	var ctx = c.getContext("2d");
	
	ctx.moveTo(centerX,centerY);
	ctx.lineTo(centerX + 50, centerY + 50);
	
	ctx.moveTo(centerX,centerY);
	ctx.lineTo(centerX + 50, centerY - 50);
	
	ctx.moveTo(centerX,centerY);
	ctx.lineTo(centerX - 50, centerY + 50);
	
	ctx.moveTo(centerX,centerY);
	ctx.lineTo(centerX - 50, centerY - 50);
	
	ctx.stroke();
}

function drawCircle(centerX, centerY) {
	var c = document.getElementById("mainMenu");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(centerX,centerY,50,0,2*Math.PI);
	ctx.stroke();
}

function drawWord(text, centerX, centerY) {
	var c = document.getElementById("mainMenu");
	var ctx = c.getContext("2d");
	ctx.font = "30px Arial";
	ctx.fillText(text,centerX,centerY);
}

function createDiv(numDiv) {
	var divArray = []
	var c = document.getElementById("mainMenu");
	for (i = 0; i <= numDiv; i++) {
		divArray[i] = document.createElement("div" + i);
		c.appendChild(divArray[i]);
	}
	return divArray;
}

function moveDiv() {
	var divArray = createDiv(9);
	for (i = 0; i <= 3; i++) {
		for (j = 0; j <= 3; j++) {
			divArray[i+j].left = i*20;
		}
	}
}

function drawMenu() {
	drawX(100, 300);
	drawCircle(300, 300);
	drawWord("TicTacToe", 150, 100);
	drawWord("Pick a token", 140, 150);
}

drawMenu();
moveDiv();

