import Vector from "./Vector";


export default class Sunhearth {

    constructor(animation){
        // Récupération de se qui bient de l'app.js
        this.animation = animation; 
        this.canvas = this.animation.canvasElt; 
        this.ctx = this.animation.ctx; 
        this.sun = this.animation.sun; 

        // Propoiétées de la barre
        this.color = "rgb(2, 2, 37)"; 
        const x = this.sun.location.x 
        const y = this.sun.location.y  
        this.location = new Vector(x, y); 
        this.widht = 1; 
        this.height= 200; 

        // Props du déplacement 
        this.speed = 0; 
        this.angle = 90; 




    }

    draw(){
        // Dessin de sun
        this.ctx.save(); 
        this.ctx.translate(this.location.x, this.location.y);
        this.ctx.rotate(this.angle * (Math.PI/180))
        this.ctx.beginPath()
        this.ctx.fillStyle = "#fff"; 
        this.ctx.fillRect(0, 0, this.widht, this.height);
        this.ctx.fill(); 
        console.log("coucou");
        this.ctx.restore();

    }

    update() {
        // Modification de sun sur la sutée 
        const x = this.speed * Math.cos(this.angle * (Math.PI/180))
        const y = this.speed * Math.sin(this.angle * (Math.PI/180))
        const newCoo = new Vector(x, y)
        this.location.add(newCoo)

        this.angle ++ 
        

        this.draw(); 
    }


}