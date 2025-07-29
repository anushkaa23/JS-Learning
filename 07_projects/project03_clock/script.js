const clock=document.getElementById('clock');
// const clock=document.querySelector("#clock")


// hmesha update hota rhe time 

// setInterval(function(){},intervalInMilliSec)
setInterval(function(){
    let date=new Date();
    // console.log(date.toLocaleTimeString())
    clock.innerHTML=date.toLocaleTimeString();

},1000)