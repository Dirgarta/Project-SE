var x = window.innerWidth;
if (x < 1025) {
	var mobileButton = document.getElementById("buttonHolder");
	mobileButton.style.visibility = 'visible';
}

var buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i += 1) {
    buttons[i].onclick = function(e) {
    	document.getElementById('feedback').innerHTML = ("");
	    if(arrows > 0) {
			var hit = false;   
			switch(this.id) {
				case 'left':
					if((gameboard[1] - 1) % 5 != 0) {
						move(gameboard[1] - 1);
					} else {
						feedback("You are already farthest to the left");
					}
					break;
	        	case 'up':
	        		if((gameboard[1] - 5) > 0) {
						move(gameboard[1] - 5);	
					} else {
						feedback("You cannot move higher");
					}
					break;
	        	case 'down':
					if((gameboard[1] + 5) <= 25) {
						move(gameboard[1] + 5);
					} else {
						feedback("You are already at the bottom");
					}
					break;
	        	case 'right':
	        		if(gameboard[1] % 5 == 0) {
						feedback("You are already farthest to the right");
					} else {
						move(gameboard[1] + 1);				
					}
					break;
				case 'aim-left':
					if((gameboard[1] - 1) % 5 != 0) {
						if((gameboard[1] - 1) == gameboard[2]) {
							hit = true;
						} else {
							miss();
						}
					} else {
						feedback("You cannot shoot into the wall");
					}
					break;
				case 'aim-up':
					if((gameboard[1] - 5) > 0) {
						if((gameboard[1] - 5) == gameboard[2]) {
							hit = true; 
						} else {
							miss();
						}
					} else {
						feedback("You cannot shoot into the wall");
					}
					break;
				case 'aim-down':
					if((gameboard[1] + 5) < 26) {
						if((gameboard[1] + 5) == gameboard[2]) {
							hit = true;
						} else {
							miss();
						}
					} else {
						feedback("You cannot shoot into the wall");
					}
					break;
				case 'aim-right':
					if(gameboard[1] % 5 != 0) {
						if((gameboard[1] + 1) == gameboard[2]) {
							hit = true;
						} else {
							miss();
						}
					} else {
						feedback("Sorry, you cannot shoot into the wall");
					}
					break;
	        }
	        checkRoom();
			score();
	        if (hit == true) {
				alert("HIT!!! You killed the Wumpus, you are awesome! \n Score " + moves);
				newGame();
			}
	    } else {
			alert("Game over, you're out of arrows!");
			newGame();
		}
	}
}
