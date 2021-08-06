class PlayerArcher{

    constructor(x,y,width,height,angle){

        var options={
            isStatic:true,
        }

        this.width=width;
        this.height=height;
        this.angle=angle;
        this.body=Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
        this.image=loadImage("assets/playerArcher.png");
        
        Matter.Body.setAngle(this.body,-PI/2)
       

    }

    display(){



        var pos=this.body.position;
        var angle=this.body.angle;
        
        if(keyIsDown(RIGHT_ARROW)&&playerarcher.body.angle<-1.2){
            angle+=0.01;

            Matter.Body.setAngle(this.body,angle);
        }

        if(keyIsDown(LEFT_ARROW)&&playerarcher.body.angle>-1.8){
            angle-=0.01;

            Matter.Body.setAngle(this.body,angle);

        }
       
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        
         imageMode(CENTER);
         image(this.image,0,0,this.width,this.height);
         pop();
         
    }
}