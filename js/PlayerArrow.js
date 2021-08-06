class PlayerArrow {

    constructor(x,y,width,height,angle){


        var options={
            isStatic:true,

            restitution: 0.8,
            friction: 1.0,
            density: 1.0,
        }
        this.width=width;
        this.height=height;
        this.angle=angle;
        this.body=Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);

        this.image=loadImage("assets/arrow.png");


    }
    shoot(){
        var velocity=p5.Vector.fromAngle(playerarcher.angle);
        velocity.mult(20);
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
      }
    

    display(){

        var pos=this.body.position;
        var angle=this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();

    }
}