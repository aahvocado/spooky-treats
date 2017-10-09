// import Utility from './Utility';
import StoryNodes from './StoryNodes';

import { TAGS, SIZES } from '../content/Constants';
import { HOUSE_IDS, houseList, makeNewHouse } from '../content/MapHouseContent';

/*		
	searches for a predefined house in houseList

	@param {object} filter - options to search against, possible options include
		id: int - will only return one
		tags: string
	@return {object} - object returns an array of found MapHouse
*/
const findPredefinedHouse = (filter = {}) => {
	const { id, tag } = filter;
	let found = [];
	for (var i=0; i<houseList.length; i++) {
		const currSearch = houseList[i];
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
	// console.log(found);
	return found.length > 0 ? found[0] : houseList[0];
};

/*
	Make a completely new map
	@param {int} mapLength - size of the map | todo: make this more flexible
	@param {num} houseChance - chance to create a house (0-1) 
*/
const makeNewMap = (mapLength, houseChance) => {
	let newCandyMap = [];
	for (var i=0; i<mapLength; i++) {
		let newHouse = {};
		switch(i) {
			case 0:
				newHouse = findPredefinedHouse({ id: HOUSE_IDS.INTRO_HOME });
				break;
			case 1:
				newHouse = findPredefinedHouse({ id: HOUSE_IDS.KNOCK_TUTORIAL_HOUSE });
				break;
			default:
				newHouse = createGenericHouse(TAGS.GENERIC);
				break;
		}
		newHouse.x = (SIZES.HOUSE + SIZES.HOUSE_DISTANCE) * i;
        newHouse.y = 20;
		newCandyMap.push(newHouse);
	}
	return newCandyMap;
}

/*
	Creates a random House 
	@param {string} tagType - a tag type that the story should be created with
	@return {object} - returns a unique house with type
*/
const createGenericHouse = (tagType) => {
	const node = StoryNodes.getNode({ tag: tagType }, true);
	const houseData = makeNewHouse({
        tags: [tagType],
        storyNode: node,
	});

    return houseData;
}

export {
	findPredefinedHouse,
	makeNewMap,
	createGenericHouse,
}
