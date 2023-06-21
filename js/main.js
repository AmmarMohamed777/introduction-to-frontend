let links = document.querySelector('.links');
let menu = document.querySelector('.menu');
let two = document.querySelector('.two');
links.addEventListener('click',()=>{
    menu.classList.toggle('active');
    two.classList.toggle('click');
});