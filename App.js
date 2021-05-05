class App{
    constructor(){}
    getState(){
        var gameStateRef  = database.ref('gameState');
         gameStateRef.on("value",function(data){
            gameState = data.val();
            console.log("in retreiving data");
         })
     }
      update(state){
         console.log("updating data gs");
         database.ref('gameState').update({
           gameState: state
         });
       }
    async start(){
        user = new User();
    if(gameState === 0){
        console.log("in async start in app.js");
        var userCountRef = await database.ref('userCount').once("value");
        if(userCountRef.exists()){
            userCount = userCountRef.val();
            user.getCount();
        }
      
      signup = new Signup();
      signup.display();
    }
}

gameplay(){
    //signup.hide();
     //  if(gameState === 2) {
       //text("You've Reached your Destination",100,100);
   // }
  

//keyPressed();
drawSprites();
}
}