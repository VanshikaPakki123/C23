class Ground
{
    constructor()
    {
         var option1 = 
         {
            isStatic : true
         }

        


        this.ground = Bodies.rectangle(200,380,400,50, option1);
        World.add(world, this.ground);

    }

    display()
    {
        fill("yellow")
        rectMode(CENTER);
        rect(this.ground.position.x, this.ground.position.y, 400,50);
    
    }


}