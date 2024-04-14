//array

/*
=> array in js can contain multiple data types
=>array is non primitive so stores data in heap type & give reference to memory locations
=>only way to access the elments is to type the index no in the sq brackets 
*/

// const myarr = [1, 2, 3, 4]
// console.log(myarr[2])

// //another way to write array
// const myHeros = ["thor", "hulk"]
// console.log(myHeros[0])

//another way
const arr1 = new Array(1, 2, 3, 4, 5)
// console.log(arr1[2])

//array methods

// arr1.push(5) //added the element at the last
// console.log(arr1)

// arr1.pop()
// console.log(arr1) //it deletes the last element

// arr1.unshift(9) // this added 9 to the start of the array
// arr1.shift() // it removes the added element above
// console.log(arr1)

// console.log(arr1.includes(9)) // this function returns boolean 
// console.log(arr1.indexOf(3)) // this will give the index of the given element

// const newArr = arr1.join() // it joins arrays and convert their type into string

// console.log( typeof newArr)

//slice & splice difference

console.log("A", arr1)

const myn1 = arr1.slice(1, 3)
console.log(myn1)

console.log("B", arr1)
const myn2 = arr1.splice(1,3)
console.log(myn2)
console.log(arr1)

// the main difference between slice & splice is the original array get changed in splice function also the last element is not excluded

