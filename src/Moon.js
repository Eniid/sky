import Vector from "./Vector";


export default class Moon {

    constructor(animation){
        // Récupération de se qui bient de l'app.js
        this.animation = animation; 
        this.canvas = this.animation.canvasElt; 
        this.ctx = this.animation.ctx; 
        this.h = this.animation.hearth; 

        // Propoiétées de Sun
        this.color = "#fff"; 
        const x = this.h.location.x; 
        const y = this.h.location.y;  
        this.location = new Vector(x, y); 
        this.radius = 5; 

        this.speed = 60; 
        this.elips = 3.5; 
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
        this.location.x = this.h.location.x;
        this.location.y = this.h.location.y; 

        const x = this.speed * Math.cos(this.angle * (Math.PI/180))
        const y = this.speed * Math.sin(this.angle * (Math.PI/180))
        const newCoo = new Vector(x, y)
        this.location.add(newCoo)

        this.angle = this.angle + this.elips; 
        

        // Modification de sun sur la sutée         
        this.draw(); 
    }


}