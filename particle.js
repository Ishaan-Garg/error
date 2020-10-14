class Particle{
    constructor(x,y,r){
    
    var options={
    isStatic:true    
    }   
    
    this.body=Bodies.circle(x,y,this.r)
    this.color=color(random(0,255),random(0,255),random(0,255))
    this.r=r

    }

display(){
 var pos=this.body.position
 circle(pos.x,pos.y,this.r)

}    
}