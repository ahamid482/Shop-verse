const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

    bar.addEventListener('click', function() {
        nav.classList.add('active');
    });


if (close) {
    bar.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}