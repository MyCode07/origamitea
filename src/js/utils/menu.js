import { isMobile } from './isMobile.js';

const menu = document.querySelector('.menu');
const burger = document.querySelector('.header__burger');
const menuLinks = document.querySelectorAll('.menu li a');

if (burger) {
    burger.addEventListener('click', (е) => {
        menu.classList.add('_active');
        document.body.classList.add('_noscroll');
    })
}

if (menuLinks.length) {
    menuLinks.forEach(link => {
        link.addEventListener('click', (е) => {
            burger.classList.remove('_active');
            menu.classList.remove('_active');
            document.body.classList.remove('_noscroll');
        })
    })
}


document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('menu') || targetEl.classList.contains('menu__close')) {
        menu.classList.remove('_active');
        document.body.classList.remove('_noscroll');
    }
    
})


const arrow = `<button><svg  viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  d="M9.37427 1L5.18713 5.18713L1 1" stroke-linecap="square"/>
</svg></button>
`;

const mobileSubmenuList = document.querySelectorAll('nav ul li');
if (mobileSubmenuList.length) {
    mobileSubmenuList.forEach(li => {
        const submenu = li.querySelector('ul');

        if (submenu) {
            const link = submenu.previousElementSibling;
            link.insertAdjacentHTML('afterend', arrow);

            const btn = li.querySelector('button');

            if (btn && isMobile.any()) {
                btn.addEventListener('click', function () {
                    li.classList.toggle('_active')
                })
            }
        }
    })
}
