const Engine =Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var database,authr,canvas, users,info,infor,user,signup,login,gameState = 0;
var app,userCount;
function preload(){

}
function setup(){
    database = firebase.database();
    authr = firebase.auth();
canvas = createCanvas(windowWidth,windowHeight);

engine = Engine.create();
world = engine.world;
app = new App();
app.start();
app.gameplay();
// signin = new Signup();
// signin.display();
// user = new User();

Engine.run(engine);
}
function draw(){
    //background(255);
  // drawSprites();
}
