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
		const { id } = filter;
		let found = [];
		if (id) {
			const currSearch = candyList[id];
			if(currSearch.id === id) {
				found.push(currSearch);
			}
		}
		return found.length > 0 ? found[0] : candyList[0];
	};

	/*
		get all story nodes
	*/
	static getAllNodes = () => (candyList);
};