let searchBtn=document.querySelector('#search-btn');
let searchBar=document.querySelector('.search-bar-container');

let loginForm=document.querySelector('.login-form-container');
let user=document.querySelector('#login-btn');

let cancelBtn=document.querySelector('#form-close');


window.onscroll=function(){
    searchBtn.classList.remove('fa-times')
    
    searchBar.classList.remove('active');
}

searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times')
    searchBar.classList.toggle('active');
})
// .toggle active means now this class active will get added.

user.addEventListener('click',()=>{
    loginForm.classList.toggle('showLogin');
})
cancelBtn.addEventListener('click',()=>{
    loginForm.classList.remove('showLogin');
})