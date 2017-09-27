const NODE_TAGS = {
	NARRATIVE: 'narrative-node',
	EASY: 'easy-node',
	MEDIUM: 'medium-node',
};

const nodes = [
	{
		id: 0, // unique id of this node
		actionSet: [], // references to other node actions
		tags: [NODE_TAGS.NARRATIVE], // tags this node might be related to
		displayText: 'Error: Searched for the wrong story node!',
	},
	{
		id: 1,
		actionSet: [],
		tags: [NODE_TAGS.NARRATIVE],
		displayText: 'Hello! Welcome to SpoOOOoooOOoky Treats!',
	}
];

export {
	NODE_TAGS,
};

export default class StoryNodes {
	/*		
		search for node by search filter

		@param {object} filter - options to search against, possible options include
			id: int - will only return one
			tags: string
		@return {array} - returns an array of found nodes
	*/
	static getNode = (filter = {}) => {
		const { id } = filter;
		let found = [];
		if (id) {
			const currSearch = nodes[id];
			if(currSearch.id === id) {
				found.push(currSearch);
				return found;
			}
		}
		return [nodes[0]];
	}

	/*
		get all story nodes
	*/
	static getAllNodes = () => (nodes);
};