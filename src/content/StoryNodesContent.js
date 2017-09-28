/*
	All Story Nodes
*/
const NODE_TAGS = {
	NARRATIVE: 'narrative-node',
	EASY: 'easy-node',
	MEDIUM: 'medium-node',
};

const nodesList = [
	{
		id: 0, // unique id of this node
		actionSet: [], // references to other node actions
		tags: [NODE_TAGS.NARRATIVE], // tags this node might be related to
		displayText: 'Error: Searched for the wrong story node!',
	},
	{
		id: 1,
		actionSet: [
			{ text: "Next", targetId: 2 }
		],
		tags: [NODE_TAGS.NARRATIVE],
		displayText: 'Hello! Welcome to SpoOOOoooOOoky Treats!',
	},
	{
		id: 2,
		actionSet: [],
		tags: [NODE_TAGS.NARRATIVE],
		displayText: 'Click on a house to go Trick and Treating!',
	},
];

export {
	NODE_TAGS,
	nodesList,
};