// import MapMaker from './MapMaker';
import Utility from './Utility';

var currSeed;
// var playerData;
// var mapData;

export default class GameController {
    /*
        Sets up a new game
    */
    static initNewGame = (seed) => {
        currSeed = seed || Utility.makeNewSeed();
        Utility.setSeed(currSeed);

        // playerData = {};
        // mapData = {};
    };

    /*
        Gets this game's seed
    */
    static getSeed = () => (this.currSeed);
}

GameController.initNewGame();