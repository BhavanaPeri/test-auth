class Signup{
    constructor(){
    this.title = createElement("h2");
    this.id = createInput("Mail ID");
    this.username = createInput("username");
    this.password = createInput("password");
    this.signUp = createButton("Sign up");
    }
    hide(){
        this.title.hide();
        this.id.hide();
        this.username.hide();
        this.password.hide();
        this.signUp.hide();
    }

    display(){
        console.log("before title");
        this.title.style('color','black');
        this.title.html("Sign Up");
        console.log("in signup display");
        this.title.position(200,200);
        this.id.position((windowWidth/2)-50,(windowHeight/4 )+ 50);
        this.username.position((windowWidth/2)-50,(windowHeight/4) + 80);
        this.password.position((windowWidth/2)-50,(windowHeight/4) + 110);
        this.signUp.position((windowWidth/2)-50,(windowHeight/4 )+ 140);
        this.signUp.mousePressed(()=>{
            this.title.hide();
            this.id.hide();
            this.username.hide();
            this.password.hide();
            this.signUp.hide();
            user.name = this.username.value();
            user.mail = this.id.value();
            user.pwd = this.password.value();
            userCount+=1;
            user.index = userCount;
            user.update();
            user.updateCount(userCount);
           // user.check();
            var log = new Login();
            
        });
    }
}