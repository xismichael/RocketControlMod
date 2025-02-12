// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add to existing, displayList, updateList
        this.isFiring = false;      // track rocket's firing status
        this.moveSpeed = 2;         // pixels per frame
        this.sfxRocket = scene.sound.add('sfx_rocket')  // add rocket sfx
        this.pointer = this.scene.input.activePointer;
    }


    update() {
        //console.log(this.pointer.x, this.pointer.y)
        // left/right movement
        //if (!this.isFiring) {
        if ((keyLEFT.isDown || this.pointer.x < this.x) && this.x >= borderUISize + this.width) {
            this.x -= this.moveSpeed;
        } else if ((keyRIGHT.isDown || this.pointer.x > this.y) && this.x <= game.config.width - borderUISize - this.width) {
            this.x += this.moveSpeed;
        }
        //}
        // fire button
        if ((Phaser.Input.Keyboard.JustDown(keyF) || this.pointer.isDown) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();
        }
        // if fired, move up
        if (this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
        }
        // reset on miss
        if (this.y <= borderUISize * 3 + borderPadding) {
            this.reset();
            if (this.scene && this.scene.onRocketMiss) {
                this.scene.onRocketMiss();
            }
        }

    }

    // reset rocket to "ground"
    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}
