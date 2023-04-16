const $modal = document.getElementById('modal');
const $modalContainer = document.querySelector('.modal-container');
let $userModal = document.getElementById('js-user-modal');
let $bellAlert = document.getElementById('js-bell-alert');
let $loginAlert = document.getElementsByClassName('js-login-alert');
let $highlightRed = document.getElementsByClassName('header-nav__item-link');
let $mobileHighlightRed = document.getElementsByClassName('nav__mobile-link');
let $barsBtn = document.getElementById('js-bars-btn');
let $navMobile = document.getElementById('js-nav-mobile');
let $navOverlay = document.getElementById('js-nav-overlay');
let $navClose = document.getElementById('js-nav-close');
let $mobileSearchBtn = document.getElementsByClassName('header-search-btn-icon');
let $mobileSearchBox = document.querySelector('.mobile-search');
let $mobileSearchOverlay = document.querySelector('.mobile-search__overlay');

// popup modal
console.log($modal);
$userModal.addEventListener('click', function() {
 $modal.classList.add('d-block');
})

$modal.addEventListener('click', function() {
 $modal.classList.remove('d-block');
})

$modalContainer.addEventListener('click', function(event) {
 event.stopPropagation();
})


// popup mobile nav bar
$barsBtn.addEventListener('click', function() {
 $navMobile.classList.add('d-block');
})

$navOverlay.addEventListener('click', function() {
 $navMobile.classList.remove('d-block');
})

$navClose.addEventListener('click', function() {
 $navMobile.classList.remove('d-block');
})


// popup mobile search
$mobileSearchBtn[0].addEventListener('click', function() {
 $mobileSearchBtn[0].style.display = 'none';
 $mobileSearchBtn[1].style.display = 'block';
 $mobileSearchBox.style.display = 'block';
})

$mobileSearchBtn[1].addEventListener('click', function() {
 $mobileSearchBtn[1].style.display = 'none';
 $mobileSearchBtn[0].style.display = 'block';
 $mobileSearchBox.style.display = 'none';
})

$mobileSearchOverlay.addEventListener('click', function() {
 $mobileSearchBtn[1].style.display = 'none';
 $mobileSearchBtn[0].style.display = 'block';
 $mobileSearchBox.style.display = 'none';
})


// bell alert
$bellAlert.addEventListener('click', function() {
 alert('Đăng nhập để sử dụng chức năng này!');
})


// login alert
for (let i = 0; i < $loginAlert.length; i++) {
$loginAlert[i].addEventListener('click', function() {
 alert('Đăng nhập để sử dụng chức năng này!');
})
}


// highlight nav link red (add active class)
for (let i = 0; i < $highlightRed.length; i++) {
 $highlightRed[i].addEventListener('click', function() {
  let redLink = document.getElementsByClassName('header-nav__item-link--red');
  redLink[0].className = redLink[0].className.replace(' header-nav__item-link--red', '');
  $highlightRed[i].className += ' header-nav__item-link--red';
 })
}


// highlight mobile nav link red (add active class)
for (let i = 0; i < $mobileHighlightRed.length; i++) {
 $mobileHighlightRed[i].addEventListener('click', function() {
  let mobileRedLink = document.getElementsByClassName('nav__mobile-link--red');
  mobileRedLink[0].className = mobileRedLink[0].className.replace(' nav__mobile-link--red', '');
  this.className += ' nav__mobile-link--red';
 })
}