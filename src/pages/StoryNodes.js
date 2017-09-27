const NODE_TAGS = {
	EASY: 'easy-node',
	MEDIUM: 'medium-node',
};

const exampleNode = {
	id: 0, // unique id of this node
	actionSet: [], // object referenes
	tags: [NODE_TAGS.EASY], // tags this node might be related to
	displayText: 'Hello World',
};

export {
	NODE_TAGS,
	exampleNode,
};

export default class StoryNodes {

};