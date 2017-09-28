/*
	All Item Content
*/
const ITEM_TAGS = {
	NARRATIVE: 'narrative-bone',
	BONES: 'bone-item'
};

const candyList = [
	{
		id: 0, // unique id of this item
		tags: [ITEM_TAGS.NARRATIVE], // tags this item might be related to
		name: 'Error',
		description: 'You got an ERROR'
	},
	{
		id: 1,
		tags: [ITEM_TAGS.BONES],
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
		tags: [ITEM_TAGS.NARRATIVE],
		name: 'Generic Chocolate Pieces',
		description: 'Gross.',
	},
];

export {
	ITEM_TAGS,
	candyList,
};