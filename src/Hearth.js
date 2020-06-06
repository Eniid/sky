import Vector from "./Vector";


export default class Hearth {

    constructor(animation){
        // Récupération de se qui bient de l'app.js
        this.animation = animation; 
        this.canvas = this.animation.canvasElt; 
        this.ctx = this.animation.ctx; 
        this.sun = this.animation.sun; 

        // Propoiétées de Sun
        this.color = "lightblue"; 
        const x = this.sun.location.y + 270; 
        const y = this.sun.location.y;  
        this.location = new Vector(x, y); 
        this.radius = 20; 

        this.speed = 5; 
        this.elips = 1.5; 
        this.angle = 90; 


    }

    draw(){
        // Dessin de sun
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color; 
        this.ctx.arc(this.location.x, this.location.y, this.radius, 0, Math.PI*2)
        this.ctx.fill();        
    }

    update() {
        const x = this.speed * Math.cos(this.angle * (Math.PI/180))
        const y = this.speed * Math.sin(this.angle * (Math.PI/180))
        const newCoo = new Vector(x, y)
        this.location.add(newCoo)

        this.angle = this.angle + this.elips; 
        

        // Modification de sun sur la sutée         
        this.draw(); 
    }


}