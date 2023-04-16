let storedEmail = localStorage.getItem('email');
let storedPw = localStorage.getItem('password');
let emailLoginInput = document.getElementById('emailLoginInput');
let passwordLoginInput = document.getElementById('passwordLoginInput');
let loginBtn = document.getElementById('loginBtn');

function checkLogin(e) {
 if (storedEmail == emailLoginInput.value && storedPw == passwordLoginInput.value) {
  alert('Đăng nhập thành công!');
 }
 else {
  alert('Đăng nhập thất bại, hãy thử lại!');
  e.preventDefault();
}
}

loginBtn.addEventListener('click', checkLogin);