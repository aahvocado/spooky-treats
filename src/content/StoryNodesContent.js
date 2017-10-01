import { TAGS } from './Constants';
import { ITEM_IDS } from './CandyItemContent';
import { SKILL_IDS } from './SkillsContent';

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
	// narrative
	BEGINNING_NARRATIVE_1: 'beginning-narrative-1-story-id',
	BEGINNING_NARRATIVE_2: 'beginning-narrative-2-story-id',
	BEGINNING_NARRATIVE_3: 'beginning-narrative-3-story-id',
	BEGINNING_NARRATIVE_4: 'beginning-narrative-4-story-id',
	KNOCK_TUTORIAL_1: 'knock-tutorial-1-story-id',
	KNOCK_TUTORIAL_2: 'knock-tutorial-2-story-id',
	// generic
	GENERIC_KID_1: 'generic-kid-1-story-id',
	GENERIC_KID_2: 'generic-kid-2-story-id',
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
	// key narrative nodes
	// --- intro content
	makeNewNode({
		id: STORY_IDS.BEGINNING_NARRATIVE_1,
		tags: [TAGS.NARRATIVE], 
		displayText: '"Still here, kiddo? Aren\'t you a big fan of Halloween?\nIt\'s already evening and there\'s candy to be gotten. So out and spook and scam and trick to get all the candy you can stomach!"',
		actionSet: [
			{ text: 'Next', targetId: STORY_IDS.BEGINNING_NARRATIVE_2, giveSkillId: SKILL_IDS.TRICKER_TREATER },
		],
	}),
	makeNewNode({
		id: STORY_IDS.BEGINNING_NARRATIVE_2,
		displayText: '"Watch out for other Tricker Treaters, though."\nSomething something...',
		actionSet: [
			{ text: 'Next', targetId: STORY_IDS.BEGINNING_NARRATIVE_3 },
		],
	}),
	makeNewNode({
		id: STORY_IDS.BEGINNING_NARRATIVE_3,
		displayText: '"Anyway, let me see what costumes I might have... What do you think of these?"',
		actionSet: [
			{ text: 'That Robot Helmet is cool!', targetId: STORY_IDS.BEGINNING_NARRATIVE_4, giveSkillId: SKILL_IDS.ROBOTIC },
			{ text: 'Those cat ears are the cutest!', targetId: STORY_IDS.BEGINNING_NARRATIVE_4, giveSkillId: SKILL_IDS.RIDICULOUSLY_CUTE },
			{ text: 'I want to be a spooky ghost!', targetId: STORY_IDS.BEGINNING_NARRATIVE_4, giveSkillId: SKILL_IDS.SHEET_WITH_HOLES },
		],
	}),
	makeNewNode({
		id: STORY_IDS.BEGINNING_NARRATIVE_4,
		displayText: '"You are one weird kid."',
	}),
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
			{ text: 'Next', targetId: undefined },
		],
	}),
	// generic story nodes
	// --- story of the generic kid
	makeNewNode({
		id: STORY_IDS.GENERIC_KID_1,
		tags: [TAGS.GENERIC], 
		displayText: 'You see a generic looking kid in a generic looking costume. I didn\'t tell you what costume it was but you can probably just imagine it. It could be a princess or a jedi or a cow or worse... a hotdog.',
		actionSet: [
			{ text: 'Ominously haunt the kid!', targetId: STORY_IDS.GENERIC_KID_2, skillRequiredId: SKILL_IDS.SHEET_WITH_HOLES },
			{ text: 'Play a generic trick!', giveItemId: ITEM_IDS.W_PIECE },
		],
	}),
	makeNewNode({
		id: STORY_IDS.GENERIC_KID_2,
		displayText: 'You try to haunt the generic looking kid but all that happens is that you get laughed at because your costume is just a sheet.',
	}),
];

export {
	defaultStoryNode,
	STORY_IDS,
	makeNewNode,
	nodesList,
};