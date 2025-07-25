// start from jan 1 1970

let myDate=new Date();
// console.log(myDate)
// console.log(myDate.toString()) //Fri Jul 25 2025 04:41:02 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()) //Fri Jul 25 2025
// console.log(myDate.toLocaleDateString())// 7/25/2025
// console.log(myDate.toLocaleString()) //7/25/2025, 4:44:00 AM
// console.log(typeof(myDate)) //object

// specific date
// let myCreatedDate=new Date(2025,0,0)//Tue Dec 31 2024 
// let myCreatedDate=new Date(2025,0,1)//Wed Jan 01 2025
//  let myCreatedDate = new Date(2023, 0, 23, 5, 3)//1/23/2023, 5:03:00 AM
// let myCreatedDate = new Date("2023-01-14")// 1/14/2023, 12:00:00 AM
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(myDate.getDate())
// console.log(myDate.getMonth()+1 )
// console.log(myDate.getDay())

myDate.toLocaleString('default',{
    weekday: "long",
    
})


