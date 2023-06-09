const tabProgress = document.querySelector('.coffe__tabs');
const tabContentsWrapper = document.querySelector('.coffe__tabs-content-wrapper');
const tabs = document.querySelectorAll('.coffe__tabs button');

if (tabs.length) {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function (e) {
            if (tabProgress.classList.contains('_right')) {
                tabProgress.classList.remove('_right')
                tabContentsWrapper.classList.remove('_right')
            }
            else {
                tabProgress.classList.add('_right')
                tabContentsWrapper.classList.add('_right')
            }
        })
    }
}