import Utility from './Utility';
import { makeNewMap } from './MapMaker';
import StoryNodes from './StoryNodes';
import CandyItemManager from './CandyItemManager';

var currSeed;
// var playerData;
var mapData;

// TODO: global constant variables

export default class GameController {
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
        return StoryNodes.getNode({ id: 1 });
    };

    /*
        Give the player an item
        @return {object} - StoryNode
    */
    static receiveItem = (id) => {
        return CandyItemManager.getItem({ id: 1});
    };

    /*
        Sets up a new game
        @param {string} seed - 10 digit seed string
    */
    static initNewGame = (seed) => {
        currSeed = seed || Utility.makeNewSeed();
        Utility.setSeed(currSeed);

        // playerData = {};
        mapData = makeNewMap(5, 0.3);
    };

    /*
        Gets this game's map data
    */
    static getMapData = () => (mapData);

    /*
        Gets this game's seed
    */
    static getSeed = () => (currSeed);
}

export {
    mapData,
}