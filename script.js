let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');


menu.onclick= () =>{
    menu.classList.toggle('bx-menu');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const sr= ScrollReveal({
    distance:'60px',
    duration:2500,
    reset:true
})
