import Utility from './Utility';

/*
	Calculate if a house should be placed on a location
*/
const calcHouseChance = (chance = 0) => {
	return Utility.rng() < chance;
}

/*
	Make a completely new map
	@param {int} mapLength - size of the map | todo: make this more flexible
	@param {num} houseChance - chance to create a house (0-1) 
*/
const makeNewMap = (mapLength, houseChance) => {
	let newCandyMap = [];
	for (var i=0; i<mapLength; i++) {
		const shouldMakeHouse = calcHouseChance(houseChance);
		if (shouldMakeHouse) {
			newCandyMap.push(true);
		} else {
			newCandyMap.push(false);
		}
	}
	return newCandyMap;
}

export {
	calcHouseChance,
	makeNewMap,
}
