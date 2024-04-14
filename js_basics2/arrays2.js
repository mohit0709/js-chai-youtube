const marvel_heros = ["thor", "hulk", "spiderman"]
const dc_heros = ["superman", "batman", "flash"]

// marvel_heros.push(dc_heros) //this push() function will push the 2 array to 1 one but will push as whole array.
// console.log(marvel_heros)

//another way of merging the arrays

const all_heros = marvel_heros.concat(dc_heros) //this method is more suitable
// console.log(all_heros) 

//another way of doing this

const all_new_heros = [... marvel_heros, ... dc_heros] //the dots are known as spread operators which spread the values
// console.log(all_new_heros)

//another situation when thre is array inside array

const another_array = [1, 2, 3, 4, [6, 7, 8], 7, 8, [1, 2, [2, 5]]]
// console.log(another_array.flat(Infinity))

//few things about array

console.log(Array.isArray("hitesh")) // this returns true of false based on whethter it is array or not
console.log(Array.from("mohit")) // it converts the string into array
console.log(Array.from({name: "mohit"})) //it converts the given object into array but the what to convert must given like key or value

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3)) // this will convert the given number of elements inot array

