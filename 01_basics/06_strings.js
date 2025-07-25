const name="anushka"
const repoCount=10

// not a good practice
// console.log("my name is " + name + " and my repo count is " + repoCount)

// string interpolatoion 
// console.log(`My name is ${name} and my repo count is ${repoCount}`)

const gameName= new String('anushka') //object key val pair , key=> ind , val=val
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.toLocaleUpperCase())
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('n'));

const newString=gameName.substring(0,3)
// console.log(newString)

// slice accepts negative value too
const anotherString= gameName.slice(-7,-4)
// console.log(anotherString)

const newStrinWiteSpace="     anushka       "
console.log(newStrinWiteSpace)
// remove witespace 
// console.log(newStrinWiteSpace.trim())

let url="https://anushka.com/anushka%20raj"
url=url.replace("%20",'-')
console.log(url)

console.log(url.includes("anushka"))

console.log(url.includes("nishu"))

const gameNameTwo=new String("anushka-ar-com")
// split with -
const words=gameNameTwo.split('-')
// console.log(gameNameTwo.split('-'))
console.log(words)