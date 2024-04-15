// var a = 300
let a = 300  // a is now in global scope
if(true){
    let a = 20
    const b = 30
    var c = 40
}

// console.log(a)
// console.log(b)
// console.log(c) // here is the problem var doesn't care about scope thus never use var again

//************************* scope level & mini hoisting in js******************************** */

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website) // this cannot be printed as it is outside the two fucntion scope
    two()
}

one()

// same goes for if else scope

if (true){
    const username = "hitesh"
    if (username === "hitesh"){
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website) error
}
// console.log(username) error

// ************************ intersting *********************************

console.log(addone(5)) // this function will be executed without problem
function addone(num1){
    return num1 +1
}


addtwo(5) //this function cannot be accesed because it is stored in variable addition when place before the declaration of function
const additon = function addtwo(num2){  //variable can hold function objects json values etc
    return num2 + 2
}

