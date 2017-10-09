import { TAGS } from './Constants';
import { STORY_IDS } from './StoryNodesContent';
import StoryNodes from '../controllers/StoryNodes';

const defaultMapHouse = {
	id: -1, // unique id of this house
	tags: [], // tags this house might be related to
	nearbyTags: [], // type of StoryNodes that might be nearby
	storyNode: '', // StoryNode objcts that will show up when clicked
	x: -1,
	y: -1,
	visited: false,
};
const HOUSE_IDS = {
	INTRO_HOME: 'intro-home-house-id',
	KNOCK_TUTORIAL_HOUSE: 'knock-tutorial-house-id',
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
		storyNode: StoryNodes.getNode({ id: STORY_IDS.BEGINNING_NARRATIVE_1 }),
	}),
	makeNewHouse({
		id: HOUSE_IDS.KNOCK_TUTORIAL_HOUSE,
		tags: [TAGS.NARRATIVE],
		storyNode: StoryNodes.getNode({ id: STORY_IDS.KNOCK_TUTORIAL_1 }),
	}),
];


export {
	defaultMapHouse,
	HOUSE_IDS,
	makeNewHouse,
	houseList,
};