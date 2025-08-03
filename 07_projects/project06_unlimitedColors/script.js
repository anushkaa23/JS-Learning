// alert("js")
// generate a random color
const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;

}
const changeBGcolor=()=>{
    document.body.style.backgroundColor=randomColor()
}
let intervalID=null
const startChangingColor=function(){
    if(intervalID===null){
         intervalID=setInterval(changeBGcolor,1000)
    }
}

const stopChangingColor=function(){
    clearInterval(intervalID);
    intervalID= null;
    document.body.style.backgroundColor="black";
}
// console.log(randomColor())
document.querySelector("#start").addEventListener('click',startChangingColor)

document.querySelector("#stop").addEventListener('click',stopChangingColor)