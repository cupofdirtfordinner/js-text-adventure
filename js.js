(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br/>';
        } else {
            logger.innerHTML += message + '<br>';
        counter += 1
        }
    }
})();
console.log("you find yourself in a room.");
var counter = 0
var item = 0
var genieValue = ""

var currentLocation = [room, hallway]
var room = ["pen", "drawer", "paper", "door", "rock"]
var hallway = ["door labeled door 1"]
var roomDetails = ["it writes things.", "it stores things.", "there's a funny little man drawn on it.", "these things usually open, but this one is jammed.", "it's pretty hefty."]

var shutUp = ["stop spouting nonesense!", "are you having a stroke?", "you're not making any sense!", "have you taken your medications today?"]

function lookaround() {
item = room[Math.floor(Math.random() * room.length)] //get random number out of the total number of elements in 
	console.log( "looking around the room, you see a (" + item + ")." )
}

function genie() {
	genieValue = document.getElementById('genie').value;
  if (room.includes(genieValue) ) {
  	console.log("examined (" + genieValue + "): " + roomDetails[room.indexOf(genieValue)] );
  }
  else {
  	console.log("examined (" + genieValue + "): " + shutUp[Math.floor(Math.random() * shutUp.length)])
  }
}
