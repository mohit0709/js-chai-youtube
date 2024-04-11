const name = "mohit"
const age = 20

// console.log("my name is " + name + "and age is: " + age) this way writing string is now old.

// best way is given below

// console.log(`My name is ${name} and my age is ${age} years old.`)

const string1 = new String("c.ronaldo.     ")

console.log(string1.__proto__)

console.log(string1.length)

console.log(string1.toUpperCase())
console.log(string1.charAt(3))
console.log(string1.indexOf('l'))

//substring

const newString = string1.substring(0, 4)  //note: the end point 4 is not included in the substring & we cannot give -ve values
console.log(newString)

const anotherString = string1.slice(-9, 3)
console.log(anotherString)
console.log(string1.trim())    //trim() cuts the white space at the start and the end of the string


//replace() for string

const url = "https://mohitaglwe%20zenama"
console.log(url.replace('%20', '-'))        //this replaces the %20 with -

