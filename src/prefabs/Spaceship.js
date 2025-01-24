// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue, direction = true) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene
        this.points = pointValue;   // store pointValue
        this.moveSpeed = game.settings.spaceshipSpeed;         // pixels per frame
        this.direction = direction;
        if (!direction) {
            this.flipX = true;
            this.x = x - game.config.width;
        }


    }

    update() {
        if (this.direction) {
            // move spaceship left
            this.x -= this.moveSpeed;
            // wrap around from left edge to right edge
            if (this.x <= 0 - this.width) {
                this.x = game.config.width;
            }
        }

        else {
            this.x += this.moveSpeed;
            if (this.x >= game.config.width) {
                this.x = -10;
            }
        }


        // if (this.x >= this.width) {
        //     this.reset();
        // }
    }

    // position reset
    reset() {
        this.x = game.config.width;
    }
}