var mazeRunning = false;
var timerRuning = false;
var countdown = 60;
var tid;

$('#timer').hide();


var MAN_COLOUR = "#FF9020";

var TRAIL_COLOUR = "#AA5020";

var GOAL_COLOUR = "#22FF22";

var BACKGROUND_COLOUR = "#000515";

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
    currentScene = 300;
    setScene();

    stopMaze();
}

function startMaze() {
    countdown = 60;

    mazeRunning = true;
    $('#maze_element').show();
    $('#center_element').hide();

    $('#timer').text(countdown);

    $('#timer').show();

    tid = setInterval(runTime, 1000);
}

function stopMaze() {
    $('#timer').hide();

    clearInterval(tid);

    mazeRunning = true;
    $('#maze_element').hide();
    $('#center_element').show();

    $('#timer').hide();   
}

function runTime() {
    countdown--;

    $('#timer').text(countdown);

    if (countdown == 0) {
        currentScene = 204;
        setScene();

        stopMaze();
    }
}