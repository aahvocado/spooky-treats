import { nodesList } from '../content/StoryNodesContent';

/*
	StoryNodes.js
		handles the display text and their actions
*/
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
			const currSearch = nodesList[id];
			if(currSearch.id === id) {
				found.push(currSearch);
			}
		}
		return found.length > 0 ? found : [nodesList[0]];
	}

	/*
		get all story nodes
	*/
	static getAllNodes = () => (nodesList);
};