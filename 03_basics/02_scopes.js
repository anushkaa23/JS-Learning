// var c = 300
let a=100
if(true){
    let a =10;
    const b =20;
    // var c=30 //change the val of global scope
    // console.log("inner" , a)
}

// the value of a variable changes in the block scope too thats why we arent using var 
// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const userName="anushka"
    function two(){
        const website="youtube"
        console.log(userName);
        
    }
    // console.log(website)
    two()
}
// one()

if(true){
    const username="anushka"
    if(username==="anushka"){
        const website=" youtube"
        // console.log(username+website);
        
    }
    // console.log(website)
}
// console.log(username)

//---------------------------------------

console.log(addone(5))
function addone(num){
    return num+1
}

//expression
// addTwo(7)//gives error "cannot access addTwo before initialisation"
const addTwo = function(num){
    return num+2
}
console.log(addTwo(7))