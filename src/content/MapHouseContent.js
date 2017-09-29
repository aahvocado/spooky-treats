import StoryNodes from '../controllers/StoryNodes';

/*
	All Map Houses
*/
const HOUSE_TAGS = {
	NARRATIVE: 'narrative-node',
	EASY: 'easy-node',
	MEDIUM: 'medium-node',
};

const defaultMapHouse = {
	id: -1, // unique id of this house
	tags: [], // tags this house might be related to
	nearbyTags: [], // type of StoryNodes that might be nearby
	storyNodes: [], // StoryNode objcts that will show up when clicked
	x: 100,
	y: 50 + Math.random() * 50,
	visited: false,
};

/*
	copies defaultMapHouse values and adds additional values
	@param {object} additions - values you want to replace in the defaultMapHouse
	@return {object} - MapHouse data
*/
const makeNewHouse = (additions = {}) => {
	const newHouse = Object.assign({}, defaultMapHouse);
	return Object.assign(newHouse, additions);
};

const houseList = [
	makeNewHouse({
		id: 0,
		tags: [HOUSE_TAGS.NARRATIVE],
		storyNodes: [StoryNodes.getNode({ id: 1 })]
	}),
];


export {
	HOUSE_TAGS,
	defaultMapHouse,
	makeNewHouse,
	houseList,
};