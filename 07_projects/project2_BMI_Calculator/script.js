// const form = document.querySelector('form')
// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     const height= parseInt(document.querySelector('#height').value)
//     const weight= parseInt(document.querySelector('#weight').value)
//     const results=document.querySelector('#results')
//     console.log(height)
//     console.log(weight)
//     if(height==='' || height <0 || isNaN(height)){
//         results.innerHTML=`please give a valid height ${height}`
//     }else if(weight==='' || weight <0 || isNaN(weight)){
//         results.innerHTML=`please give a valid weight ${weight}`
//     }else{
//         const bmi=(weight/(height*height)/10000).toFixed(2)
//         if(bmi<18.6){
//             results.innerHTML= `<span>You are underweight and your BMI is ${bmi}</span>`
//         }else if(bmi>=18.6 && bmi<=24.9 ){
//             results.innerHTML=`<span>You are fit and your bmi is ${bmi}</span>`
//         }
//         else{
//             results.innerHTML=`<span>You are overWeight and your bmi is ${bmi}</span>`
//         }
//     }
// })


const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please give a valid height ${height}.`;
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please give a valid weight ${weight}.`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        
        if (bmi < 18.6) {
            results.innerHTML = `<span>You are underweight and your BMI is ${bmi}</span>`;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `<span>You are fit and your BMI is ${bmi}</span>`;
        } else {
            results.innerHTML = `<span>You are overweight and your BMI is ${bmi}</span>`;
        }
    }
});
