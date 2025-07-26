const user={
    username:"anushka",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
   
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this) //no reference

// function chai(){
//     let username="anushka"
//     // console.log(this)
//     // console.log(this.username)//wont work this only works with objects // returns undefined 
// }
// chai()

// const chai = function(){
//     let username="anushka"
//     // console.log(this)
//     // console.log(this.username) //same for this 
// }

// chai()

//arrow function 
// function keyword hta kr () k baad arrow lgana h 

const tea = () =>{
    let username="anushka"
    console.log(this.username);
    console.log(this)
    
}
// tea()

// basic syntax
// ()=>{}

// syntax with function name
// const functionName = ()=>{
    // something
// }

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// res=addTwo(11,53)
// console.log(res);


// implicit return
// const addTwo=(num1,num2)=> num1+num2  //works
// const addTwo=(num1,num2)=> (num1+num2) //better
//  res=addTwo(11,53)
// console.log(res);


// const implicitWithObj = ()=> {username:"anushka"} //undefined
// thats why parenthesis is must

const implicitWithObj = ()=> ({username:"anushka"})

console.log(implicitWithObj());
