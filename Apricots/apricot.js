function apricotLoaded() {
	var canvas = document.getElementById('apricot_element');
	var context = canvas.getContext('2d');

	var rengerLocation = 15;
	var rengerReversed = false;

	var tic = setInterval(animate, 10);

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
	}

	function render() {
  		drawCanvas();
  		requestAnimationFrame(render);
	}

	function drawCanvas() {
		context.beginPath();
		context.rect(0, 0, 1500, 500);
		context.fillStyle = 'blue';
		context.fill();

		context.beginPath();
		context.rect(0, rengerLocation - 15, 10, 30);
		context.fillStyle = 'black';
		context.fill();
	}
}