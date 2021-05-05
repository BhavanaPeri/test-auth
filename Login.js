class Login{
    constructor(){
    this.title = createElement('h2');
    this.username = createInput("Username");
    this.password = createInput("password");
    this.login = createButton("Sign In")
    }
    hide(){
        this.title.hide();
        this.username.hide();
        this.password.hide();
        this.login.hide();
    }
    display(){
        this.title.html("Sign In");
    this.username.position(windowWidth/2,windowHeight/3+50);
    this.password.position(windowWidth/2,windowHeight/3+80);
    this.login.position(windowWidth/2,windowHeight/3+110);
    this.title.hide();
    this.username.hide();
    this.password.hide();
    this.login.hide();
    user.name = this.username.value();
    user.pwd = this.password.value();
    user.loginCheck();
    }
}