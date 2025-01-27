class Menu extends Phaser.Scene {
  constructor() {
    super("menuScene");
  }

  preload() {
    // load audio
    this.load.audio('sfx_select', './assets/blip_select12.wav');
    this.load.audio('sfx_explosion', './assets/explosion38.wav');
    this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
  }

  create() {
    // menu text configuration
    let menuConfig = {
      fontFamily: 'Courier',
      fontSize: '28px',
      backgroundColor: '#F3B141',
      color: '#843605',
      align: 'right',
      padding: {
        top: 5,
        bottom: 5,
      },
      fixedWidth: 0
    }

    // show menu text
    this.add.text(game.config.width / 2, game.config.height / 2 - borderUISize - borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
    this.add.text(game.config.width / 2, game.config.height / 2, 'Use ←→ arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
    menuConfig.backgroundColor = '#00FF00';
    menuConfig.color = '#000';
    this.add.text(game.config.width / 2, game.config.height / 2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);
    menuConfig.backgroundColor = '#F0251B';
    this.multiplayerText = this.add.text(game.config.width / 2, game.config.height / 2 + 2 * (borderUISize + borderPadding), 'Two Player Mode (M)', menuConfig).setOrigin(0.5);
    multiplayer = false;
    // define keys
    keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);

  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(keyM)) {
      if (multiplayer) {
        this.multiplayerText.setStyle({
          backgroundColor: "#F0251B"
        });
        this.multiplayerText.text = 'Two Player Mode DISABLED (M)';
        multiplayer = false;
      }
      else {
        this.multiplayerText.setStyle({
          backgroundColor: "#404DDB"
        });
        this.multiplayerText.text = 'Two Player Mode ENABLED (M)';
        multiplayer = true;
      }
    }

    if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
      // Novice mode
      game.settings = {
        spaceshipSpeed: 3,
        gameTimer: 60000
      }
      this.sound.play('sfx_select');
      this.scene.start("playScene");
    }
    if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
      // Expert mode
      game.settings = {
        spaceshipSpeed: 4,
        gameTimer: 45000
      }
      this.sound.play('sfx_select');
      this.scene.start("playScene");
    }
  }
}