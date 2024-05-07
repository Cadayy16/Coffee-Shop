let menu = document.querySelector('.menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('move')
    navbar.classList.toggle('open-menu')
}

window.onscroll = () => {
    menu.classList.remove('move')
    navbar.classList.remove('open-menu')
}


const animate = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '1600',
    delay: '400',
});

animate.reveal('.navbar');
animate.reveal('.home-text', { origin: 'left' })
animate.reveal('.image', { origin: 'right' })
animate.reveal('.ser-box, .product-box, .team-box', { intervel: 100 });
