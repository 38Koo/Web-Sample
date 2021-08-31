let number1; 
let number2; 
let number3; 
let blnStart = false;
let hiddenNumber = document.querySelector('.Number');
let selectDigit = document.querySelector('.digit');

const btnStart = document.querySelector('.btnstart').addEventListener('click', function(){
    blnStart = true;
    number1 = getRandomInt(0,10);
    number2 = getRandomInt(0,10);
    number3 = getRandomInt(0,10);
    console.log(number1);
    console.log(number2);
    console.log(number3);
});

const select = document.querySelector('.digit').addEventListener('change', function(){
    let strHidden = '';
    if (selectDigit.value !== 0){
        for (let i = 0; i < selectDigit.value; i++){
            strHidden += '*';
        }
    }
    console.log(selectDigit.value);
    hiddenNumber.textContent = strHidden;
    document.querySelector('.inputcheck').maxLength = selectDigit.value;
});

const btnCheck = document.querySelector('.btncheck').addEventListener('click', function(){
    let intdigit = selectDigit.value;
    //Startボタン押下後のみ処理を行う
    if (blnStart === true){
        let check = document.querySelector('.inputcheck').value;
        if (isNaN(check) === true){
            alert('数値を入力してください。');
            return;            
        }else if(check.length !== intdigit){
            alert(`${intdigit}桁の数値を入力してください。`);
            return;
        }else{
            //チェック処理
            
        }
        console.log(check);
    }
});

function checkNumber(number){

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  