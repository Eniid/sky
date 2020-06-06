// AJouter les classes 
import Sun from "./Sun";
//import Sunhearth  from "./Sunhearth";
import Hearth  from "./Hearth";
import Moon  from "./Moon";


const animation = {
    canvasElt : undefined, 
    ctx : undefined, 

    init(){
        this.canvasElt = document.createElement("canvas")
        document.body.insertAdjacentElement("beforeend", this.canvasElt);
        this.canvasElt.height = 600;
        this.canvasElt.width = 800;
        this.ctx = this.canvasElt.getContext('2d'); 

        // Nouvelles classes à ajouter 
        this.sun = new Sun(this); 
        //this.sunhearth = new Sunhearth(this);
        this.hearth = new Hearth(this); 
        this.moon = new Moon(this); 

        this.animate();  
    },

    draw(){
        // Faire les updates
        this.sun.update(); 
        //this.sunhearth.update(); 
        this.hearth.update(); 
        this.moon.update(); 
    },

    animate(){
        this.ctx.clearRect(0, 0, this.canvasElt.width, this.canvasElt.height);
        this.draw()
        window.requestAnimationFrame( ()=> {
            this.animate(); 
        });
    },

}

animation.init(); 