import { TAGS } from './Constants';
import { ITEM_IDS } from './CandyItemContent';
import { SKILL_IDS } from './SkillsContent';

import { TUTORIAL_STORY_IDS, TUTORIAL_NODES_LIST } from './storynodes/TutorialStory';

const defaultStoryNode = {
	id: -1, // unique id of this node
	tags: [], // tags this node might be related to, don't give them to nodes that are next in a sequence
	knockCount: -1,
	displayText: 'Error Story Node', // text
	actionSet: [ // - list of ids which will point to other node actions
		/* {
			text: 'Next', // text to display in the button
			targetId: 0, // next story node to go to
			giveItemId: 0, // item to give when clicked
			giveSkillId: 0, // skill to give when clicked
			skillRequiredId: 0, // skill required in order for this to be visible
		}, */
	],
};
const STORY_IDS = {
	TUTORIAL_STORY_IDS,
	// narrative
	KNOCK_TUTORIAL_1: 'knock-tutorial-1-story-id',
	KNOCK_TUTORIAL_2: 'knock-tutorial-2-story-id',
	// generic
	GENERIC_KID_1: 'generic-kid-1-story-id',
	GENERIC_KID_2: 'generic-kid-2-story-id',
	NICE_LADY_HOUSE_1: 'nice-lady-house-1-story-id',
	NICE_LADY_HOUSE_2: 'nice-lady-house-2-story-id',
};
/*
	copies defaultStoryNode values and adds additional values
	@param {object} additions - values you want to replace in the defaultStoryNode
	@return {object} - StoryNode data
*/
const makeNewNode = (additions = {}) => {
	const newNode = Object.assign({}, defaultStoryNode);
	return Object.assign(newNode, additions);
};

/*
	All Story Nodes
*/
const nodesList = [
	TUTORIAL_NODES_LIST,
	// --- knock knock tutorial
	makeNewNode({
		id: STORY_IDS.KNOCK_TUTORIAL_1,
		tags: [TAGS.NARRATIVE], 
		displayText: '"Whoops! I\'m not ready yet! H-hold on, you need to knock on the door.\nKnock on the door.\nKnock on the door so I can open it and give you candy.\nTry knocking a couple times.\nJust don\'t leave before knocking! Y-you want candy, right?\nJust... just knock on the door, okay? After I close it first!"',
		actionSet: [
			{ text: '"Okay..."', targetId: STORY_IDS.KNOCK_TUTORIAL_2 },
		],
	}),
	makeNewNode({
		id: STORY_IDS.KNOCK_TUTORIAL_2,
		knockCount: 2,
		displayText: '"You\'ve got some nice knockers, kid!\nHere\'s a piece of candy for such a knockout job."',
		actionSet: [
			{ text: '"Wow, my first piece of candy!"', targetId: undefined, giveItemId: ITEM_IDS.W_PIECE },
		],
	}),
	// generic story nodes
	// --- story of the generic kid
	makeNewNode({
		id: STORY_IDS.GENERIC_KID_1,
		tags: [TAGS.GENERIC], 
		displayText: 'You see a generic looking kid in a generic looking costume. I didn\'t tell you what costume it was but you can probably just imagine it. It could be a princess or a jedi or a cow or worse... a cardboard box!',
		actionSet: [
			{ text: 'Ominously haunt the kid!', targetId: STORY_IDS.GENERIC_KID_2, skillRequiredId: SKILL_IDS.SHEET_WITH_HOLES },
			{ text: 'Play a generic trick!', giveItemId: ITEM_IDS.W_PIECE },
		],
	}),
	makeNewNode({
		id: STORY_IDS.GENERIC_KID_2,
		displayText: 'You try to haunt the generic looking kid but all that happens is that you get laughed at because your costume is just a sheet.',
	}),
	// --- story of the nice lady
	makeNewNode({
		id: STORY_IDS.NICE_LADY_HOUSE_1,
		tags: [TAGS.GENERIC], 
		displayText: 'As you approach the house you feel a looming presence... as if someone - or something - is watching over you.\nYou do however, smell something fragrant and fruity. It\'s a house that is inviting and welcoming... but full of terrifying gnomes and cobwebs...',
		actionSet: [
			{ text: 'You tremble...', targetId: STORY_IDS.NICE_LADY_HOUSE_2 },
		],
	}),
	makeNewNode({
		id: STORY_IDS.NICE_LADY_HOUSE_2,
		knockCount: 2,
		displayText: 'The door bursts open with vigor and the smell penetrates the air. Now that it was all throughout the air you now truly know what it is... It was the smell of fresh baked apples!\n"Oh my, hello! You have an adorable costume. Here\'s a treat!"',
	}),
];

export {
	defaultStoryNode,
	STORY_IDS,
	makeNewNode,
	nodesList,
};