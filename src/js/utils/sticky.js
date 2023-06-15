const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;



function contentmarginTop() {
    let headerHeight = header.getBoundingClientRect().height;
    const main = document.querySelector('main');

    const headerTop = header.querySelector('.header__top');
    const headerTopHeight = headerTop.getBoundingClientRect().height;

    header.setAttribute('style', `--moveY:${-headerTopHeight}px`);
    main.style.marginTop = headerHeight + 20 + 'px';

}
contentmarginTop();
window.addEventListener('resize', contentmarginTop)


function stickyHeader() {
    if (window.scrollY > headerHeight) {
        header.classList.add('_sticky');
    }
    else {
        header.classList.remove('_sticky');
    }
}

window.addEventListener('scroll', stickyHeader);