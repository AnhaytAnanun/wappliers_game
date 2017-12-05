var collected;
var poisonous;
var goodApricots = [];
var badApricots = [];
var goodApricotImage = new Image();
var badApricotImage = new Image();

function apricotLoaded() {
	var canvas = document.getElementById('apricot_element');
	var context = canvas.getContext('2d');

	var contextWidth = 960;
	var contextHeight = 600;

	render();

	function render() {
		context.beginPath();
		context.rect(0, 0, contextWidth, contextHeight);
		context.fillStyle = '#000515';
		context.fill();

		var backgroundImage = new Image();

		backgroundImage.onload = function() {
			context.drawImage(backgroundImage, 0, 0, 960, 600);			

			var treeImage = new Image();

			treeImage.onload = function() {
				context.drawImage(treeImage, 300, 50, 500, 500);

				loadApricots();
			};
			treeImage.src = '../images/tree.png';
		}
		backgroundImage.src = '../images/tree_background.png';
	}

	function loadApricots() {
		goodApricotImage.onload = function() {
			badApricotImage.onload = function() {
				renderApricots();
			};
			badApricotImage.src = '../images/bad_apricot.png';
		}
		goodApricotImage.src = '../images/apricot.png';
	}

	function renderApricots() {
		//FF8F53
		//FFDCA2

		for (var index = 0 ; index < 10 ; index++) {
			goodApricots[index] = {
				x: Math.floor(Math.random() * 250 + 380),
				y: Math.floor(Math.random() * 30 + 220)
			};

			context.drawImage(goodApricotImage, goodApricots[index].x, goodApricots[index].y, 50, 50);
		}

		for (var index = 0 ; index < 10 ; index++) {
			badApricots[index] = {
				x: Math.floor(Math.random() * 350 + 380),
				y: Math.floor(Math.random() * 130 + 220)
			};

			context.drawImage(badApricotImage, badApricots[index].x, badApricots[index].y, 50, 50);
		}
	}
}