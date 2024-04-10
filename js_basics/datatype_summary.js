// primitive data types

// 7 types: String, Number, BigInt, Boolean, null, undefined, Symbol

// Reference (non-primitive): Array, Objects, Function

//Js is a dynamically type language as it assigns the type of variables during runtime

const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null
const userMail = undefined

const id = Symbol('abc')
const anotherId = Symbol('abc')

console.log(id === anotherId)

const bigNumber = 2345463563452546n

// Array

const heros = ["thor", "loki", "hulk"];

//Object
const myobj = {
    name: "mohit",
    age: 20,
    height: 5.9,
}

//Function

const myFunction = function(){
    console.log("Hello World!")
}

console.log(typeof myObj)

//All the typeof of non-primitive types is 'object funciton' only.  