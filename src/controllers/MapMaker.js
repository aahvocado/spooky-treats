import Utility from './Utility';

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
	@param {int} what number'th house this is
*/
const createHouse = (idx) => {
	const variant = Math.floor(Utility.rng() * 4);
	const houseData = {
        idx: idx,
        x: 100 * idx,
        y: 50 + Math.random() * 50,
    };
    switch(variant) {
		default:
			houseData.houseType = "default";
			return houseData;
	}
}

export {
	makeNewMap,
	createHouse,
}
