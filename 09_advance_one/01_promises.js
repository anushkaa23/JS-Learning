// creation
const promiseOne= new Promise(function(resolve,reject){
    // do an async task
        // db calls, cryptographic , network
        setTimeout(function(){
            console.log("Async task is completed");
            resolve() // resolve connected
        },1000)
})

// resolve
// resolve and promise not connected thats why it is not showing anything
// bcz resolve is not connected
promiseOne.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2 completed");
        resolve();
    },1000)

}).then(function(){
    console.log("async2 resolved");
    
})


const promiseThree=new Promise(function(resolve,reject){
    // data passing
    setTimeout(function(){
        resolve({username:"Anushka",email:"anushka@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        // resolve or reject based on error 
        let error=true;
        if(!error){
            resolve({username:"isha",password:"123"});
        }else{
            reject('Error: Something went wrong');
        }
    },1000)
})
// how to avoid call back
const username=promiseFour.then((user)=>{
    console.log(user);
    return user.username
    // chaining
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("the Promise is either resolved or rejected")
})

// promiseFour.then().catch().finally()

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        // resolve or reject based on error 
        let error=true;
        if(!error){
            resolve({username:"javascript",password:"123"});
        }else{
            reject('Error: JS went wrong');
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response );
    }catch(error){
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUsers() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//         // it takes time so we have to use await again
//         const data=await response.json();
//         console.log(data)
//     }catch(error){
//         console.log("E: ",error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data)
    
})
.catch((e)=>{
    console.log("error: ",e);
})
.finally(()=>{
    console.log("Promise is either resolved or rejected")
})