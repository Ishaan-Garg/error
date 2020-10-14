class Plinko{
    constructor(x,y,r){
    
    options={
    isStatic:true    
    }    

    this.body=Bodies.circle(x,y,this.r)
    this.r=r

    World.add(world,this.body)

}   
display(){
  pos=this.body.position
  circle(pos.x,pos.y,this.r)  
}
}