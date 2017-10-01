import { TAGS } from './Constants';
import { SKILL_IDS } from './SkillsContent';

const defaultStoryNode = {
	id: -1, // unique id of this node
	tags: [], // tags this node might be related to
	displayText: 'Error Story Node', // text
	actionSet: [ // - list of ids which will point to other node actions
		/* {
			text: 'Next', // text to display in the button
			targetId: 0, // next story node to go to
			giveItemId: 0, // item to give when clicked
			giveSkillId: 0, // skill to give when clicked
			skillRequirementId: 0, // skill required in order for this to be visible
		} */
	],

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
	makeNewNode({
		id: 0,
		tags: [TAGS.NARRATIVE], 
		displayText: 'Still here, kiddo? Aren\'t you a big fan of Tricker Treaters?\nIt\'s Halloween! So go out and spook some candy out of those other kids.\n',
		actionSet: [
			{ text: 'Next', targetId: 1, giveSkillId: SKILL_IDS.TRICKER_TREATER },
		],
	}),
	makeNewNode({
		id: 1,
		tags: [TAGS.NARRATIVE], 
		displayText: 'Watch out for other Tricker Treaters, though.\nSomething something...',
		actionSet: [
			{ text: 'Next', targetId: 2 },
		],
	}),
	makeNewNode({
		id: 2,
		tags: [TAGS.NARRATIVE], 
		displayText: 'Anyway, let me see what costumes I might have... What do you think of these?',
		actionSet: [
			{ text: 'That Robot Helmet is cool!', targetId: 3, giveSkillId: SKILL_IDS.ROBOTIC },
			{ text: 'Those cat ears are the cutest!', targetId: 3, giveSkillId: SKILL_IDS.RIDICULOUSLY_CUTE },
			{ text: 'I want to be a spooky ghost!', targetId: 3, giveSkillId: SKILL_IDS.SHEET_WITH_HOLES },
		],
	}),
	makeNewNode({
		id: 3,
		tags: [TAGS.NARRATIVE], 
		displayText: 'You\'re weird, kiddo.',
	}),

];

export {
	nodesList,
	defaultStoryNode,
	makeNewNode,
};