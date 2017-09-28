/*
	All Story Nodes
*/
const ITEM_TAGS = {
	NARRATIVE: 'narrative-bone',
	BONES: 'bone-item'
};

const candyList = [
	{
		id: 0, // unique id of this item
		tags: [ITEM_TAGS.NARRATIVE], // tags this item might be related to
		text: 'Error',
		description: 'You got an ERROR'
	},
	{
		id: 1,
		tags: [ITEM_TAGS.BONES], // tags this item might be related to
		text: 'BoneBreaker',
		description: 'I have never heard of no jaw bone.',
	},
	{
		id: 2,
		tags: [], // tags this item might be related to
		text: 'Bloodypop',
		description: 'Mmmmm...',
	},
	{
		id: 3,
		tags: [], // tags this item might be related to
		text: 'Kittycorn',
		description: 'Mmmmm...',
	},
	{
		id: 4,
		tags: [], // tags this item might be related to
		text: 'Gummyworms',
		description: 'Mmmmm...',
	},
	{
		id: 5,
		tags: [], // tags this item might be related to
		text: 'Devil Bar',
		description: 'Mmmmm...',
	},
	{
		id: 6,
		tags: [ITEM_TAGS.NARRATIVE], // tags this item might be related to
		text: 'Generic Chocolate Pieces',
		description: 'Gross.',
	},
];

export {
	ITEM_TAGS,
	candyList,
};