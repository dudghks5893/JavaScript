


var img1 = document.querySelector('.img1');// img1클레스를 선택하여 변수에 넣음
var img2 = document.querySelector('.img2');// img2클레스를 선택하여 변수에 넣음
var h1 = document.querySelector('h1'); // h1태그를 선택하여 변수에 넣음

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1~6 랜덤 숫자를 변수에 넣음
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1~6 랜덤 숫자를 변수에 넣음

img1.setAttribute('src', 'images/dice' + randomNumber1 + '.png'); // 이미지 주소를 랜덤으로 불러와서 출력
img2.setAttribute('src', 'images/dice' + randomNumber2 + '.png'); // 이미지 주소를 랜덤으로 불러와서 출력

if (randomNumber1 > randomNumber2) {
    h1.textContent = '🚩Player 1 Wins!'; // 텍스트 변환
}
else if (randomNumber1 < randomNumber2) {
    h1.textContent = 'Player 2 Wins!🚩'; // 텍스트 변환
}
else {
    h1.textContent = 'Draw!'; // 텍스트 변환
}