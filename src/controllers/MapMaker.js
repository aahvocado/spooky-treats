// import Utility from './Utility';

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
				newHouse = findPredefinedHouse(HOUSE_IDS.INTRO_HOME);
				break;
			default:
				newHouse = createGenericHouse(i);
				break;
		}
		newHouse.x = (SIZES.HOUSE + SIZES.HOUSE_DISTANCE) * i;
        newHouse.y = 50;
		newCandyMap.push(newHouse);
	}
	return newCandyMap;
}

/*
	Creates a random House 
	TODO: move to MapHouseContent probably
	@return {object} - returns a unique house with type
*/
const createGenericHouse = () => {
	// const houseVariant = Utility.chance(houseChance);

	const houseData = makeNewHouse({
        tags: [TAGS.GENERIC],
	});

    return houseData;
}

export {
	findPredefinedHouse,
	makeNewMap,
	createGenericHouse,
}
