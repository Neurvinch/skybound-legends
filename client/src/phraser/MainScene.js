import socket from "../socket";

export default class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    preload() {
        this.load.image('player' , '/player.png');
    }

    create ( ) {
        this.player = this.physics.add.sprite(400, 300 , "player");
        this.cursors = this.input.keyboard.createCursorKeys();

        socket.on('playerMovement' , (data) => {
            this.player.x = data.x;
            this.player.y = data.y;

        })

        
    }
    update () {
        const speed = 200;
        this.player.setVelocity(0);

        if(this.cursors.left.isDown) {
            this.player.setVelocityX(-speed);
        }

        if(this.cursors.right.isDown) {
            this.player.setVelocityX(speed);
        }
        if(this.cursors.up.isDown) {
            this.player.setVelocityY(-speed);

            }

        if(this.cursors.down.isDown) {
            this.player.setVelocityY(speed);
        }
        

        socket.emit('playerMovement' , {x: this.player.x , y : this.player.y})
    }
}