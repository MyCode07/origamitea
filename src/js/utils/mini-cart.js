const miniCart = document.querySelector('.mini-cart');
const headerCart = document.querySelector('.header-cart');

if (headerCart) {
    headerCart.addEventListener('click', function (e) {
        e.preventDefault();

        miniCart.classList.add('_active');
        document.body.classList.add('_noscroll');
    })
}

document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('mini-cart') || targetEl.classList.contains('mini-cart__close')) {
        miniCart.classList.remove('_active');
        document.body.classList.remove('_noscroll');
    }
})