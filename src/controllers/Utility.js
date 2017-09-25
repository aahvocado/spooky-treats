import seedrandom from 'seedrandom';
import randomstring from 'randomstring';

var dev = true;
var randomNumberGenerator = () => {};

export default class Utility {
	/*
		random number generator function
	*/
	static rng = () => {
		return randomNumberGenerator();
	};

	/*
    	Generates a new Seed
	*/
	static makeNewSeed = () => {
	    return dev ? 'HELLOWORLD' : randomstring.generate({ length: 10, charset: 'alphabetic', capitalization: 'uppercase' })
	};

	/*
		Does given things with a new seed
			you gotta do this!
	*/
	static setSeed = (nextSeed) => {
		randomNumberGenerator = seedrandom(nextSeed || 'UNDEFINED_SEED');
	};

	// returns if in a constant development environment
	static isDev = () => (this.dev);
}