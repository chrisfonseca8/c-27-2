class Ball {
    constructor(x,y,raidus){
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x,y,raidus);
        this.raidus = raidus;
        World.add(world,this.body);
    }
    display(){
        push ();
        fill("purple");
        ellipse(this.body.position.x,this.body.position.y,this.raidus*2);
        pop ();
    }
}