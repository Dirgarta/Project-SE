var gameboard = {};
//	playerID = 1;
//	wumpusID = 2;
//	bat1ID = 3;
//	bat2ID = 4;
//	pit1ID = 5;
//	pit2ID = 6;
//  golden treasure = 7
var arrows = 8;
var moves = 100;

init();

function init() {
	gameboard[1] = 23;
	gameboard[7] = 3;
	gameboard[2] = getRandomEmptySquare();
	gameboard[3] = getRandomEmptySquare();
	gameboard[4] = getRandomEmptySquare();
	gameboard[5] = getRandomEmptySquare();
	gameboard[6] = getRandomEmptySquare();
	
	document.getElementById('room-3').style.backgroundColor = 'gold';
	document.getElementById('room-23').style.backgroundColor = 'orange';
	document.getElementById('feedback-3').innerHTML = ("You have " + arrows + " arrows");
	document.getElementById('feedback-4').innerHTML = ('Score ' + moves); 
	checkRoom();
}