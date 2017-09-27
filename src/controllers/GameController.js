import Utility from './Utility';
import { makeNewMap } from './MapMaker';
import { exampleNode } from '../pages/StoryNodes';

var currSeed;
// var playerData;
var mapData;

// TODO: global constant variables

export default class GameController {
    static getStoryNode = () => {
        return exampleNode;
    };
    /*
        Sets up a new game
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