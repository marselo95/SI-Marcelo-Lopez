document.addEventListener('DOMContentLoaded', function(){
    eventListener();
})



function eventListener(){
    const mobileMenu = document.querySelector('.mobile-menu')    
    mobileMenu.addEventListener('click', navResponsive);
    
}

function navResponsive(){
    console.log('click')
    const nav = document.querySelector('.navbar')
    nav.classList.toggle('show')
}