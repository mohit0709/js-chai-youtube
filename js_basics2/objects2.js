// const tinderUser = new Object() (singleton)

const tinderUser = {} // object literals or non-singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "mohit",
            lastName: "aglawe"
        }
    },
}

console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2} //this method has the same problem as the arrays ones
// console.log(obj3)

// const obj3 = Object.assign({}, obj1, obj2, obj4) // we will not use this 

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)

const user = [
    {
        id: 1,
        email: "some@gmail.com"
    },

    {
        id: 1,
        email: "some@gmail.com"
    },

    {
        id: 1,
        email: "some@gmail.com"
    }
]

// console.log(user[1].email) //we can use the objects inside the arrays

// both these fn keys & values give the same in the form of array which is important in database later part
// console.log(Objects.keys(tinderUser))
// console.log(Objects.values(tinderUser))
// console.log(Objects.entries(tinderUser)) // this one give the output in the form of key value pair

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) //this one tells whether the given porp is in the object or not

// ***************************** object destructur & json api ******************************

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInsturctor: "hitesh"
}

const {courseInsturctor: instructor} = course //with this we can directyly print the content of the object
console.log(instructor)

// courseInstructor: instructor => like this we can change the key name also in the above method

