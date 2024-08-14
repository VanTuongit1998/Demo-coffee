let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    search.classList.remove('active');
    cartItem.classList.remove('active');
};

let search = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
};

let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    search.classList.remove('active');
};

window.onscroll = () =>{
    navbar.classList.remove('active');
    search.classList.remove('active');
    cartItem.classList.remove('active');
}
// --------------------------form---------------
let loginForm = document.getElementById('id01');
document.getElementById('login-btn').onclick = () =>{
    loginForm.style.display='block';
}
let coleFrom = document.querySelector('.close');
coleFrom.onclick = () =>{
    loginForm.style.display='none';
}
//khi người dùng nhấp ngoài loginFrom thì form đóng lại
window.onclick = function(event) {
    if (event.target == loginForm) {
        loginForm.style.display = "none";
    }
}
//-----------------------------------------------
const submit = document.getElementById('login');
submit.onclick = () =>{
    const user = document.getElementById('user');
    const pass = document.getElementById('pass');
    if(user.value == 'Admin' && pass.value == '123'){
        alert ('bạn đã đăng nhập thành công');
    }else{
        alert ('user và pass không chính xác'); 
    }
} 
// ------------------------------------
const book = document.getElementById('book-btn');
const new_book = document.getElementById('book');
book.onclick = () =>{
    new_book.style.display = 'block';
}
// script.js
