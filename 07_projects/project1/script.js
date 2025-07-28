const buttons = document.querySelectorAll('.button')
const body = document.body

buttons.forEach(function (btn){
  console.log(btn)
  btn.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    let eventTargetId=e.target.id
    switch(eventTargetId){
      case "grey":
        body.style.backgroundColor=eventTargetId;
        break;
      case "white":
        body.style.backgroundColor=eventTargetId;
        break;
      case "blue":
        body.style.backgroundColor=eventTargetId;
        break;
      case "yellow":
        body.style.backgroundColor=eventTargetId;
        break;
      case "purple":
        body.style.backgroundColor=eventTargetId;
        break;      <span class="button" id="yellow"></span>
    }
  })
});