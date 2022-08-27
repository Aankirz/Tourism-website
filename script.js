let searchBtn=document.querySelector('#search-btn');
let searchBar=document.querySelector('.search-bar-container');

let loginForm=document.querySelector('.login-form-container');
let user=document.querySelector('#login-btn');
let money=document.querySelector('.moneyOptions');
let signUpMoney=document.querySelector('#signUpMoney');

let cancelBtn=document.querySelector('#form-close');

let videoBtn=document.querySelector('.controls');

let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');


window.onscroll=function(){
    searchBtn.classList.remove('fa-times')
    
    searchBar.classList.remove('active');
}
menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active');
})
searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times')
    searchBar.classList.toggle('active');
})

user.addEventListener('click',()=>{
    loginForm.classList.toggle('showLogin');
})
money.addEventListener('click',()=>{
    loginForm.classList.toggle('showLogin');
})
signUpMoney.addEventListener('click',()=>{
    loginForm.classList.toggle('showLogin');
})

cancelBtn.addEventListener('click',()=>{
    loginForm.classList.remove('showLogin');
})



videoBtn.childNodes.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        document.querySelector('.vid-btn.active').classList.remove('active');
        e.target.classList.add('active');
        let src=btn.getAttribute('data-src');
        document.querySelector('#video-slider').src=src;
    })
})