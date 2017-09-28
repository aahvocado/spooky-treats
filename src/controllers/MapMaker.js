import StoryNodes from './StoryNodes';
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
	const houseData = Object.assign(getGenericHouseObject(idx), {
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
	existingMaps.push(
		Object.assign(getGenericHouseObject(0), {
			storyNodes: [StoryNodes.getNode({ id: 1 })],
		}));
	return existingMaps;
}

/*
	Creates an generic house Object, this is what it should look like
	@param {array} existingMaps - tell me what maps we already have
	@return {object} - returns a House object
*/
const getGenericHouseObject = (id) => {
	return {
		id: id,
		x: 100, // probably want to recalculate
		y: 50 + Math.random() * 50,
		storyNodes: [],
		actionSet: [],
	};
}

export {
	makeNewMap,
	createHouse,
	addPredefinedMaps,
	getGenericHouseObject,
}
