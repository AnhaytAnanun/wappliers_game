var currentScene = 1;
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
		'Welcome adventurer! You have chosen by the elder council to help our community. ' +
		'Years have passed since apocalypse, and our society is struggling for survival. One of our most important issues is water. ' +
		'Our ancestors were not that wise to use water cautiously and now we have very little left. ' + 
		'Besides there is no specialist on water treatment that had survived, so we cannot use contaminated water. ' + 
		'We are begging you to search for new water resources and for tools and data that might help to construct water treatment infrastructure. ' + 
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
			'that might help. After a while of traveling, you happen a horse, laying on the ground. ' +
			'It seems to be exhasted and starving, you can see its rib bones under skin.'
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
			'After some eating and drinking, the horse was able to stand on its 4 legs with a bit of your help. ' +
			'It seem quite happy, even trying to run around. ' +
			'You now you noticed that there is no bridle and no sign of its wearing on cheecks and tooth.'
		);

		$('#button1').show();
		$('#button1').text('I saved this horse, so it mine now.');
		$('#button2').show();
		$('#button2').text('Let it go. She belongs to nature.');
		$('#button3').hide();
	}

	// SCENE 4

	if (currentScene == 4) {
		$('#scene_text').text(
			'You continue your journey. The sky above slowly turns grey, covering with heavy, strange shaped clouds until there is no free spot left. ' +
			'On the edge of the horizon, you see grey building, remnants of some old factory or scientific plant. ' +
			'You never now what awaits you there, it may be fascinating technologies as well as monsters and outlaws, both deadly to meet. ' +
			'Rain starts. Its acid rain.'
		);

		$('#button1').show();
		$('#button1').text('Continue walking, you have special hood to cover yourself.');
		$('#button2').show();
		$('#button2').text('Hide in the closest of buildings.');
		$('#button3').hide();
	}

	// SCENE 5

	if (currentScene == 5) {
		$('#scene_text').text(
			'You sleep well during the night, listening the rythmic drops of the rain and wind. ' +
			'At the morning, you attempted to make some breakfest, but was interrupted by strange sounds from outside. ' +
			'A serpent-like mutant ambushes you.'
		);

		$('#button1').show();
		$('#button1').text('Fight. Mutants must die!');
		$('#button2').show();
		$('#button2').text('Run. You must not risk yourself.');
		$('#button3').hide();
	}

	// SCENE 6

	if (currentScene == 6) {
		$('#scene_text').text(
			'You put on your hood and continue your way. Suddenly, you heard how a heavy object falls down into a mud.' +  
			'You turn around to find your horse collapsed - the acid rain was too much for this poor being.' + 
			'Would you like to try and help the horse?.'
		);

		$('#button1').show();
		$('#button1').text('Help the horse.');
		$('#button2').show();
		$('#button2').text('Leave it, there is no place for weak creatures in wastelands.');
		$('#button3').hide();
	}

	// SCENE 6

	if (currentScene == 7) {
		$('#scene_text').text(
			'You covered the horse with an extra hood, gave in food and water, but its state seems to warsen. ' +
			'It passes away, looking straight into your eyes with dignity. ' +
			'Would you like tu bury the corpse?'
		);

		$('#button1').show();
		$('#button1').text('Yes, that will be a human act.');
		$('#button2').show();
		$('#button2').text('Leave it, let the nature take what belongs to it.');
		$('#button3').hide();
	}

	// SCENE 8

	if (currentScene == 8) {
		$('#scene_text').text(
			'Even that rain was an acid one, it is fresh and beautiful outside. ' +
			'Small water drops cover grass and rare bushes. Deadly drops. ' +
			'You notice a bush of Klyukva, a rare and tasty berry.'
		);

		$('#button1').show();
		$('#button1').text('Collect it to refill food resources.');
		$('#button2').show();
		$('#button2').text('Leave it by.');
		$('#button3').hide();
	}

	// SCENE 9

	if (currentScene == 9) {
		$('#scene_text').text(
			'A blink of light not far away catches you attention. You followed the bling to find a pare of glasses on the ground, ' +
			'and a corpse of a man in lab coat neaby.'
		);

		$('#button1').show();
		$('#button1').text('Burry the corpse and mark the grave.');
		$('#button2').show();
		$('#button2').text('Just bury the corpse.');
		$('#button3').show();
		$('#button3').text('Leave it as is.');
	}

	// SCENE 10

	if (currentScene == 10) {
		$('#scene_text').text(
			'You were surrounded by outlaws. This are harsh men of the wastelands, they only value brute force and water.'
		);

		$('#button1').show();
		$('#button1').text('Try to escape.');
		$('#button2').show();
		$('#button2').text('Fight them.');
		$('#button3').hide();
	}

	// SCENE 11

	if (currentScene == 11) {
		$('#scene_text').text(
			'You lost the fight and was heavily beaten. Now you can find the foorptints of outlaws on the ground. ' + 
			'Would you like to return to follow them and take revenge?'
		);

		$('#button1').show();
		$('#button1').text('Follow and take revenge.');
		$('#button2').show();
		$('#button2').text('Continue.');
		$('#button3').hide();
	}

	// SCENE 12

	if (currentScene == 12) {
		$('#scene_text').text(
			'After encounter with outlaws, you got lost. Hopefuly you met a ranger that agreees to help you.' +
			'You are walking and takling about different subjects now. Do you want to tell him of your quest, too?'
		);

		$('#button1').show();
		$('#button1').text('Keep silence. No one can be trusted in the wastelands, moreover those kind to you.');
		$('#button2').show();
		$('#button2').text('Tell story. This man is kind to you, after all.');
		$('#button3').hide();
	}

	// SCENE 13

	if (currentScene == 13) {
		$('#scene_text').text(
			'You made a small campfire. The Ranger is offered some of his food to you. Do you also like to offer some food?'
		);

		$('#button1').show();
		$('#button1').text('Keep your food. You have long journey to go still.');
		$('#button2').show();
		$('#button2').text('Offer food.');
		$('#button3').hide();
	}

	// SCENE 16

	if (currentScene == 16) {
		$('#scene_text').text(
			'You found prophet\'s cave high in the mountains. He greeted you by name and asked if you would like to take a tour into deep of the cave. '
			+ 'He promises to show something really valuable for you.'
		);

		$('#button1').show();
		$('#button1').text('Follow. This man may have something really interesting.');
		$('#button2').show();
		$('#button2').text('Leave prophet\'s cave. You can\'t risk your life by trusting some madman.');
		$('#button3').hide();
	}

	// SCENE 17

	if (currentScene == 17) {
		$('#scene_text').text(
			'You arrived at widow\'s house. She is outside, struggling to collect some apricots from a big tree. '
		);

		$('#button1').show();
		$('#button1').text('Help her.');
		$('#button2').show();
		$('#button2').text('Do not help.');
		$('#button3').hide();
	}

	// SCENE 18

	if (currentScene == 18) {
		$('#scene_text').text(
			'Widow is pleased by your act and tells you location of secret springs she takes water from. She also asks if you would like to rest at her house. You gladly accept. Inside, you noticed a bloody lab coat hanging on a chair. '
			+ 'Will you tell widow about your encounter with scientist corpse?'
		);

		$('#button1').show();
		$('#button1').text('Yes.');
		$('#button2').show();
		$('#button2').text('No.');
		$('#button3').hide();
	}

	// SCENE 19

	if (currentScene == 19) {
		$('#scene_text').text(
			'Something seems suspicious with the scientist corpse you left behind. Do you want to return to it?'
		);

		$('#button1').show();
		$('#button1').text('Yes.');
		$('#button2').show();
		$('#button2').text('No.');
		$('#button3').hide();
	}

	// SCENE 20

	if (currentScene == 20) {
		var text = '';
		var missed = false;

		if (markedScientist) {
			if (toldStory) {
				missed = true;
				text = 'You found the grave open and the corpse stripped and examined. You also notice footprints that look like ones from ranger\'s boots.';
			} else {
				missed = true;
				text = 'The grave was opened by outlaws. The corpse was burnt down. Noting to search here anymore.';
			}
		}

		if (!buriedScientist) {
			missed = true;
			text = 'Wolves made their way with the corpse. Nothing to search for here anymore.'
		}

		if (!missed) {
			storageTechnology = true;
			text = 'You opened the grave and examined the corpse. You found another book about water storage facilities';
		}

		$('#scene_text').text(
			text
		);

		$('#button1').show();
		$('#button1').text('Continue.');
		$('#button2').hide();
		$('#button3').hide();
	}	

	// SCENE 22

	if (currentScene == 22) {
		$('#scene_text').text(
			'It was not easy to bury the horse. You tired a lot and consumed some extra food and water.'
		);

		$('#button1').show();
		$('#button1').text('Continue.');
		$('#button2').hide();
		$('#button3').hide();
	}

	// SCENE 23

	if (currentScene == 23) {
		$('#scene_text').text(
			'When you lifted the corpse to place it into the grave, some papers fell down from its pockets. ' +
			'You examined them, they appear to be some directions on how to properly produce and construct pipes ' +
			'and delivery routes for water.'
		);

		$('#button1').show();
		$('#button1').text('Continue.');
		$('#button2').hide();
		$('#button3').hide();
	}

	// SCENE 24

	if (currentScene == 24) {
		$('#scene_text').text(
			'You found the outlaw camp and scneak it easily despite your wounds. ' +
			'There was no one alive at the camp - they all died from tasting the Klyukva berries which appear to absorb the poison from acid rain.'
		);

		$('#button1').show();
		$('#button1').text('Continue.');
		$('#button2').hide();
		$('#button3').hide();
	}

	// SCENE 25

	if (currentScene == 25) {
		$('#scene_text').text(
			'Ranger is pleased by your kind act. It return he tells you of a prophet and a widow that leave in the highlands and can be of help.'
		);

		$('#button1').show();
		$('#button1').text('Continue.');
		$('#button2').hide();
		$('#button3').hide();		
	}

	// SCENE 26

	if (currentScene == 26) {
		$('#scene_text').text(
			'You part ways with ranger next day. After some wondering, you found springs and return to your people glad of yourself.'
		);

		$('#button1').show();
		$('#button1').text('Continue.');
		$('#button2').hide();
		$('#button3').hide();		
	}

	// SCENE 27

	if (currentScene == 27) {
		$('#scene_text').text(
			'You watched as widow was collecting her fruits. Afterwards, widow do not respond to your attempts of communication.'
		);

		$('#button1').show();
		$('#button1').text('Continue.');
		$('#button2').hide();
		$('#button3').hide();		
	}

	// SCENE 28

	if (currentScene == 28) {
		$('#scene_text').text(
			'Widow is pleased by your act of respect to her late husband. She grants you with book about water treatment technology.'
		);

		$('#button1').show();
		$('#button1').text('Continue.');
		$('#button2').hide();
		$('#button3').hide();		
	}

	// SCENE 29

	if (currentScene == 29) {
		$('#scene_text').text(
			'Widow is angread that you did not bury her husband. You retreated from her house, ashamed.'
		);

		$('#button1').show();
		$('#button1').text('Continue.');
		$('#button2').hide();
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

	if (currentScene == 101) {
		var text = 'You have successfully located springs that can be used as water resources. ';

		if (pipesDiagram) {
			text = 'You also found diagrams of how to construct water delivery routes, so you now can efficiently deliver water to consumers. ';
		} else {
			text = 'Still, delivering water to consmers is a problem as you don\'t know how to construct delivery system efficiently';
		}

		if (treatmentTechnology) {
			text = 'You also found diagrams of how to construct water treatment facilities, so you now can purify a lot of water besides those in springs and are less affected by environment changes. ';
		} else {
			text = 'Still, purifying water is a problem as you don\'t know how to construct treatment facilities efficiently. Your society is exposed to environment changes. ';			
		}

		if (storageTechnology) {
			text = 'You also found diagrams of how to construct water storages, so you now can efficiently store water for hard times. ';			
		} else {
			text = 'Still, storing water is a problem as you don\'t know how to construct storages efficiently. Your society is exposed to environment changes. ';			
		}

		if (timeCapsule) {
			text = 'Finally, the time capsule that prophet gave to you contained information on how the unwise use of water caused its shortage in first place. '
			+ 'Your souciety can use your ancestors experience to escape their fate.';			
		} else {
			text = 'Your society becomes careless water consumer and soon get itself into water shortage again.';			
		}

		$('#scene_text').text(
			text
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

	// DEAD AFTER SNEAKING INTO OUTLAW CAMP, SCENE 204

	if (currentScene == 204) {
		$('#scene_text').text(
			'The Prophet shoot the door down. ' +
			'"You did not pass my probation", The Prophet said, "So I will lock you here." ' +
			'You wondered the maze until you starved to the death.'
		);

		$('#button1').show();
		$('#button1').text('Replay.');
		$('#button2').hide();
		$('#button3').hide();
	}

	// GAME OUTCOME FOR MAZE, SCENE 300

	if (currentScene == 300) {
		$('#scene_text').text(
			'The prophet is pleased that you made it out of the maze. ' +
			'"You did pass my probation", The Prophet said, "So I will award you with this time capsule. Take it to your elders, it contains valuable information."'
		);

		$('#button1').show();
		$('#button1').text('Proceed.');
		$('#button2').hide();
		$('#button3').hide();		
	}

	// GAME PREPHASE

	if (currentScene == 400) {
		$('#scene_text').text(
			'You wake up laying on a stone floor in some kind of maze. ' + 
			'The Prophet\'s voice announces that the exit from maze will be shut down soon and you need to get out as soon as you can if you want his help on your quest. ' +
			'Use your keyboard arrows to direct in the maze. You will have 60 seconds to escape it.'
		);

		$('#button1').show();
		$('#button1').text('Proceed.');
		$('#button2').hide();
		$('#button3').hide();		
	}

	if (currentScene == 401) {
		$('#scene_text').text(
			'This minigame is in development. We suppose you won.'
		);

		$('#button1').show();
		$('#button1').text('Proceed.');
		$('#button2').hide();
		$('#button3').hide();		
	}

	if (currentScene == 402) {
		$('#scene_text').text(
			'This minigame is in development. We suppose you won.'
		);

		$('#button1').show();
		$('#button1').text('Proceed.');
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
			currentScene = 22;
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
			currentScene = 23;
		} else if (button == 'button2') {
			pipesDiagram = true;
			buriedScientist = true;
			currentScene = 23;
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
				currentScene = 24;

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
		if (button == 'button2') {
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
			currentScene = 400;
		} else if (button == 'button2') {
			currentScene = 17;
		}
	}

	// SCENE 17

	else if (currentScene == 17) {
		if (button == 'button1') {
			currentScene = 401;
		} else if (button == 'button2') {
			currentScene = 27;
		}
	}

	// SCENE 18

	else if (currentScene == 18) {
		if (button == 'button1') {
			if (buriedScientist) {
				currentScene = 28;
			} else {
				currentScene = 29;
			}
		} else if (button == 'button2') {
			currentScene = 19;
		}
	}

	// SCENE 19

	else if (currentScene == 19) {
		if (button == 'button1') {
			currentScene = 20;
		} else if (button == 'button2') {
			currentScene = 101;
		}
	}

	// SCENE 22

	else if (currentScene == 20) {
		currentScene = 402;
	}

	else if (currentScene == 22) {
		currentScene = 8;
	}

	else if (currentScene == 23) {
		currentScene = 10;
	}

	else if (currentScene == 24) {
		currentScene = 12;
	}

	else if (currentScene == 25) {
		currentScene = 16;
	}

	else if (currentScene == 26) {
		currentScene = 101;
	}

	else if (currentScene == 27) {
		currentScene = 26;
	}

	else if (currentScene == 28) {
		currentScene = 19;
	}

	else if (currentScene == 29) {
		treatmentTechnology = true;
		currentScene = 19;
	}

	// Game scenes

	else if (currentScene == 400) {
		startMaze();
	}

	else if (currentScene == 401) {
		waterResource = true;
		currentScene = 18;
	}

	else if (currentScene == 402) {
		currentScene = 101;
	}

	else if (currentScene == 300) {
		timeCapsule = true;
		currentScene = 17;
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