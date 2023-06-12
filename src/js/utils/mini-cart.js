const miniCart = document.querySelector('.mini-cart');
const headerCart = document.querySelector('.header-cart');

if (headerCart) {
    headerCart.addEventListener('click', function (e) {
        e.preventDefault();

        miniCart.classList.add('_active');
        document.body.classList.add('_noscroll');
    })
}