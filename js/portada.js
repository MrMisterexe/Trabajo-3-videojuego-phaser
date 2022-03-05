import { portada } from "./portada.js";
export class portada extends Phaser.Scene{
    constructor(){
        super({key: 'portada'})       
    } 
}

preload()
{
    this.load.spritesheet('boton', 'assets/boton.png', { frameWidth: 100, frameHeight: 100 });
    //this.load.spritesheet('background', 'assets/back.png', { frameWidth: 100, frameHeight: 100 });
    this.load.image('background', 'assets/back.png')


}

create()
{
    //this.button = this.add.image(100,100,'button');
    //this.boton = this.physics.add.sprite(100, 100, 'boton');
    this.add.image(400, 300, 'background').setScrollFactor(0, 0);

    //this.button.setInteractive();
}


update()
{

}

