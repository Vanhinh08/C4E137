// localStorage

// lưu dữ liệu
localStorage.setItem('name', 'An');
localStorage.setItem('address', 'HN');
localStorage.setItem('weight', 50);


// lấy dữ liệu
const name = localStorage.getItem('name');
console.log(name);

//Đồng hồ đếm ngược
const $seconds = document.getElementById('seconds');
const $start = document.getElementById('start-btn');
const $pause = document.getElementById('pause-btn');
const $reset = document.getElementById('reset-btn');

let timer = null;

$start.onclick = () => {
    timer = setInterval(() => {
        $seconds.innerHTML = --$seconds.innerHTML;
        if ($seconds.innerHTML == '0') {
            $pause.click();
        }
    }, 1000);
}

$pause.onclick = () => {
    clearInterval(timer);
}

$reset.onclick = () => {
    $seconds.innerHTML = '10';
    $pause.click();
}

let temp = 'a';
let text = '${temp}';