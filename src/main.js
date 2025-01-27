// Michael Xi
// Rocket Patrol: goat addition
// 10hrs
// Mods:
// 1 point: Allow the player to control the Rocket after it's fired:
// 1 point: Randomize each spaceship's movement direction at the start of each play:
// 3 points: timer on the screen: Implemented using in game timer
// 5 points: Implement a new timing/scoring mechanism that adds 2s to the clock for successful hits and subtracts 3s for misses:
// 5 points: Implement mouse control for player movement and left mouse click to fire: 
// 5 points: Implemented an alternating two-player mode: 


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
let keyF, keyR, keyLEFT, keyRIGHT, keyM, multiplayer;