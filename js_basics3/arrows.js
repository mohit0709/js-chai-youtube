const user = {
    username: "hitesh",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to the website`) // this is used to use the content of the current context like 'user' object in the above example
        // console.log(this) //this will print the whole context(object in this case)
    }
}

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()

// console.log(this) // this will print the empty object as there is no object in the global scope

// function chai(){
//     let username = "hitesh"
//     console.log(this.username) // output => undefined as we cannot access the content using this in functions
// }


// another way to declare functions
// const user = function(){
//     let username = "hitesh"
//     console.log(this.username)
// }

// one more way to declare function is using arrow function
const chai = () => {
    let username = "hitesh"
    // console.log(this.username) // does not work
    console.log(this) // also does not work
}
// chai()

//using arrow function

// const sum = (num1, num2) => { // explicit return i.e with curly braces {}
//     return num1 + num2
// }

//implicit return way of writing
// const sum = (num1, num2) => num1 + num2 // no need of {} & return statement

// const sum = (num1, num2) => (num1 + num2) // we can take them in parenthesis which do not require return statement & {} these require return statement

//function returning objects 
const sum = (num1 , num2) => ({username: "hitesh"})

console.log(sum(3, 4))