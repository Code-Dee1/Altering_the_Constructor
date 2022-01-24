var box1,box2,box3

function setup() 
{
  createCanvas(400, 400);
  box1=new Box(3,5,7,9,1);
  box2=new Box(20,25,45,20,5)
  box3=new Box(40,35,26,26,3)
}

function draw() 
{
  background(220);
  box1.show()
  box2.show()
  box3.show()

  box1.move()
  box2.move()
  box3.move()
}

