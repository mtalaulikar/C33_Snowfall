class Snow {
    constructor(x,y,width){
        var options = {
            frictionAir : 0.2,
            density : 0.3
            
        }

        this.body = Bodies.circle(x,y,width,options);
        this.image = loadImage("snow4.webp");
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        console.log("creating snow");
     }

     display(){
         var pos = this.body.position;
         var angle = this.body.angle;

         push();
         translate(pos.x, pos.y);
         rotate(angle);
         image(this.image, 0, 0, this.width, this.width);
         pop();
     }
}