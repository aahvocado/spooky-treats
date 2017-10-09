import Utility from '../../controllers/Utility';
import { TAGS } from '../Constants';
// import { ITEM_IDS } from './CandyItemContent';
import { SKILL_IDS } from '../SkillsContent';

const STORY_IDS = {
	// narrative
	BEGINNING_NARRATIVE_1: 'beginning-narrative-1-story-id',
	BEGINNING_NARRATIVE_2: 'beginning-narrative-2-story-id',
	BEGINNING_NARRATIVE_3: 'beginning-narrative-3-story-id',
	BEGINNING_NARRATIVE_4: 'beginning-narrative-4-story-id',
};

const nodesList = [
	// key narrative nodes
	// --- intro content
	Utility.makeNewNode({
		id: STORY_IDS.BEGINNING_NARRATIVE_1,
		tags: [TAGS.NARRATIVE], 
		displayText: '"Still here, kiddo? Aren\'t you a big fan of Halloween?\nIt\'s already evening and there\'s candy to be gotten. So out and spook and scam and trick to get all the candy you can stomach!"',
		actionSet: [
			{ text: 'Next', targetId: STORY_IDS.BEGINNING_NARRATIVE_2, giveSkillId: SKILL_IDS.TRICKER_TREATER },
		],
	}),
	Utility.makeNewNode({
		id: STORY_IDS.BEGINNING_NARRATIVE_2,
		displayText: '"Watch out for other Tricker Treaters, though."\nSomething something...',
		actionSet: [
			{ text: 'Next', targetId: STORY_IDS.BEGINNING_NARRATIVE_3 },
		],
	}),
	Utility.makeNewNode({
		id: STORY_IDS.BEGINNING_NARRATIVE_3,
		displayText: '"Anyway, let me see what costumes I might have... What do you think of these?"',
		actionSet: [
			{ text: 'That Robot Helmet is cool!', targetId: STORY_IDS.BEGINNING_NARRATIVE_4, giveSkillId: SKILL_IDS.ROBOTIC },
			{ text: 'Those cat ears are the cutest!', targetId: STORY_IDS.BEGINNING_NARRATIVE_4, giveSkillId: SKILL_IDS.RIDICULOUSLY_CUTE },
			{ text: 'I want to be a spooky ghost!', targetId: STORY_IDS.BEGINNING_NARRATIVE_4, giveSkillId: SKILL_IDS.SHEET_WITH_HOLES },
		],
	}),
	Utility.makeNewNode({
		id: STORY_IDS.BEGINNING_NARRATIVE_4,
		displayText: '"You are one weird kid."',
	}),
];

export {
	STORY_IDS as TUTORIAL_STORY_IDS,
	nodesList as TUTORIAL_NODES_LIST,
};