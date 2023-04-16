// //Truy xuất 1 phần tử thông qua id
// const $title = document.getElementById('big-title');
// console.log($title);

// //Truy xuất 1 phần tử thông qua class
// const $paragraphs = document.getElementsByClassName('red-paragraph');
// console.log($paragraphs[0].childNodes);

// //Truy xuất 1 phần tử thông qua tên thẻ
// const $images = document.getElementsByTagName('img');
// console.log($images);

// // Lấy nội dung bên trong
// let titleContent = $title.innerHTML;
// console.log(titleContent);

// // Thay đổi nội dung bên trong
// $title.innerHTML = "Nội dung mới";

// // Lấy thuộc tính của 1 phần tử
// let titleAtribute = $title.getAttribute('id');
// console.log(titleAtribute);

// // Thêm mới thuộc tính của 1 phần tử
// $title.setAttribute('data-goodbye', 'add attribute');

// // Xóa thuộc tính của 1 phần tử
// $title.removeAttribute('data-goodbye');

// // Thay đổi style của phần tử
// $title.style.color = 'green';

// // Thêm phần tử vào trang web
// const $link = document.createElement('a');
// $link.innerHTML = 'This is link to google';
// $link.setAttribute('href', 'https://www.google.com/');

// document.body.append($link);
// document.body.prepend($link);

// $title.onclick = () => {
//     console.log('click');
// };

// const isEmailValid = (email) => {
//     console.log(email);
// }

// $emailInput = document.getElementById('my-email');
// $emailInput.onchange = () => isEmailValid($emailInput.value);

$urlInput = document.getElementById('url-1');
$widthInput = document.getElementById('width');
$heightInput = document.getElementById('height');
$borderRadiusInput = document.getElementById('border-radius');
$urlInput2 = document.getElementById('url-2');
$img = document.getElementsByTagName('img')

$urlInput.onchange = () => {
    $img[0].setAttribute('src', $urlInput.value);
}

$widthInput.onchange = () => {
    $img[0].setAttribute('width', $widthInput.value + 'px');
}

$heightInput.onchange = () => {
    $img[0].setAttribute('height', $heightInput.value + 'px');
}

$borderRadiusInput.onchange = () => {
    // $img[0].setAttribute('', $borderRadiusInput.value + 'px');
    $img[0].style.borderRadius = $borderRadiusInput.value + 'px';
}

$urlInput.onchange = () => {
    $img[0].setAttribute('src', $urlInput.value);
}

$urlInput.onchange = () => {
    $img[0].setAttribute('src', $urlInput.value);
}
