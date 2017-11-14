var mazeRunning = false;



var MAN_COLOUR = "#FF9020";

var TRAIL_COLOUR = "#AA5020";

var GOAL_COLOUR = "#22FF22";

var BACKGROUND_COLOUR = "#0085FF";

var WALL_COLOUR = "#440944";

//add key controls for arrows/WASD

$(document).on("keydown", function (e) 
{
    if (mazeRunning) {
        if(e.which == 38 || e.which == 87)
        {
            moveMan('up');
        }
        if(e.which == 37 || e.which == 65)
        {
            moveMan('left');
        }
        
        if(e.which == 39 || e.which == 68)
        {
            moveMan('right');
        }
        
        if(e.which == 40 || e.which == 83)
        {
            moveMan('down');
        }
    }
    
});

function globalPageLoaded() {
    pageLoaded();
}

function wonMaze() {
    alert('Kinda works');
}