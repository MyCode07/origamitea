const miniCart = document.querySelector('.mini-cart');
const openMiniCartBtns = document.querySelectorAll('[data-open-cart]');

if (openMiniCartBtns.length) {
    openMiniCartBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();

            miniCart.classList.add('_active');
            document.body.classList.add('_noscroll');
        })
    })
}