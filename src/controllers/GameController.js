import seedrandom from 'seedrandom';
import MapMaker from './MapMaker';

// TODO: actually generate a new string as a seed
const newSeed = () => { return 'HELLOWORLD' };

var currSeed;
var rng;

const playerData = {
    playerName: "Default",
};

const mapData = {};

const initNewGame = (seed) => {
    currSeed = seed || newSeed();
    rng = seedrandom(currSeed);
}

initNewGame();

export {
    currSeed,
    playerData,
    mapData,
};