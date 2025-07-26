// for of
// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]

// for (const element of arr) {
//     console.log(element); 
// }

// const greeting="Hello world!"
// for (const element of greeting) {
//     console.log(`Each chat is ${element}`);
    
// }

// maps
const map=new Map()
map.set("IN","India")
map.set("USA","United States of America")
map.set("fr","france")
map.set("IN","India")
// console.log(map)

// for (const key of map) {
//     console.log(key); //sb print kr dega  
// }

for (const [key,value] of map) {
    console.log(key , " :- ", value) //alg alg print krega
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// } //objects arent iteratable like this 

