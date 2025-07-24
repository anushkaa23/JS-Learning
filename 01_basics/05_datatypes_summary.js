// primitive
    // call by val
    // 7 types
    // String , Number , Boolean , null , undefined , Symbol BigInt 

// reference(Non-primitive)
// arrays , objects , functions

// js is dynamically type 
const score=100
const scoreVal=103.3
const isLoggedIn=true
const outsideTemp=null
let userEmail;

const id =Symbol('123')
const anotherId=Symbol("123")
const bigNumber=1274242848242444n
// console.log(id===anotherId)

// arrays
const heros=['ironMan','thor','wanda']

// obj -> key val pairs me 

let myObj={
    name:"anushka",
    age : "22",
    city:"hyderabad"
}
// console.log(myObj)

// console.log(myObj["age"])


const myFunct = function(){
    console.log("hello World")
}

console.log(typeof(bigNumber))