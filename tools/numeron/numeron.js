let number1; 
let number2; 
let number3; 

const btnStart = document.querySelector('.btnstart').addEventListener('click', function(){
    number1 = getRandomInt(0,10);
    number2 = getRandomInt(0,10);
    number3 = getRandomInt(0,10);
    console.log(number1);
    console.log(number2);
    console.log(number3);
});

const btnCheck = document.querySelector('.btncheck').addEventListener('click', function(){
    let check = document.querySelector('.inputcheck').value;    
    console.log(check.value);
});


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  