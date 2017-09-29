import Utility from './Utility';

import { houseList, makeNewHouse } from '../content/MapHouseContent';


/*
	Make a completely new map
	@param {int} mapLength - size of the map | todo: make this more flexible
	@param {num} houseChance - chance to create a house (0-1) 
*/
const makeNewMap = (mapLength, houseChance) => {
	let newCandyMap = [];
	for (var i=0; i<mapLength; i++) {
		const shouldMakeHouse = Utility.chance(houseChance);
		if (shouldMakeHouse) {
			newCandyMap.push(createHouse(i));
		}
	}
	return newCandyMap;
}

/*
	Creates a random House 
	TODO: move to MapHouseContent probably
	@param {int} idx - unique id of this house... we're using an index
	@return {object} - returns a unique house with type
*/
const createHouse = (idx) => {
	const variant = Math.floor(Utility.rng() * 4);
	const houseData = makeNewHouse({
		id: idx,
        x: 100 * idx,
        y: 50 + Math.random() * 50,
	});

    switch(variant) {
		default:
			houseData.houseType = "default";
			return houseData;
	}
}

/*
	Make predefined maps
	@param {array} existingMaps - tell me what maps we already have
*/
const addPredefinedMaps = (existingMaps) => {
	// intro
	existingMaps.push(houseList[0]);
	return existingMaps;
}

export {
	makeNewMap,
	createHouse,
	addPredefinedMaps,
}
