var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var h3 = document.querySelector('h3');
var body = document.getElementById('gradient');

//addEventListener(a:이벤트타입, b:실행 함수) 모든 이벤트를 연결 시켜주는 함수
color1.addEventListener('input', setGradient);// input타입 입력 했을때 값
color2.addEventListener('input', setGradient);

//선택한 색을 섞고 화면에 색깔및 사용법 표시 함수
function setGradient() {
    // linear-gradien(오른쪽으로,color1.선택 색상,color2.선택 색상 섞음)
    body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`; // value 선택한 색상
    // body.style.background = "linear-gradient(to right, " + color1.value + " ," + color2.value + ")";
    h3.textContent = body.style.background + ";"; //화면에 색깔및 사용방법 표시
}