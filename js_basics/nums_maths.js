// const num = 400     //here the the type is automatically assigned 
// console.log(num)

const anotherNum = new Number(100)      //here the type is number only
console.log(anotherNum)

//this converts the number to string
console.log(anotherNum.toString())
console.log(typeof(anotherNum.toString()))

//getting a precion value 
console.log(anotherNum.toFixed(3)) //output: => 100.000

const num2 = 123.8678
console.log(num2.toPrecision(5))    //toPrecison() takes prcison for no of digits given for 5 digits the output will be 123.87

// it converts the numbers into numbers with commas
const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN')) //output => 1,00,00,000

// ************************* maths ****************************
console.log(Math)
console.log(Math.abs(-4)) //it gives positive values

console.log(Math.round(4.5))
console.log(Math.ceil(4.5))
console.log(Math.floor(4.5))

//random fucntion

console.log(Math.random()*10) //it gives random valaues between 0 & 1


// generic approach
const min = 10
const max = 20
console.log(Math.floor(Math.random()* (max - min +1) + min))