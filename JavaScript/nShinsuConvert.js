const clicked = document.querySelector('input.button');
clicked.addEventListener('click', convert);

function convert(){
    const textarea = document.querySelector('input.number');
    if (textarea.textContent === ''){
        alert('数値を入力してください。');
        textarea.focus();
        return;
    }


}