import React from 'react'
import config from '../phraser/config'
import Phaser from 'phaser'
import { useEffect } from 'react';

let game;

const GameCanvas = () => {
  
     useEffect( () => {
        if(!game) {
            game = new Phaser.Game(config);
        }

        return () => {
            if(game) {
                game.destroy(true);
                game = null;
            }
        }
     },[])
    

     return <div id="game-container" style={{ width: '100%', height: '100%' }} />;
    };

export default GameCanvas