// singleton 
// object literals 
// Object.create

const jsUser={
    name: "Anushka",
    "full name": "anushka raj",
    age: 21,
    location:"hyderabad",
    email: "anushka@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["age"])
// console.log(jsUser["full name"]);

jsUser.email="anushka@chatgpt.com"
// Object.freeze(jsUser)
jsUser.age=22 //cant update now 

jsUser.greeting = function(){
    console.log(`Hello jsUser ${jsUser["full name"]}`)
}
jsUser.greeting()