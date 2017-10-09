const TAGS = {
	// context
	NARRATIVE: 'narrative-tag',
	GENERIC: 'generic-tag',

	// diificulty
	EASY_DIFFICULTY: 'easy-difficulty-tag',
	MEDIUM_DIFFICULTY: 'medium-difficulty-tag',
};

// global pixel size of certain objects
const SIZES = {
	HOUSE: 600,
	HOUSE_DISTANCE: 500,
};

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

export {
	TAGS,
	SIZES,
	defaultStoryNode,
}