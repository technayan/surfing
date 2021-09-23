// Navbar JS

window.addEventListener('scroll', function(){
    let scroll = window.scrollY;
    if (scroll > 50){
        document.querySelector('.navbar').style.boxShadow = "0 0 1.5rem 0 #00000033"
    } else(
        document.querySelector('.navbar').style.boxShadow = "none"
    )
     
});

// Hamburger Menu JS
let hamBtn = document.querySelector('.navbar-toggler');
let menu = document.getElementById('navbarNav');

hamBtn.addEventListener('click', () => {
    hamBtn.classList.toggle('open');
});

let myF = () => {
    if (menu.classList.contains("show")){
        hamBtn.classList.toggle('open');
        menu.classList.toggle('show');
    }
    
}

//Scroll Top JS


window.addEventListener('scroll', function(){
    let down = window.scrollY;
    if (down > 500){
        document.querySelector('.scroll-top').style.bottom = '2rem';
    } else(
        document.querySelector('.scroll-top').style.bottom = '-4rem'
    )
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
};

// Video Play and Plause Button JS
let video = document.getElementById('video');
let playBtn = document.querySelector('.play-btn');
let btnIcon = document.getElementById('btn-icon');

let playPause = () => {
    if (video.paused){
        video.play();
        playBtn.style.opacity = '0';
        btnIcon.classList = 'fas fa-pause ms-1 mt-1';
        
    } else {
        video.pause();
        playBtn.style.opacity = '1';
        btnIcon.classList= 'fas fa-play ms-2 mt-1';
    }
}



// GSAP 3 Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from('.hero-text', {scrollTrigger: '.hero-text', y: 50,opacity: 0, duration: 1});
gsap.from('.hero-img', {scrollTrigger: '.hero-img', y: 50,opacity: 0, duration: 1});
gsap.from('.quote', {scrollTrigger: '.quote', y: 100,opacity: 0, duration: 1});
gsap.from('.quote-author', {scrollTrigger: '.quote-author', y: 100,opacity: 0, duration: 1});
gsap.from('.story-img', {scrollTrigger: '.story-img', y: 100,opacity: 0, duration: 1});
gsap.from('.video', {scrollTrigger: '.video', y: 100,opacity: 0, duration: 1});
gsap.from('.story-text-area', {scrollTrigger: '.story-text-area', y: 100,opacity: 0, duration: 1});
gsap.from('.shop-sub-title', {scrollTrigger: '.shop-sub-title', y: 100,opacity: 0, duration: 1});
gsap.from('.shop-title', {scrollTrigger: '.shop-title', y: 100,opacity: 0, duration: 1});
gsap.from('.owl-carousel', {scrollTrigger: '.owl-carousel', y: 100,opacity: 0, duration: 1});
gsap.from('.training-info', {scrollTrigger: '.training-info', y: 100,opacity: 0, duration: 1});
gsap.from('.training-img', {scrollTrigger: '.training-img', y: 100,opacity: 0, duration: 1});
gsap.from('.training-caption', {scrollTrigger: '.training-caption', y: 100,opacity: 0, duration: 1});
gsap.from('.point-break-img', {scrollTrigger: '.point-break-img', y: 100,opacity: 0, duration: 1});
gsap.from('.point-break-info', {scrollTrigger: '.point-break-info', y: 100,opacity: 0, duration: 1});
gsap.from('.point-break-caption', {scrollTrigger: '.point-break-caption', y: 100,opacity: 0, duration: 1});
gsap.from('.club-title', {scrollTrigger: '.club-title', y: 100,opacity: 0, duration: 1});
gsap.from('.club-sec-desc', {scrollTrigger: '.club-sec-desc', y: 100,opacity: 0, duration: 1});
gsap.from('form', {scrollTrigger: 'form', y: 100,opacity: 0, duration: 1});
gsap.from('.camp-img', {scrollTrigger: '.camp-img', y: 100,opacity: 0, duration: 1});
gsap.from('.camp-info', {scrollTrigger: '.camp-info', y: 100,opacity: 0, duration: 1});
gsap.from('.footer-logo', {scrollTrigger: '.footer-logo', y: 100,opacity: 0, duration: 1});
gsap.from('.footer-menu', {scrollTrigger: '.footer-menu', y: 100,opacity: 0, duration: 1});
gsap.from('.footer-social', {scrollTrigger: '.footer-social', y: 100,opacity: 0, duration: 1});




//Owl Carousel JS
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            599:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
});




