import sum from './basic';

import Game, { 
    GameSavingData, 
    readGameSaving as loadGame,
    writeGameSaving as saveGame
} from './game';

console.log('worked');

console.log(sum([1, 2]));

const game = new Game();
game.start();