import Utility from './Utility';
import { makeNewMap } from './MapMaker';
import StoryNodes from './StoryNodes';
import CandyItemManager from './CandyItemManager';
import SkillEffectsManager from './SkillEffectsManager';

import { TAGS } from '../content/Constants';

var currSeed;
var mapData;
var inventory;
var skills;

export default class GameController {
    /*      
        searches for a house in the current map

        @param {object} filter - options to search against, possible options include
            id: string
            tags: string
        @return {object} - CandyItem object returns an array of found nodes
    */
    static findHouse = (filter = {}) => {
        const { id, tag } = filter;
        let found = [];
        for (var i=0; i<mapData.length; i++) {
            const currSearch = mapData[i];
            if (id !== undefined) {
                // match id
                if(currSearch.id === id) {
                    found.push(currSearch);
                }
            } else if (tag !== undefined) {
                // match tags
                if(currSearch.tags && currSearch.tags.includes(tag)) {
                    found.push(currSearch);
                }
            }
        }
        return found ? found[0] : undefined;
    };

     /*
        Gets a node by Id
        @param {int} id - id of storynode
        @return {object} - StoryNode
    */
    static getNodeById = (id) => {
        return StoryNodes.getNode({ id: id });
    };

    /*
        Gets a random node
        @return {object} - StoryNode
    */
    static getRandomNode = () => {
        return StoryNodes.getNode({ tag: TAGS.GENERIC }, true);
    };

    /*
        Give the player an item
        @param {string} id - id of item to receive
        @return {object} - StoryNode
    */
    static receiveItem = (id) => {
        const newItem = CandyItemManager.getItem({ id: id });
        inventory.push(newItem);
        return newItem;
    };

    /*
        Give the player an item
        @param {string} id - id of skill to receive
        @return {object} - Skill
    */
    static receiveSkill = (id) => {
        const newSkill = SkillEffectsManager.getSkill({ id: id });
        skills.push(newSkill);
        return newSkill;
    };

    /*
        Sets up a new game
        @param {string} seed - 10 digit seed string
    */
    static initNewGame = (seed) => {
        // init with seed/new seed
        currSeed = seed || Utility.makeNewSeed();
        Utility.setSeed(currSeed);

        // new empty content containers
        inventory = [];
        skills = [];

        // new random map data
        mapData = makeNewMap(5, 1);
    };

    /*
        Gets this game's map data
    */
    static getMapData = () => (mapData);

    /*
        Gets this player's inventory
    */
    static getInventory = () => (inventory);

    /*
        Gets this player's skills
    */
    static getSkills = () => (skills);

    /*
        Gets this game's seed
    */
    static getSeed = () => (currSeed);
}

export {
    mapData,
}