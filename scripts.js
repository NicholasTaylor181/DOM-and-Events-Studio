// Write your JavaScript code here.
// Remember to pay attention to page loading!

let takeOffButton = null;
let landButton = null;
let missionAbort = null;
let flightStatus = null;
let shuttleBackground = null;
let shuttleHeight = null;
let up = null;
let down = null;
let left = null;
let right = null;
let rocket = null;

function init () {
    missionAbort = document.getElementById("missionAbort");
    takeOffButton = document.getElementById("takeoff");
    landButton = document.getElementById("landing");
    flightStatus = document.getElementById("flightStatus");
    shuttleBackground = document.getElementById("shuttleBackground");
    shuttleHeight = document.getElementById("spaceShuttleHeight");
    up = document.getElementById("up");
    down = document.getElementById("down");
    left = document.getElementById("left");
    right = document.getElementById("right");
    rocket = document.getElementById("rocket");
    rocket.setAttribute("style", "position:relative;top:0px;left:0px;")

    function takeOff(){
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.background = "blue";
            shuttleHeight.innerHTML = 10000;
            }
        }
        takeOffButton.addEventListener("click", takeOff);

        function landing(){
            window.alert("The shuttle is landing. Landing gear engaged.");
            flightStatus.innerHTML = "The shuttle has landed.";
            shuttleBackground.style.background = "green";
            shuttleHeight.innerHTML = 0;
        }
        landButton.addEventListener("click",landing);

    missionAbort.addEventListener("mouseover", function (event) {
      missionAbort.style.background = "red";
    });
    
    missionAbort.addEventListener("click", function(event) {
      if( window.confirm("Confirm that you want to abort the mission.")) {
        flightStatus.innerHTML = "mission aborted.";
        shuttleBackground.style.background = "green";
        shuttleHeight.innerHTML = 0;
      }
    });

    let upPos = 0;
    let leftPos = 0;
    let height = 0;
     
    
        up.addEventListener("click", function(event) {
            upPos -= 10
            rocket.style.top = upPos + "px";
            height+= 10000;
            shuttleHeight.innerHTML = height
        });
    
        down.addEventListener("click", function(event) {
            upPos += 10
            rocket.style.top = upPos + "px";
            height-= 10000;
            shuttleHeight.innerHTML = height
        });

        left.addEventListener("click", function(event) {
            leftPos -= 10
            rocket.style.left = leftPos + "px";
        });

        right.addEventListener("click", function(event) {
            leftPos += 10
            rocket.style.left = leftPos + "px";
        });


}

window.onload = init;
