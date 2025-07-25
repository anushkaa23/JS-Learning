 const score=400
//  console.log(score)
 const balance= new Number(100)
//  console.log(balance)

//  console.log(balance.toString())
//  console.log(balance.toFixed(2))//decimal k baad 2 digit

 const anotherNum=23.8966
//  console.log(anotherNum.toPrecision(2))//returns string  // 2 dig hi dega but round off krke

//   console.log(anotherNum.toPrecision(7))
  const hundreds=1000000
//   console.log(hundreds.toLocaleString())// us standard val
//   console.log(hundreds.toLocaleString('en-IN')) //converted to indian standard

//   console.log(Number.MIN_VALUE)
//   console.log(Number.MAX_VALUE)

// =========================MATH=====================================
// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.5))
// console.log(Math.ceil(4.6))
// console.log(Math.floor(4.6))
// console.log(Math.max(6,34,42,5,77))
// console.log(Math.min(6,34,42,5,77))

// console.log(Math.floor(Math.random()*6)+1) //random number between 0 and 1

// num between 10 and 20
const min=10 
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)
