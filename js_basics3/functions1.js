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

console.log(loginUserMessage(""))