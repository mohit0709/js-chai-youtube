function addTwoNumbers(number1, number2){
    console.log(number1 + number2)
}

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}
const result = addTwoNumbers(3, 4)
// console.log(result)

// function loginUserMessage(username){
//     return `${username} just logged in.`
// }

function loginUserMessage(username = "sam"){ // sam is the default value if no argument is given
    if(!username){ // the syntax (!username) means, in js empty string, var is considered as false thus the !username means true
        console.log("Please enter the valid username!")
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessage(""))

// *********************** function with objects & array *****************************

//there can be scenario where the parameter can be increasing and the function has to return all for ex consider the case of shopping cart which add the price of items in cart.

//Here we used "..." the rest operator which atomatically holds the upcoming values into array. It is similar to spread operator but depends on the place of usage.

// function calculateCartPrice(...num1){
//     return num1
// }

function calculateCartPrice(val1, val2, ...num1){ //output => 2000 3400 as val1 & val2 hold 200 & 400 respctively.
    return num1
}

console.log(calculateCartPrice(200, 400, 2000, 3400))

// passing an object as the parameter to the fucntion

const user = {
    name: "hitesh",
    price: "999",
}

function handleObject(anyobject){ //note: anyobject can be any object
    console.log(`Username is ${anyobject.name} and the price is ${anyobject.price}.`)
}

// handleObject(user) //conpulsary to give the wanted object while calling the function

// we can directly pass the object as argument

handleObject({
    name: "hitesh",
    price: "999"
})

// passing array as the paramemter

const newArray = [20, 30 , 40 , 50]
function returnSecondValue(anyArray){
    return anyArray
}

// console.log(returnSecondValue(newArray))

//directly give the array as argument
console.log(returnSecondValue([20, 30 , 40 , 50]))