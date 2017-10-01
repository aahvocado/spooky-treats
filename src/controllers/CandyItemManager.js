import { candyList } from '../content/CandyItemContent';

/*
	CandyItemManager.js
		handles the candy items
*/
export default class CandyItemManager {
	/*		
		search for a candy by search filter

		@param {object} filter - options to search against, possible options include
			id: int - will only return one
			tags: string
		@return {object} - CandyItem object returns an array of found nodes
	*/
	static getItem = (filter = {}) => {
		const { id, tag } = filter;
		let found = [];
		for (var i=0; i<candyList.length; i++) {
			const currSearch = candyList[i];
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
		return found.length > 0 ? found[0] : candyList[0];
	};

	/*
		get all story nodes
	*/
	static getAllNodes = () => (candyList);
};