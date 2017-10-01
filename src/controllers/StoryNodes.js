import { nodesList } from '../content/StoryNodesContent';
import Utility from './Utility';

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
		@param {bool} random - if true, will return a random one from the found list otherwise it will return the frist one
		@return {object} StoryNode object - returns the first found nodes
	*/
	static getNode = (filter = {}, random) => {
		const { id, tag } = filter;
		let found = [];
		
		for (var i=0; i<nodesList.length; i++) {
			const currSearch = nodesList[i];
			if (id !== undefined) {
				// match id
				if(currSearch.id === id) {
					found.push(currSearch);
				}
			} else if (tag !== undefined) {
				// match tags
				if(currSearch.tags && currSearch.tags.includes(tag)) {
					found.push(currSearch);
				}
			}
		}
		if (random && found.length > 1) {
			const randomIdx = Math.floor(Utility.rng() * found.length);
			return found[randomIdx];
		}
		return found[0];
	};

	/*
		get all story nodes
	*/
	static getAllNodes = () => (nodesList);
};