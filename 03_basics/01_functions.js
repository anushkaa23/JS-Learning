function greeting(){
    console.log("hello")
}

// greeting()

// function sum(num1,num2){
//     console.log(num1+num2)
// }
sum(1213,21313)

function sum(num1,num2){
    return num1+num2
}
ans=sum(1213,21313)
// console.log(ans)

function loginUserMessage(username ){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("anushka"));

// rest operator -> kitna v val as arg lega
function calculatePrice(...num1){
    let res=0;
    for(let i=0;i<num1.length;i++){
        res+=num1[i];
    }
    return res
}
// console.log(calculatePrice(200,400,50))

const user={
    userName:"anushka",
    price:199
}
function handleObject(anyObject){
    console.log(`UserName is ${anyObject.userName} and price is ${anyObject.price}`); 
}
handleObject(user)

handleObject({
    userName:"sam",price:100
})