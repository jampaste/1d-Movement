class oneDir extends Phaser.Scene {
    constructor(){
        super("oneDirScene");
        this.my = {sprite: {}};
    }

    preload(){
        this.load.setPath("./assets/");   
        this.load.image("man", "snakeLava.png");             
        this.load.image("bullet", "worm.png");    

    }

    create(){
        let my = this.my;
        this.AKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.DKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.SpaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        my.sprite.man = this.add.sprite(300, 600, "man");
        my.sprite.bullet = this.add.sprite(100, 500, "bullet");
        my.sprite.bullet.visible = false;
    

    }

    update(){
        let my = this.my;
        if(this.AKey.isDown){
            my.sprite.man.x -= 7;
            if(my.sprite.man.x <= 0){
                my.sprite.man.x = 0;
            }
        }
        else if(this.DKey.isDown){
            my.sprite.man.x += 7;
            if(my.sprite.man.x >= game.config.width){
                my.sprite.man.x = game.config.width;
            }
        }

        if(this.SpaceKey.isDown){
            
            my.sprite.bullet.visible = true;
            my.sprite.bullet = this.add.sprite(my.sprite.man.x, my.sprite.man.y-70, "bullet");
            /*
            my.sprite.bullet.x = my.sprite.man.x;
            my.sprite.bullet.y = my.sprite.man.y - 70;
             */

        }
        my.sprite.bullet.y -=10;

    }

}