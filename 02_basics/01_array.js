const myArr=[0,1,2,3,4,5]
// expandable
// can have multiple datatypes
// console.log(myArr[3]);

// if we copy arrays in js it makes shallow copies
// shallow copy -> same reference point 


const myArr2=new Array("thor","ironman","captian America")

myArr.push(6)
myArr.push(7)
myArr.pop()

// myArr.unshift(3)// ek 3 ko 0th ind pr laaega or baaki ko shift kr dega , not a good practice
// myArr.shift()//same as pop but val aage se htata h 
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr=myArr.join() //Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr))


//slice,spice
console.log("A",myArr);

const myn1=myArr.slice(1,3);//range not included , original array remains unchanged
console.log(myn1)
console.log("B",myArr)

const myn2=myArr.splice(1,3); //range included and the data of myn2 is removed from original array
console.log(myn2)
console.log("C",myArr)