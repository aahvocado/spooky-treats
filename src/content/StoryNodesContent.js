const NODE_TAGS = {
	NARRATIVE: 'narrative-node',
	EASY: 'easy-node',
	MEDIUM: 'medium-node',
};

const defaultStoryNode = {
	id: -1, // unique id of this node
	tags: [], // tags this node might be related to
	displayText: 'Error Story Node', // text
	actionSet: [ // - list of ids which will point to other node actions
		/* { text: 'Next', targetId: 0, giveItemId: 0, giveSkillId: 0 } */
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
		tags: [NODE_TAGS.NARRATIVE], 
		displayText: 'Still here, kiddo? Aren\'t you a big fan of Tricker Treaters?\nIt\'s Halloween! So go out and spook some candy out of those other kids.\n',
		actionSet: [
			{ text: 'Next', targetId: 1, giveSkillId: 0 },
		],
	}),
	makeNewNode({
		id: 1,
		tags: [NODE_TAGS.NARRATIVE], 
		displayText: 'Watch out for other Tricker Treaters, though.\nSomething something...',
		actionSet: [
			{ text: 'Next', targetId: 2 },
		],
	}),
	makeNewNode({
		id: 2,
		tags: [NODE_TAGS.NARRATIVE], 
		displayText: 'Anyway, let me see what costumes I might have... What do you think of these?',
		actionSet: [
			{ text: 'That Robot Helmet is cool!', targetId: 3, giveSkillId: 1 },
			{ text: 'Those cat ears are the cutest!', targetId: 3, giveSkillId: 2 },
			{ text: 'I want to be a ghost!', targetId: 3, giveSkillId: 3 },
		],
	}),
	makeNewNode({
		id: 3,
		tags: [NODE_TAGS.NARRATIVE], 
		displayText: 'You\'re weird, kiddo.',
	}),

];

export {
	NODE_TAGS,
	nodesList,
	defaultStoryNode,
	makeNewNode,
};