var mazeRunning = false;
var timerRuning = false;
var shootingRunning = false;
var countdown = 90;
var tid;
var shootingAttempt = 3;

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
    countdown = 90;

    mazeRunning = true;
    $('#maze_element').show();
    $('#center_element').hide();
    $('#scene_image').hide();    
    $('#distort').hide();

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
    $('#scene_image').show();    
    $('#distort').show();

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

function startShooting() {
    shootingLoaded();

    shootingRunning = true;
    $('#shooting_element').show();
    $('#center_element').hide();
    $('#scene_image').hide();    
    $('#distort').hide();
}

function stopShooting() {
    shootingRunning = false;
    $('#shooting_element').hide();
    $('#center_element').show();
    $('#scene_image').show();    
    $('#distort').show();
}

function shootingWin() {
    shootingAttempt = 3;

    currentScene = 401;

    stopShooting();
    setScene();
}

function shootingMissed() {
    shootingAttempt--;

    if (shootingAttempt == 0) {
        shootingAttempt = 3;

        currentScene = 206;

        stopShooting();
        setScene();
    } else {
        resetShooting();
    }
}