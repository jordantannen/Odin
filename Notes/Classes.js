// Creates a function named User
// function code is taken from constructor, assumed empty
// if there is no constructor
class User {

    //constructors are literally name constructor
    constructor(name){
        this.name = name
    }

    // this is stored in the User.prototype
    sayHi(){
        console.log("Hello " + this.name)
    }

    // must have both a getter and setter
    // _name is used to avoid name collision with the actual name method
    get name(){
        return this._name
    }

    set name(name){
        this._name = name
    }
}

let user = new User("Jordan")
user.sayHi()
console.log(User)

class Admin extends User{
    constructor(name, password){
        // super calls need to be called before using this
        super(name)
        this.password = password
    }

    get password(){
        return this._password
    }

    set password(word){
        this._password = word
    }
}

let admin = new Admin("Ben", "123")
console.log(admin.password)
admin.password = 5
console.log(admin.password)

/* In JavaScript, a class is a type of function
 - methods are non-enumerable
   - un-iterable
 - default to strict mode
*/

// Classes can be defined in other expressions
// These classes can also be named

let animal = class {
    sayHi(){
        console.log("Hello")
    }
}
