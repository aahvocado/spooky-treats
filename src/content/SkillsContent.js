/*
	All Skills
*/
const defaultSkillObject = {
	id: -1, // unique id of this skill
	name: '',
	description: '', // helper text
	actionSet: [], // name of action it calls
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

const skillsList = [
	makeNewSkill({
		id: 0,
		name: 'Tricker Treater',
		description: 'You are imbued with the essence of a yearly tradition of scamming other people out of their candy.',
		actionSet: [SKILL_EFFECTS.TRICKER_TREATER],
	}),
	makeNewSkill({
		id: 1,
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