import { skillsList } from '../content/SkillsContent';

/*
	SkillEffectsManager.js
		handles the skills and their effects
*/
export default class SkillEffectsManager {
	/*		
		search for a skill by search filter

		@param {object} filter - options to search against, possible options include
			id: int - will only return one
			tags: string
		@return {object} - SkillEffect object
	*/
	static getSkill = (filter = {}) => {
		const { id } = filter;
		let found = [];
		if (id) {
			const currSearch = skillsList[id];
			if(currSearch.id === id) {
				found.push(currSearch);
			}
		}
		return found.length > 0 ? found[0] : skillsList[0];
	};

	/*
		get all skills
	*/
	static getAllSkills = () => (skillsList);
};