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
		for (var i=0; i<skillsList.length; i++) {
			const currSearch = skillsList[i];
			if (id !== undefined) {
				// match id
				if(currSearch.id === id) {
					found.push(currSearch);
				}
			}
		}
		return found.length > 0 ? found[0] : skillsList[0];
	};

	/*
		get all skills
	*/
	static getAllSkills = () => (skillsList);
};