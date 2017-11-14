var currentScene = 16;
var food = 3;
var water = 3;
var hasHorse = false;

var collectedBerries = false;
var leftHorse = false;

var buriedScientist = false;
var markedScientist = false;

var stolenPipesDiagram = false;
var hadHorse = false;

var toldStory = false;

var pipesDiagram = false;
var waterResource = false;
var treatmentTechnology = false;
var storageTechnology = false;
var timeCapsule = false;

function setScene() {

	setResources();

	// SCENE 1

	if (currentScene == 1) {
		$('#scene_text').text(
		'Welcome adventurer! You have chosen by the elder council to help our community.' +
		'Years have passed since apocalypse, and our society is struggling for survival. One of our most important issues is water.' +
		'Our ancestors were not that wise to use water cautiously and now we have very little left.' + 
		'Besides there is no specialist on water treatment that had survived, so we cannot use contaminated water.' + 
		'We are begging you to search for new water resources and for tools and data that might help to construct water treatment infrastructure.' + 
		'But please hurry! We are running out of water!'
		);

		$('#button1').show();
		$('#button1').text('I will gladly serve our society!');
		$('#button2').show();
		$('#button2').text('Nah, I have water at my house for now, thats enough!');
		$('#button3').hide();
	}

	// SCENE 2

	if (currentScene == 2) {
		$('#scene_text').text(
			'You entered waistland praires. It is a dangerous place, but you hope to find some abandoned mechanisms or tools or documentation' +
			'that might help. After a while of traveling, you happen a horse, laying on the ground, ill.'
		);

		$('#button1').show();
		$('#button1').text('Help the horse, feed it and give some water.');
		$('#button2').show();
		$('#button2').text('I have no time and resources to spare! I will leave it.');
		$('#button3').hide();
	}

	// SCENE 3

	if (currentScene == 3) {
		$('#scene_text').text(
			'Horse is cured! Do you want to keep it for yourself?'
		);

		$('#button1').show();
		$('#button1').text('Keep it.');
		$('#button2').show();
		$('#button2').text('Let it go.');
		$('#button3').hide();
	}

	// SCENE 4

	if (currentScene == 4) {
		$('#scene_text').text(
			'Acid rain starts. You see a shelter nearby. Do you want to hide there, or you will continue walking?'
		);

		$('#button1').show();
		$('#button1').text('Continue walking.');
		$('#button2').show();
		$('#button2').text('Hide in shelter.');
		$('#button3').hide();
	}

	// SCENE 5

	if (currentScene == 5) {
		$('#scene_text').text(
			'At the morning, you found whos shelter this was. A giant serpent\'s!'
		);

		$('#button1').show();
		$('#button1').text('Fight.');
		$('#button2').show();
		$('#button2').text('Run.');
		$('#button3').hide();
	}

	// SCENE 6

	if (currentScene == 6) {
		$('#scene_text').text(
			'You put on your hood and continue your way. Suddenly, you heard how a heavy object falls down into a mud.' +  
			'You turn around to find your horse collapsed - the acid rain was the last drop of infortune this poor being could bear.' + 
			'Would you like to try and cure the horse?.'
		);

		$('#button1').show();
		$('#button1').text('Cure.');
		$('#button2').show();
		$('#button2').text('Leave.');
		$('#button3').hide();
	}

	// SCENE 6

	if (currentScene == 7) {
		$('#scene_text').text(
			'Horse is dead. Do you like to burry it?'
		);

		$('#button1').show();
		$('#button1').text('Yes.');
		$('#button2').show();
		$('#button2').text('Leave.');
		$('#button3').hide();
	}

	// SCENE 8

	if (currentScene == 8) {
		$('#scene_text').text(
			'You found some berries. Do you want to collect them for future use?'
		);

		$('#button1').show();
		$('#button1').text('Yes.');
		$('#button2').show();
		$('#button2').text('No.');
		$('#button3').hide();
	}

	// SCENE 9

	if (currentScene == 9) {
		$('#scene_text').text(
			'You found a corpse of a dead scientist. Want do you want to do?'
		);

		$('#button1').show();
		$('#button1').text('Burry and Mark.');
		$('#button2').show();
		$('#button2').text('Bury.');
		$('#button3').show();
		$('#button3').text('Leave.');
	}

	// SCENE 10

	if (currentScene == 10) {
		$('#scene_text').text(
			'You are surrounded by outlaws.'
		);

		$('#button1').show();
		$('#button1').text('Break out.');
		$('#button2').show();
		$('#button2').text('Fight.');
		$('#button3').hide();
	}

	// SCENE 11

	if (currentScene == 11) {
		$('#scene_text').text(
			'You lost the fight and was heavily beater. Would you like to return to the camp and take a revenge?'
		);

		$('#button1').show();
		$('#button1').text('Take revenge.');
		$('#button2').show();
		$('#button2').text('Continue.');
		$('#button3').hide();
	}

	// SCENE 12

	if (currentScene == 12) {
		$('#scene_text').text(
			'You got lost, but hopefuly you met a ranger that agreees to help you.' +
			'You are walking takling about different things. Do you want to tell him of your quest, too?'
		);

		$('#button1').show();
		$('#button1').text('Keep Silence.');
		$('#button2').show();
		$('#button2').text('Tell Story.');
		$('#button3').hide();
	}

	// SCENE 13

	if (currentScene == 13) {
		$('#scene_text').text(
			'Campfire.'
		);

		$('#button1').show();
		$('#button1').text('Harm yourself.');
		$('#button2').show();
		$('#button2').text('Offer food.');
		$('#button3').hide();
	}

	// SCENE 16

	if (currentScene == 16) {
		$('#scene_text').text(
			'You met prophet. Do you want follow him?'
		);

		$('#button1').show();
		$('#button1').text('Follow.');
		$('#button2').show();
		$('#button2').text('Leave.');
		$('#button3').hide();
	}

	// SCENE 17

	if (currentScene == 17) {
		$('#scene_text').text(
			'Woman is collecting barries.'
		);

		$('#button1').show();
		$('#button1').text('Help.');
		$('#button2').hide();
		$('#button3').hide();
	}

	// SCENE 18

	if (currentScene == 18) {
		$('#scene_text').text(
			'Bloody scientist shirt. Wanna talk about that?'
		);

		$('#button1').show();
		$('#button1').text('Yes.');
		$('#button2').show();
		$('#button2').text('No.');
		$('#button3').hide();
	}

	// OUTCOME ONE, SCENE 100

	if (currentScene == 100) {
		$('#scene_text').text(
			'You return home. You have water this day, you know you will have it tomorrow. ' +
			'But your society does not have infinite water sources, they are not even hufe. ' +
			'Sooner or later, your or your children\'s lifes will go literally dry. ' +
			'So enjoy your water while you have it.'
		);

		$('#button1').show();
		$('#button1').text('Replay.');
		$('#button2').hide();
		$('#button3').hide();		
	}

	// DEAD FROM SERPENT, SCENE 200

	if (currentScene == 200) {
		$('#scene_text').text(
			'You battled for a couple of hours. ' +
			'You tried your best, but the serpent was faster and it was able to bite you grievously. ' +
			'You died knowing that not only you failed your people, but also your corpse will digest in serpent\'s stomach for a month. '
		);

		$('#button1').show();
		$('#button1').text('Replay.');
		$('#button2').hide();
		$('#button3').hide();		
	}


	// DEAD AFTER FIGHT BECAUSE OUTLOWS DID NOT FIND WATER, SCENE 201

	if (currentScene == 201) {
		$('#scene_text').text(
			'You tried to fight back, but there where too many of them. ' +
			'Eventually, outlaws overthrew and got hands on your bag. ' +
			'To their displease, they did not found water, their main interest. ' +
			'Ravaging from dissapointment, they killed you.'
		);

		$('#button1').show();
		$('#button1').text('Replay.');
		$('#button2').hide();
		$('#button3').hide();		
	}

	// DEAD AFTER FAILED ESCAPE BECAUSE OUTLOWS DID NOT FIND WATER, SCENE 202

	if (currentScene == 202) {
		$('#scene_text').text(
			'You tried to run away, but there where too many of them. ' +
			'Eventually, outlaws overthrew and got hands on your bag. ' +
			'To their displease, they did not found water, their main interest. ' +
			'Ravaging from dissapointment, they killed you.'
		);

		$('#button1').show();
		$('#button1').text('Replay.');
		$('#button2').hide();
		$('#button3').hide();		
	}


	// DEAD AFTER SNEAKING INTO OUTLAW CAMP, SCENE 203

	if (currentScene == 203) {
		$('#scene_text').text(
			'You tried to sneak into outlaw camp. ' +
			'Your wounds made it hard for you to move like shadow like you used to. ' +
			'You where noticed by camp watchman and shot down. '
		);

		$('#button1').show();
		$('#button1').text('Replay.');
		$('#button2').hide();
		$('#button3').hide();		
	}
}

function onChoice(button) {


	// SCENE 1

	if (currentScene == 1) {
		if (button == 'button1') {
			currentScene = 2;
		} else if (button == 'button2') {
			currentScene = 100;
		}
	}

	// SCENE 2

	else if (currentScene == 2) {
		if (button == 'button1') {
			decrementFood();
			decrementWater();
			currentScene = 3;
		} else if (button == 'button2') {
			leftHorse = true;
			currentScene = 4;
		}
	}

	// SCENE 3

	else if (currentScene == 3) {
		if (button == 'button1') {
			hasHorse = true;
			currentScene = 4;
		} else if (button == 'button2') {
			currentScene = 4;
		}
	}

	// SCENE 4

	else if (currentScene == 4) {
		if (button == 'button1') {
			if (hasHorse) {
				currentScene = 6;
			} else {
				currentScene = 8;
			}
		} else if (button == 'button2') {
			currentScene = 5;
		}
	}

	// SCENE 5

	else if (currentScene == 5) {
		if (button == 'button1') {
			if (hasHorse) {
				currentScene = 8;
			} else {
				currentScene = 200;
			}
		} else if (button == 'button2') {
			food = 0;
			water = 0;
			currentScene = 8;
		}
	}

	// SCENE 6

	else if (currentScene == 6) {
		if (button == 'button1') {
			decrementFood();
			decrementWater();
			currentScene = 7;
		} else if (button == 'button2') {
			leftHorse = true;
			hasHorse = false;
			currentScene = 8;
		}
	}

	// SCENE 7

	else if (currentScene == 7) {
		if (button == 'button1') {
			decrementFood();
			decrementWater();
			currentScene = 8;
			hasHorse = false;
		} else if (button == 'button2') {
			leftHorse = true;
			hasHorse = false;
			currentScene = 8;
		}
	}

	// SCENE 8

	else if (currentScene == 8) {
		if (button == 'button1') {
			food++;
			currentScene = 9;
			collectedBerries = true;
		} else if (button == 'button2') {
			currentScene = 9;
		}
	}

	// SCENE 9

	else if (currentScene == 9) {
		if (button == 'button1') {
			pipesDiagram = true;
			buriedScientist = true;
			markedScientist = true;
			currentScene = 10;
		} else if (button == 'button2') {
			pipesDiagram = true;
			buriedScientist = true;
			currentScene = 10;
		} else if (button == 'button3') {
			currentScene = 10;
		}
	}

	// SCENE 10

	else if (currentScene == 10) {
		if (button == 'button1') {
			if (hasHorse) {
				currentScene = 12;
			} else {
				if (water == 0) {
					currentScene = 201;
				} else {
					water = 0;
					food = 0;
					currentScene = 11;
				}
			}
		} else if (button == 'button2') {
			if (water == 0) {
				currentScene = 202;
			} else {
				water = 0;
				food = 0;
				currentScene = 11;

				if (hasHorse) {
					hadHorse = true;
				}

				hasHorse = false;

				if (pipesDiagram) {
					stolenPipesDiagram = true;
				}

				pipesDiagram = false;
			}
		}
	}

	// SCENE 11

	else if (currentScene == 11) {
		if (button == 'button1') {
			if (collectedBerries) {
				food = 2;
				water = 2;
				currentScene = 12;

				if (stolenPipesDiagram) {
					pipesDiagram = true;
				}

				if (hadHorse) {
					hasHorse = true;
				}
			} else {
				currentScene = 203;
			}
		} else if (button == 'button2') {
			currentScene = 12;
		}
	}

	// SCENE 12

	else if (currentScene == 12) {
		if (button == 'button1') {
		} else if (button == 'button2') {
			toldStory = true;
		}

		currentScene = 13;
	}

	// SCENE 13

	else if (currentScene == 13) {
		if (button == 'button1') {
			//TODO: Excessive Use Ending
		} else if (button == 'button2') {
			currentScene = 16;
		}
	}

	// SCENE 16

	else if (currentScene == 16) {
		if (button == 'button1') {
			mazeRunning = true;
	        $('#maze_element').show();
		} else if (button == 'button2') {
			currentScene = 17;
		}
	}

	// SCENE 17

	else if (currentScene == 17) {
		if (button == 'button1') {
			//TODO: Barry Collecting Game
		} else if (button == 'button2') {
			currentScene = 19;
		}
	}

	// SCENE 18

	else if (currentScene == 18) {
		if (button == 'button1') {
			if (buriedScientist) {
				storageTechnology = true;
			}

			currentScene = 19;
		} else if (button == 'button2') {
			currentScene = 19;
		}
	}

	// SCENE 19

	else if (currentScene == 19) {
		if (button == 'button1') {
			if (leftHorse == true) {
				//TODO: Dead Scene: Wolf Attack
			} else {
				if (buriedScientist == false) {
					currentScene == 21;
				}
			}
		} else if (button == 'button2') {

		}
	}

	// Replay Scenes

	else if (currentScene > 99) {
		currentScene = 1;
		food = 3;
		water = 3;
		hasHorse = false;

		collectedBerries = false;
		leftHorse = false;

		buriedScientist = false;
		markedScientist = false;

		stolenPipesDiagram = false;
		hadHorse = false;

		toldStory = false;

		pipesDiagram = false;
		waterResource = false;
		treatmentTechnology = false;
		storageTechnology = false;
		timeCapsule = false;

		currentScene = 1;
	}

	setScene();
}

function setResources() {
	var text = hasHorse ? 'Horse Companion    ' : '';
	$('#resources_text').text(text + 'Food: ' + food + '    Water: ' + water);
}

function decrementFood() {
	if (food == 0) {
		//TODO: Dead Scene
	}

	food--;
}

function decrementWater() {
	if (water == 0) {
		//TODO: Dead Scene
	}

	water--;
}