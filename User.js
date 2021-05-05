class User{
    constructor(){
        this.index=null;
        this.pwd=null;
        this.name=null;
        this.mail=null
    }
    getCount(){
        var userCountRef = database.ref('userCount');
        userCountRef.on("value",(data)=>{
            userCount = data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            userCount: count
        })
        }
    update(){
        var userIndex = "users/user"+this.index;
        database.ref(userIndex).set({
            username : this.name,
            password: this.pwd,
            email: this.mail
        })
    }
 
    check(){
        var userInfo = database.ref('user');
        userInfo.on("value",(data)=>{
            info = data.val();
        })
        if((this.name || this.mail) === info ){
            text("Username or mail Id has been already used by someone",windowWidth/2, windowHeight/2 + 150);
        }
        else{
            this.update();
        }
    }
    
    loginCheck(){
        var infocheck = database.ref('/');
        infocheck.on("value",(data)=>{
            infor = data.val();
        })
        if((this.name || this.pwd)!= infor){
            text("Account not found...Try Signing Up", windowWidth/2, windowHeight/2+150);
        }
    }
}