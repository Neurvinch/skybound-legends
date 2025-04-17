import Phaser, { Physics } from 'phaser';

import MainScene from "./MainScene";


const config = {
    type : Phaser.AUTO,
    width : 800,
    height : 600,
    parent : 'game-container',
    Physics : {
        default : 'arcade',
        arcade : {
            debug : false
        }
    },
    scene : [MainScene],
};

export default config ;