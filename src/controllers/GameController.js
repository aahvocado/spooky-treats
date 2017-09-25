import Utility from './Utility';
import { makeNewMap } from './MapMaker';

var currSeed;
// var playerData;
var mapData;

export default class GameController {
    /*
        Sets up a new game
    */
    static initNewGame = (seed) => {
        currSeed = seed || Utility.makeNewSeed();
        Utility.setSeed(currSeed);

        // playerData = {};
        mapData = makeNewMap(5, 0.5);
    };

    /*
        Gets this game's seed
    */
    static getSeed = () => (this.currSeed);
}

GameController.initNewGame();