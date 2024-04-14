// singleton => this is object created by the constructor method
// Object.create

// object literals

//symbols
const sym1 = Symbol("key1")

const JsUser = {
    name: "mohit",
    email: "mohitaglawe@gmail.com",
    [sym1]: "mykey1", // this is how we use symbol as key in objects the key is also passed in [] while printing it will tell it is symbol
    age: 20,
    isLoggedIn: false,
    location: "Chennai",
    loggedInDays: ["monday", "tuesday", "wednesday"]
}

//ways of accesing the items in objects
// console.log(JsUser.email) //in dot case the key is already taken as a string so "email" is not required to give like this

// console.log(JsUser["email"]) // in [] way the key has to mentioned as a string so we write in ["email"] this way

// console.log(JsUser[sym1]) // the key is also accessed in []

//changing the values
JsUser.email = "kenma@gmail.com"
// Object.freeze(JsUser)  // freeze allows to freeze the values of objects & can used by this syntax only
JsUser.email = "kenma44@gmail.com"
// console.log(JsUser.email)

JsUser.greetings = function(){
    console.log("Hello JS User");
}

console.log(JsUser.greetings());

JsUser.greetingsTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greetingsTwo())
