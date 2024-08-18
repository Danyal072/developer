let bars = document.querySelector('.bi-list');
let cross = document.querySelector('.bi-x-lg');

let nav = document.querySelector('#nav');
let ul = document.querySelector('ul');

if(window.innerWidth < 768 || window.screen.width <= 768){
    
    bars.addEventListener('click', function(){
        nav.classList.add('nav-active');
        ul.classList.add('nav-ul');
        nav.style.display = 'block';
        bars.style.display = 'none';
        cross.style.display = 'block';
        cross.style.zIndex = '1000';
    });
    
    cross.addEventListener('click', function(){
        nav.classList.remove('nav-active');
        ul.classList.remove('nav-ul');
        nav.style.display = 'none';
        bars.style.display = 'block';
        cross.style.display = 'none';
    });
    
}