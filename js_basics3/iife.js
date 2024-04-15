// Immediately Invoked Function Expression (IIFE)

//normal way:
// function chai(){
//     console.log("DB Connected")
// }
// chai() 

//immediately invoked

(function chai(){
    console.log("DB Connected")
})();

// above is the syntax
//() () first parenthesis is function defination & last one is execution just like normal function

// always put semicoln after each iife

// iife with arrow function

((name) => {
    console.log(`DB Connected II ${name}`)
})('hitesh')    //execution parenthesis contains argument 

