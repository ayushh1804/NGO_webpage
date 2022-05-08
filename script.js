const menBtn = document.querySelector('.menu-btn');
const navlinks = document.querySelector('.nav-links');
menBtn.addEventListener('click',()=>{
navlinks.classList.toggle('mobile-menu')
})