var currentScene = 4;
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
var returnedToGrave = false;
var suspectsRanger = false;

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
		'Welcome adventurer! You have been chosen by the elder council to help our community. ' +
		'Years have passed since the apocalypse began and everyone is struggling to survive. Currently, the most urgent issue is having enough water. ' +
		'Previous generations did ration the water wisely and it is almost all gone! ' + 
		'And since none of the water treatment specialists survived, all of the water became contaminated. ' + 
		'Please! We are begging you to search for  water resources, tools and anything else that could help treat the contaminated water so it is safe to drink	. ' + 
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
			'After you finished eating, the horse was able to stand on its 4 legs with a bit of your help. ' +
			'The horse seems quite happy, even when trying to run around. ' +
			'You noticed the horse does not have a bridle and the horse does not show any indications shes ever wore one.'
		);

		$('#button1').show();
		$('#button1').text('I saved this horse, so it is mine now!');
		$('#button2').show();
		$('#button2').text('Let it go. She belongs to nature.');
		$('#button3').hide();
	}

	// SCENE 4

	if (currentScene == 4) {
		$('#scene_text').text(
			'You continue the journey. The skies above slowly turn grey, covering with heavy, strange-shaped clouds that completely fill the sky. ' +
			'On the edge of the horizon, you see a skyline of grey buildings and the remnants of the old factories and warehouse facilities. ' +
			'You do not know what awaits inside. It could be cutting edge-technologies and cool gadgets? It could be saturated with monsters and criminals? However, both are deadly to meet. ' +
			'As rain begins falling to the ground, you quickly discover it is not just water, its acid rain.'
		);

		$('#scene_image').attr('src', './images/acid_rain.gif');

		$('#button1').show();
		$('#button1').text('Continue walking and hope your special, acid-proof hood covers enough to protect you.');
		$('#button2').show();
		$('#button2').text('Hide in the closest of buildings.');
		$('#button3').hide();
	}

	// SCENE 5

	if (currentScene == 5) {
		$('#scene_text').text(
			'You sleep well during the night, listening the rythmic drops of the rain and wind. ' +
			'When you woke up the next morning, you began cooking breakfast, but was suddenly interrupted by the strange sounds outside. ' +
			'A serpent-like mutant creature attacks and ambushes you.'
		);

		$('#button1').show();
		$('#button1').text('Fight!!! Mutants must die!');
		$('#button2').show();
		$('#button2').text('Run!!! It is too dangerous.');
		$('#button3').hide();
	}

	// SCENE 6

	if (currentScene == 6) {
		$('#scene_text').text(
			'You put on your hood and continue the journey. Suddenly, you hear a heavy object fall into a pile of mud.' +  
			'You quickly turn around and discover your horse collapsed! The acid rain was too much for this poor being.' + 
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
			'You covered the horse with an extra hood and gave her food and water, but it is too late. ' +
			'Your horse slowly passes away, looking straight into your the entire time with a peace of mind knowing she is not dying alone. ' +
			'Would you like to bury the corpse?'
		);

		$('#button1').show();
		$('#button1').text('Yes, that will be the honorable thing to do.');
		$('#button2').show();
		$('#button2').text('Leave it. Let nature happen.');
		$('#button3').hide();
	}

	// SCENE 8

	if (currentScene == 8) {
		$('#scene_text').text(
			'Even thought it is pouring acid rain, it is eery, yet beautiful outside. ' +
			'Small drops of acid water covers the trees and exotic plants throughout the woods. Deadly drops. ' +
			'You notice the bush of Klyukva, which is rare, exotic and tasty berry.'
		);

		$('#button1').show();
		$('#button1').text('Collect it to refill food resources.');
		$('#button2').show();
		$('#button2').text('Leave it alone.');
		$('#button3').hide();
	}

	// SCENE 9

	if (currentScene == 9) {
		$('#scene_text').text(
			'You notice a quick flash of light, not too far away. You begin walking towards the light and find a pair of glasses on the ground, ' +
			'and a corpse of a man in lab coat neaby.'
		);

		$('#button1').show();
		$('#button1').text('Burry the corpse, mark the grave, and pay your respects.');
		$('#button2').show();
		$('#button2').text('Just bury the corpse.');
		$('#button3').show();
		$('#button3').text('Leave the body as it is.');
	}

	// SCENE 10

	if (currentScene == 10) {
		$('#scene_text').text(
			'You are suddenly surrounded by the Outlaws of the Wastelands, the wild, violent group of lawless men whose only means of survival is violence and water.'
		);

		$('#button1').show();
		$('#button1').text('Try to escape.');
		$('#button2').show();
		$('#button2').text('Fight the outlaws.');
		$('#button3').hide();
	}

	// SCENE 11

	if (currentScene == 11) {
		$('#scene_text').text(
			'You lose the fight and was beaten up very badly. However, you remember that you have the ability to track the Outlaws of the Wastelands and figure out where they live. ' + 
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
			'After your encounter with the Outlaws, you got lost and run into a stranger to help.' +
			'The stranger is very helpful and knows everything about the land . Do you want to tell him of your quest, too?'
		);

		$('#button1').show();
		$('#button1').text('Keep silent. No one can be trusted in the wastelands, even if they are kind to you.');
		$('#button2').show();
		$('#button2').text('Tell your story. He seems like a nice guy.');
		$('#button3').hide();
	}

	// SCENE 13

	if (currentScene == 13) {
		$('#scene_text').text(
			'You make a small campfire and the Ranger offers to share his meal. Do you want to share your food as well?'
		);

		$('#button1').show();
		$('#button1').text('Keep your food, you have long journey ahead.');
		$('#button2').show();
		$('#button2').text('Offer to share your food.');
		$('#button3').hide();
	}

	// SCENE 16

	if (currentScene == 16) {
		$('#scene_text').text(
			'You found a prophet\'s cave high in the mountains. He personally greets you and asks if you would like to join him on a walk through the Deep Caves. '
			+ 'He insists, promising to show you something that could be very helpful.'
		);

		$('#button1').show();
		$('#button1').text('Follow. This man may have something I need.');
		$('#button2').show();
		$('#button2').text('Leave the prophet\'s cave. You can\'t risk your life by trusting some madman.');
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
			'The widow is pleased by your act of kindness and tells you the location of the Secret Springs she uses for drinking water. She also asks if you would like to rest at her house. You gladly accept. Inside, you notice a lab coat drenched with blood hanging over a chair. '
			+ 'Do you want to tell the widow about your encounter with scientists corpse?'
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
			'You suddenly have a bad feeling about leaving the scientists corpse behind. Do you want to return to it?'
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
				suspectsRanger = true;
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

	// SCENE 21

	if (currentScene == 21) {
		$('#scene_text').text(
			'You see the '
		);

		$('#button1').show();
		$('#button1').text('This is suspicious. Try and kill ranger by throwing a knife.');
		$('#button2').show();
		$('#button1').text('Great ranger.');
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
			text = text + 'You also found diagrams of how to construct water delivery routes, so you now can efficiently deliver water to consumers. ';
		} else {
			text = text + 'Still, delivering water to consmers is a problem as you don\'t know how to construct delivery system efficiently';
		}

		if (treatmentTechnology) {
			text = text + 'You also found diagrams of how to construct water treatment facilities, so you now can purify a lot of water besides those in springs and are less affected by environment changes. ';
		} else {
			text = text + 'Still, purifying water is a problem as you don\'t know how to construct treatment facilities efficiently. Your society is exposed to environment changes. ';			
		}

		if (storageTechnology) {
			text = text + 'You also found diagrams of how to construct water storages, so you now can efficiently store water for hard times. ';			
		} else {
			text = text + 'Still, storing water is a problem as you don\'t know how to construct storages efficiently. Your society is exposed to environment changes. ';			
		}

		if (timeCapsule) {
			text = text + 'Finally, the time capsule that prophet gave to you contained information on how the unwise use of water caused its shortage in first place. '
			+ 'Your souciety can use your ancestors experience to escape their fate.';			
		} else {
			text = text + 'Your society becomes careless water consumer and soon get itself into water shortage again.';			
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

	// DEAD AS KILLED BY RANGER

	if (currentScene == 205) {
		$('#scene_text').text(
			'Joyful that you were able to find valuable information for your society, you are returning home. ' +
			'You see ranger near the road, looking to you, and great him happily. ' +
			'Suddenly, ranger pull out a gun and shoot you. ' +
			'You got heavily injured, fall down and started to loose consciousness. ' +
			'Last thing you ever seen and heared in this world was ranger, collecting stuff you found and murmuring something about world domination through control of water'
		);

		$('#button1').show();
		$('#button1').text('Replay.');
		$('#button2').hide();
		$('#button3').hide();
	}

	// DEAD AS KILLED BY RANGER

	if (currentScene == 206) {
		$('#scene_text').text(
			'Ranger turned in your direction immidiately. There is a gun in his hand and he shoot you. ' +
			'You got heavily injured, fall down and started to loose consciousness. ' +
			'Last thing you ever seen and heared in this world was ranger, collecting stuff you found and murmuring something about world domination through control of water'
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
			currentScene = 26;
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

	// SCENE 20

	else if (currentScene == 20) {
		if (suspectsRanger) {
			currentScene = 21;
		} else {
			currentScene = 205;
		}
	}

	// SCENE 21

	else if (currentScene == 21) {
		if (button == 'button1') {
			// TODO: Put Minigame
		} else if (button == 'button2') {
			currentScene = 206;
		}
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
	$('#food_text').text('x' + food);
	$('#water_text').text('x' + water);

	if (treatmentTechnology) {
		$('#water_treatment').css('opacity', 1);
	}
	if (waterResource) {
		$('#water_resource').css('opacity', 1)
	}
	if (storageTechnology) {
		$('#water_storage').css('opacity', 1);
	}
	if (pipesDiagram) {
		$('#pipe_diagram').css('opacity', 1);
	}
	if (timeCapsule) {
		$('#time_capsule').css('opacity', 1);
	}
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
