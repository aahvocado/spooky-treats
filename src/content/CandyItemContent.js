import { TAGS } from './Constants';

const ITEM_IDS = {
	BONEBREAKER: 'bonebreaker-item-id',
};
/*
	All Item Content
*/
const candyList = [
	{
		id: ITEM_IDS.BONEBREAKER, // unique id of this item
		tags: [TAGS.NARRATIVE], // tags this item might be related to
		name: 'Error',
		description: 'You got an ERROR'
	},
	{
		id: 1,
		tags: [TAGS.BONES],
		name: 'BoneBreaker',
		description: 'I have never heard of no jaw bone.',
	},
	{
		id: 2,
		tags: [],
		name: 'Bloodypop',
		description: 'Mmmmm...',
	},
	{
		id: 3,
		tags: [],
		name: 'Kittycorn',
		description: 'Mmmmm...',
	},
	{
		id: 4,
		tags: [],
		name: 'Gummyworms',
		description: 'Mmmmm...',
	},
	{
		id: 5,
		tags: [],
		name: 'Devil Bar',
		description: 'Mmmmm...',
	},
	{
		id: 6,
		tags: [TAGS.NARRATIVE],
		name: 'Generic Chocolate Pieces',
		description: 'Gross.',
	},
];

export {
	candyList,
};