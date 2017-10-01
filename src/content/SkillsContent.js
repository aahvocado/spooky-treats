const defaultSkillObject = {
	id: -1, // unique id of this skill
	name: '',
	description: '', // helper text
	actionSet: [], // name of action it calls
};
const SKILL_IDS = {
	TRICKER_TREATER: 'tricker-treater-skill-id',
	ROBOTIC: 'robotic-skill-id',
	RIDICULOUSLY_CUTE: 'ridiculously-cute-skill-id',
	SHEET_WITH_HOLES: 'sheet-with-holes-skill-id',
};
/*
	Effects
*/
const SKILL_EFFECTS = {
	TRICKER_TREATER: 'tricker-treater-effect',
	ROBOTIC: 'robotic-effect',
};

/*
	copies defaultSkillObject values and adds additional values
	@param {object} additions - values you want to replace in the defaultSkillObject
	@return {object} - MapHouse data
*/
const makeNewSkill = (additions = {}) => {
	const newHouse = Object.assign({}, defaultSkillObject);
	return Object.assign(newHouse, additions);
};
/*
	All Skills
*/
const skillsList = [
	makeNewSkill({
		id: SKILL_IDS.TRICKER_TREATER,
		name: 'Tricker Treater',
		description: 'You are imbued with the essence of a yearly tradition of scamming other people out of their candy.',
		actionSet: [SKILL_EFFECTS.TRICKER_TREATER],
	}),
	makeNewSkill({
		id: SKILL_IDS.ROBOTIC,
		name: 'Robotic',
		description: 'TODO',
		actionSet: [SKILL_EFFECTS.ROBOTIC],
	}),
];


export {
	defaultSkillObject,
	makeNewSkill,
	skillsList,
};