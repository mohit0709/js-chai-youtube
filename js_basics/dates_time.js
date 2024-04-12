// dates & time

let date = new Date()
// console.log(date.toDateString()) 

// console.log(date.toISOString()) 

// console.log(date.toJSON())

// console.log(date.toLocaleDateString()) 

// console.log(date.toLocaleString())  

// console.log(date.toLocaleTimeString()) 

// console.log(date.toString())

// console.log(date.toTimeString())

// let newDate = new Date(2023, 0, 12)
// let newDate = new Date("2023-01-12")
// let newDate = new Date("01/14/2023")
// console.log(newDate.toLocaleString())

// let myTimeStamp =  Date.now()
// console.log(myTimeStamp)
// console.log(newDate.getTime()) //gives time in miliseconds

//to get specific content like date or month etc

let newDate = new Date()
console.log(newDate.getMonth()) //output => 3

newDate.toLocaleString('default', {
    weekday: "long"
})


