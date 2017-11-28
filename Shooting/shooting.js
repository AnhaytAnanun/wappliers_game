var rengerLocation = 15;
var bulletLocation = 0;
var rengerReversed = false;
var isShooting = false;

function shootingLoaded() {
	var canvas = document.getElementById('shooting_element');
	var context = canvas.getContext('2d');

	var contextWidth = 750;
	var contextHeight = 200;

	var tic = setInterval(animate, 5);

	render();

	function animate() {
		if (rengerReversed) {
			rengerLocation--;

			if (rengerLocation == 0) {
				rengerReversed = false;
			}
		} else {
			rengerLocation++;
		}

		if (rengerLocation == contextHeight - 15) {
			rengerReversed = true;
		}

		if (isShooting) {
			bulletLocation = bulletLocation + 4;
		}

		if (bulletLocation > contextWidth && isShooting) {
			console.log(rengerLocation + 25, rengerLocation - 25);

			isShooting = false;

			if (contextHeight / 2 < rengerLocation + 15
				&& contextHeight / 2 > rengerLocation - 15) {
				shootingWon();
			} else {
				shootingMissed();
			}
		}
	}

	function render() {
  		drawCanvas();
  		requestAnimationFrame(render);
	}

	function drawCanvas() {
		context.beginPath();
		context.rect(0, 0, contextWidth, contextHeight);
		context.fillStyle = '#000515';
		context.fill();

		context.beginPath();
		context.rect(0, rengerLocation - 15, 10, 30);
		context.fillStyle = 'white';
		context.fill();

		context.beginPath();
		context.rect(contextWidth - bulletLocation - 8, contextHeight / 2 - 4, 8, 8);
		context.fillStyle = 'white';
		context.fill();
	}

	$(window).keypress(function (e) {
		if (e.keyCode === 0 || e.keyCode === 32) {
	    	e.preventDefault()

	    	isShooting = true;
	  	}
	});
}

function resetShooting() {
	isShooting = false;
	bulletLocation = 0;
}
