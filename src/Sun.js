import Vector from "./Vector";


export default class Sun {

    constructor(animation){
        // Récupération de se qui bient de l'app.js
        this.animation = animation; 
        this.canvas = this.animation.canvasElt; 
        this.ctx = this.animation.ctx; 

        // Propoiétées de Sun
        this.color = "yellow"; 
        const x = this.canvas.width/2; 
        const y = this.canvas.height/2;  
        this.location = new Vector(x, y); 
        this.radius = 40; 


    }

    draw(){
        // Dessin de sun
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color; 
        this.ctx.arc(this.location.x, this.location.y, this.radius, 0, Math.PI*2)
        this.ctx.fill();        
    }

    update() {
        // Modification de sun sur la sutée         
        this.draw(); 
    }


}