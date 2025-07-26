// IIFE == Immediately Invoked Function Expression
// syntax
// (FunctionDefinition)(execution);
// (function(){})();
// semicolon is must to end the iife
//executing without even calling   
// global scope k pollution ko htane k liye use krte h 
(function chai(){
    console.log("database connected");
})();

( (name)=>{
    console.log(name, " is printed using iife")
} )("anushka"); //passing arg as anushka for parameter name 