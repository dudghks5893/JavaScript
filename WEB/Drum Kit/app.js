var but1 = document.querySelector('button');

but1.addEventListener('click', function () {
    alert('ㅎㅇ');
})

// 버튼중에 drum이 들어간 버튼들을 변수에 넣음
var btns = document.querySelectorAll('button.drum');

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', handleClick)
}


var n = 1; // n 초기값 선정
// 클릭시 실행 함수
function handleClick() {
    if (n == 5) { n = 1; } //n값이 5가되면 n값을 1로
    // alert('클릭됨');
    var audio = new Audio('sounds/tom-' + n + '.mp3');
    audio.play();
    n++;
}