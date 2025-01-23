// Michael Xi
// Rocket Patrol: goat addition
// the approximate time it took to complete the project (in hours)
// Mods:
// timer on the screen: 3 points Implemented using in game timer
// Implement a new timing/scoring mechanism that adds 2s to the clock for successful hits and subtracts 3s for misses: 5 points


let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;