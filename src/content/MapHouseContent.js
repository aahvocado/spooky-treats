import { TAGS } from './Constants';
import { STORY_IDS } from './StoryNodesContent';

const defaultMapHouse = {
	id: -1, // unique id of this house
	tags: [], // tags this house might be related to
	nearbyTags: [], // type of StoryNodes that might be nearby
	storyNodeId: '', // StoryNode objcts that will show up when clicked
	x: 100,
	y: 50,
	visited: false,
};
const HOUSE_IDS = {
	INTRO_HOME: 'intro-home-house-id',
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

/*
	All MapHouse
*/
const houseList = [
	makeNewHouse({
		id: HOUSE_IDS.INTRO_HOME,
		tags: [TAGS.NARRATIVE],
		storyNodeId: STORY_IDS.BEGINNING_NARRATIVE_1,
	}),
];


export {
	defaultMapHouse,
	HOUSE_IDS,
	makeNewHouse,
	houseList,
};