import { TAGS } from './Constants';

const ITEM_IDS = {
	W_PIECE: 'w-n-w-piece-item-id',
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
		id: ITEM_IDS.W_PIECE,
		tags: [TAGS.NARRATIVE],
		name: 'W&W Chocolate Button',
		description: 'Wumbo.',
	},
];

export {
	ITEM_IDS,
	candyList,
};