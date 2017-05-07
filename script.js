document.getElementById("locationStatus").innerHTML = "Loading..."

var currentYear = 2134

var player = function() {
	this.locationTime = 2134;
	this.x = 0;
	this.y = 0;
}

var tile = function() {
  this.x = 0;
  this.y = 0;
  this.timePeriod = 2134;
  this.generate = function() {
    
  }
}

function goNorth(){
	if(player1.y < player1.locationPlanet.size){
		player1.y ++;
		updateDialog();
		calculatePlayerHour();
	}
	else{
		player1.y = 0;
	}
}

function goSouth(){
	
	if(player1.y > 0){
		player1.y --;
		updateDialog();
		calculatePlayerHour();
	}
	else{
		player1.y = player1.locationPlanet.size;
	}
}

function goWest(){
	if(player1.x > 0){
		player1.x --;
		updateDialog();
		calculatePlayerHour();
	}
	else{
		player1.x = player1.locationPlanet.size;
	}
}


function goEast(){
	if(player1.x < player1.locationPlanet.size){
		player1.x ++;
		updateDialog();
		calculatePlayerHour();
	}
	else{
		player1.x = 0;
	}
}


inputBox = document.getElementById("commandBox");
inputBox.onkeydown = function(e){
   if(e.keyCode == 13){
	   checkInput(inputBox.value);
     }
  }
