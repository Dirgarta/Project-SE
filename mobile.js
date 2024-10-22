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