function apricotLoaded() {
	var canvas = document.getElementById('apricot_element');
	var context = canvas.getContext('2d');

	var rengerLocation = 15;
	var bulletLocation = 0;
	var rengerReversed = false;
	var isShooting = false;

	var contextWidth = 1500;
	var contextHeight = 500;

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

		if (rengerLocation == 485) {
			rengerReversed = true;
		}

		if (isShooting) {
			bulletLocation = bulletLocation + 2;
		}

		if (bulletLocation == contextWidth) {
			console.log(rengerLocation + 15, rengerLocation - 15);

			if (contextHeight / 2 < rengerLocation + 15
				&& contextHeight / 2 > rengerLocation - 15) {
				alert('Won');
			} else {
				alert('Missed');
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
		context.fillStyle = 'blue';
		context.fill();

		context.beginPath();
		context.rect(0, rengerLocation - 15, 10, 30);
		context.fillStyle = 'black';
		context.fill();

		context.beginPath();
		context.rect(contextWidth - bulletLocation - 8, contextHeight / 2 - 4, 8, 8);
		context.fillStyle = 'black';
		context.fill();
	}

	$(window).keypress(function (e) {
		if (e.keyCode === 0 || e.keyCode === 32) {
	    	e.preventDefault()

	    	isShooting = true;
	  	}
	});
}