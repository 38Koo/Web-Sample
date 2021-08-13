let hover = document.querySelectorAll('ul.navList li');

//test
hover.forEach(hover => hover.addEventListener('mouseover', highLight));
hover.forEach(hover => hover.addEventListener('mouseout', back));

let sentence1 = document.querySelector('p.no1').textContent = 'aaa';

if (document.querySelector('p.no2').textContent != '説明文2'){
    console.log('aaa');
}else{
    console.log('ccc');
}

//ホバー時ハイライトする。
function highLight(event){
    const list = event.currentTarget;
    const word = event.currentTarget.querySelector('a');
    word.style.color = 'White';
    // console.log(event.currentTarget);
    list.style.backgroundColor = "Black";
    //test
    // alert('over');
}

//離れた時、元に戻す。
function back(event){
    //test
    // alert('out');
    const list = event.currentTarget;
    const word = event.currentTarget.querySelector('a');

    list.style.backgroundColor = 'orange';
    word.style.color = 'Black';
}