const headerAccount = document.querySelector('.header-account');
if (headerAccount) {
    const btn = headerAccount.querySelector('button');
    btn.addEventListener('click', function () {
        headerAccount.classList.toggle('_active')
    })
}

const openAccountBtns = document.querySelectorAll('[data-open-account]');
const accountSidebar = document.querySelector('.account-sidebar');
if (openAccountBtns.length) {
    openAccountBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();

            accountSidebar.classList.add('_active');
            document.body.classList.add('_noscroll');
        })
    })
}