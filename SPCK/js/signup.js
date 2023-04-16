// Captcha
let $captchaImg = document.getElementById('captchaImg');
let $signupBtn = document.getElementById('signupBtn');
let $captchaSync = document.querySelector('.captcha-sync__icon');
let $captchaInput = document.getElementById('captchaInput');
// Email validation
let $emailInput = document.getElementById('emailInput');
// Input validation
let $passwordInput = document.getElementById('passwordInput');
let $confirmPasswordInput = document.getElementById('confirmPasswordInput');


// Email validation
function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}


// Captcha
function captchaGenerate() {
  // clear old input
  $signupBtn.value = '';

  // generate captcha
  let uniqueChar = '';
  const randomChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 1; i < 6; i++) {
    uniqueChar += randomChar.charAt(Math.random() * randomChar.length);
  }

  // store captcha into the image
  $captchaImg.innerHTML = uniqueChar;
}


// function checkCaptcha() {
//   if (userCaptchaInput != $captchaImg.innerHTML) {
//     alert('Bạn đã nhập sai Captcha!');
//   }
// }


// Email validation
$emailInput.addEventListener('change', function() {
  if (!validateEmail($emailInput.value)) {
    alert('Vui lòng nhập đúng email!');
  }
})


// Captcha
window.addEventListener('load', captchaGenerate);
$captchaSync.addEventListener('click', captchaGenerate);
// $signupBtn.addEventListener('click', checkCaptcha);


// Input validation
function userStore(event) {
  event.preventDefault();
  let upperCaseLetters = /[A-Z]/g;
  let lowerCaseLetters = /[a-z]/g;
  let requiredNumbers = /[0-9]/g;
  let userCaptchaInput = $captchaInput.value;

  if (
    $passwordInput.value.length < 8
    || $passwordInput.value.length != $confirmPasswordInput.value.length
    || !$passwordInput.value.match(upperCaseLetters)
    || !$passwordInput.value.match(lowerCaseLetters)
    || !$passwordInput.value.match(requiredNumbers)
    ) {
      alert('Mật khẩu chưa hợp lệ!');
  }
  else if (userCaptchaInput != $captchaImg.innerHTML) {
      alert('Bạn đã nhập sai Captcha!');
  }
  else {
      localStorage.setItem('email', $emailInput.value);
      localStorage.setItem('password', $passwordInput.value);
      alert('Đăng ký thành công!');
  }
}

$signupBtn.addEventListener('click', userStore);