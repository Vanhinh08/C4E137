function includeHTML(fileName) {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute(fileName);
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute(fileName);
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

import * as server from './mockAPI.js';
import * as field from "./model.js";
import * as path from "./src-path.js";
// server.getAllUser().then(value => console.log(value));

let dateCurrent = new Date().toLocaleDateString();

let user = {
    name: 'testUpdate',
    avata: 'test',
    createDate: dateCurrent,
    rank: 1,
    follow_story: [],
    follow_author: [],
    isDelete: false,
    password: '1123',
    watched: [],
}

// server.createUser(user);

// server.searchByUserId(6).then(user => {
//     console.log(user)
// });

// server.updateUser(6, user).then((user)=> {
//     console.log(user);
// });

// let filter = {
//     isDelete: false
// };
// server.filterUser(filter).then(user => console.log(user))

// let pagination = {
//     isDelete: false,
//     page: 2,
//     limit: 2
// }

// server.paginationStory(pagination).then(user => console.log(user))

// Nhat
const $modal = document.getElementById('modal');
const $modalContainer = document.querySelector('.modal-container');
let $userModal = document.getElementById('js-user-modal');
let $bellAlert = document.getElementById('js-bell-alert');
let $loginAlert = document.getElementsByClassName('js-login-alert');
let $highlightRed = document.getElementsByClassName('header-nav__item-link');

// popup modal
$userModal.addEventListener('click', function () {
    $modal.classList.add('d-block');
    let filter = {
        name: "Nhat"
    };
    server.filterUser(filter).then(user => console.log(user))
})

$modal.addEventListener('click', function () {
    $modal.classList.remove('d-block');
})

$modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
})

// bell alert
$bellAlert.addEventListener('click', function () {
    alert('Đăng nhập để sử dụng chức năng này!');
})

// login alert
for (let i = 0; i < $loginAlert.length; i++) {
    $loginAlert[i].addEventListener('click', function () {
        alert('Đăng nhập để sử dụng chức năng này!');
    })
}

// highlight nav link red (add active class)
for (let i = 0; i < $highlightRed.length; i++) {
    $highlightRed[i].addEventListener('click', function () {
        let redLink = document.getElementsByClassName('header-nav__item-link--red');
        redLink[0].className = redLink[0].className.replace(' header-nav__item-link--red', '');
        $highlightRed[i].className += ' header-nav__item-link--red';
    })
}

// create the loai truyen

const $theLoaiTruyen = document.getElementById("the-loai-truyen");
let content = "";
for (const item of path.listTheLoaiTruyen) {
    content += `
        <div class="the-loai">
            <div class="ten-the-loai">${item.description}</div>
            <img class="img" src="${item.src}" alt="">
        </div>
    `;
};
$theLoaiTruyen.innerHTML = content;
// create truyen moi
const $truyenMoi = document.getElementById("truyen-moi");
const $tieuThuyetMoi = document.getElementById("tieu-thuyet-moi");
const $truyen18Moi = document.getElementById("truyen-18-moi");
const $ngonTinhMoi = document.getElementById("ngon-tinh-moi");
content = "";
for (const item of path.listTruyenMoi) {
    content += `
        <div class="item">
            <a  href="./item1/item1.html">
                <img class="link" src="${item.src}" alt="photo">
            </a>
            <div class="ten-truyen">
                ${item.description}
            </div>
            <br>
            <div class="chapter">${item.chapter}</div>
        </div>
    `;
};

let bodyTruyenMoi = `
<div class="div-menu">
            <div class="div-menu-trai">
                <div>
                    <img class="icon" src="${path.titleList.src}" alt="photo">

                </div>
                <div class="content">
                    ${path.titleList.description}
                </div>
            </div>
            <div class="div-menu-phai">
             <button style="color: white; background-color: black; border: none; font-size: 15px;">Xem thêm</button>   
            </div>
        </div>
        <div class="list-truyen">
        ${content}
        </div>
`;
$truyenMoi.innerHTML = bodyTruyenMoi;

let bodyTieuThuyetMoi = `
<div class="div-menu">
            <div class="div-menu-trai">
                <div>
                    <img class="icon" src="${path.titleList.src}" alt="photo">

                </div>
                <div class="content">
                    Tiểu thuyết mới
                </div>
            </div>
            <div class="div-menu-phai">
             <button style="color: white; background-color: black; border: none; font-size: 15px;">Xem thêm</button>   
            </div>
        </div>
        <div class="list-truyen">
        ${content}
        </div>
`;
$tieuThuyetMoi.innerHTML = bodyTieuThuyetMoi;

let bodyTruyen18Moi = `
<div class="div-menu">
            <div class="div-menu-trai">
                <div>
                    <img class="icon" src="${path.titleList.src}" alt="photo">

                </div>
                <div class="content">
                    Truyện 18+ mới
                </div>
            </div>
            <div class="div-menu-phai">
             <button style="color: white; background-color: black; border: none; font-size: 15px;">Xem thêm</button>   
            </div>
        </div>
        <div class="list-truyen">
        ${content}
        </div>
`;
$truyen18Moi.innerHTML = bodyTruyen18Moi;

let bodyngonTinhMoi = `
<div class="div-menu">
            <div class="div-menu-trai">
                <div>
                    <img class="icon" src="${path.titleList.src}" alt="photo">

                </div>
                <div class="content">
                    Ngôn tình mới
                </div>
            </div>
            <div class="div-menu-phai">
             <button style="color: white; background-color: black; border: none; font-size: 15px;">Xem thêm</button>   
            </div>
        </div>
        <div class="list-truyen">
        ${content}
        </div>
`;
$ngonTinhMoi.innerHTML = bodyngonTinhMoi;

//Slider
const $slider = document.getElementById("slider");
content = "";
for (let index = 0; index < path.listTruyenMoi.length; index++) {
    content += `
        <div class="slide">
            <img class="slide-img" src="${path.listTruyenMoi[index].src}" alt="photo"">
        </div>
    `;

}

// create slider
$slider.innerHTML = content;
const flavoursScrollWidth = $slider.clientWidth;
window.addEventListener('load', () => {
    let fistTime = true;
    let lastTime = false;
    self.setInterval(() => {
        if ($slider.scrollLeft <= flavoursScrollWidth) {
            if (fistTime) {
                fistTime = !fistTime;
                lastTime = !lastTime;
                $slider.scroll({
                    left: $slider.scrollLeft + 130,
                    behavior: "smooth"
                });
            } else {
                $slider.scroll({
                    left: $slider.scrollLeft + 240 + 10,
                    behavior: "smooth"
                });
            }
        } else {
            if (lastTime) {
                lastTime = !lastTime;
                fistTime = !fistTime;
                $slider.scroll({
                    left: $slider.scrollLeft + 1000,
                    behavior: "smooth"
                });
            } else {
                $slider.scroll({
                    left: 0,
                    behavior: "smooth"
                });

            }
        }
    }, 2000);
});

const $tinhNang = document.getElementById("tinh-nang");
content = "";
for (const item of path.listTinhNang) {
    content += `
        <div class="link">
            <a href="index.html">
                <img class="link1" src="${item}" alt="photo">

            </a>
        </div>
    `;
}

// top user
let topUser = "";
for (let i = 0; i < 10; i++) {
    topUser += `
    <div class="rank">
        <img style="width: 100px; border-radius: 60px;"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCop4PIAvUcs8kSyko-DN7yu9MeUnacp8rfw&usqp=CAU" alt="avatar">
        <div class="info">
            <div class="top-row">
                <div class="name-level">
                    <h2 class="name">Jinn Lee</h2>
                    <p class="level">LEVEL: <span>15</span></p>
                </div>
            </div>
            <div class="bottom-row">
                <div class="vip-coin">
                    <p class="activity">NGÀY VIP: <span>217 ngày 0 giờ</span></p>
                    <p class="coin">COIN: <span>1.117.570</span></p>
                </div>
            </div>
        </div>
    </div>
    `;
}

let bodyTinhNang = `
    <div style="display: flex;" class="flex-container">
        ${content}
    </div>
    <div class="flex-body">
        <div class="flex-login">
            <a href="index.html">
                <p style="color: white;"> Đăng nhập</p>
            </a>
        </div>
        <div class="flex-create-login">
            <a href="index.html">
                <p style="color: white;"> Đăng kí</p>
            </a>
        </div>
    </div>

    <div style="height: 80px;" class="description">
        <a style="height: 10px;" href="huongdan.html">
            <p style="color: white;"> Hướng dẫn</p>
        </a>
    </div>
    <h1 style="color: grey;">TOP USER</h1>
    <div class="rank1">
        ${topUser}
    </div>
`;
$tinhNang.innerHTML = bodyTinhNang;

const $tagTheLoai = document.getElementById("tag-the-loai");
content = `
    <div class="genre">
        <div class="genre-text">
            <span>THỂ LOẠI</span>
        </div>
        <div id="genre">
            <span>THỂ LOẠI</span>
            <div class="text">
                <a href="./index2.html"> <span id="text" class="text-link"> Manga</span></a> 
                <a href="./index2.html"> <span id="text" class="text-link"> Manhwa</span></a> 
                <a href="./index2.html"> <span id="text" class="text-link"> Tự sáng tác</span></a> 
                <a href="./index2.html"> <span id="text" class="text-link"> Khác</span></a> 
            </div>
        </div>
        <div id="hagtag">
            <span>HAGTAG</span>
            <div class="text-2">
                <span id="text">#16+</span>
                <span id="text">#18+</span>
                <span id="text">#1Vs1</span>
                <span id="text">#3d</span>
                <span id="text">#Some</span>
                <span id="text">#Ác nữ</span>
                <span id="text">#Ác Quỷ</span>
                <span id="text">#Action</span>
                <span id="text">#Adult</span>
                <span id="text">#Adventure</span>
                <span id="text">#Ai cập </span>
                <span id="text">#Âm nhạc</span>
                <span id="text">#Anh chị em</span>
                <span id="text">#Anh hùng</span>
                <span id="text">#Anime</span>
                <span id="text">#Âu Cổ</span>
                <span id="text">#Bách Hợp</span>
                <span id="text">#Bad boy</span>
                <span id="text">#Bạn Thân</span>
                <span id="text">#Bạo Lực</span>
                <span id="text">#Bí Ẩn </span>
                <span id="text">#Bi kịch</span>
                <span id="text">#Bị vứt bỏ</span>
                <span id="text">#Big</span>
                <span id="text">#BE</span>
            </div>
        </div>
    </div>
`;
$tagTheLoai.innerHTML = content;
