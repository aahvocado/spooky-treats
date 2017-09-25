import seedrandom from 'seedrandom';
import randomstring from 'randomstring';
import MapMaker from './MapMaker';

const dev = false;

var currSeed;
var rng;
var playerData;
var mapData;

/*
    Generates a new Seed
*/
const makeNewSeed = () => {
    return dev ? 'HELLOWORLD' : randomstring.generate({ length: 10, charset: 'alphabetic', capitalization: 'uppercase' })
};

/*
    Sets up a new game
*/
const initNewGame = (seed) => {
    currSeed = seed || makeNewSeed();
    rng = seedrandom(currSeed);
    playerData = {

    };
    mapData = {};
}

/*
    returns a random number
*/
const getRng = () => rng();

initNewGame();

export {
    currSeed,
    playerData,
    mapData,
};