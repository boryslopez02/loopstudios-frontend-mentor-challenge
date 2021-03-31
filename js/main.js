let btnN = document.getElementById('btn'),
nav = document.getElementById('nav'),
btnClose = document.getElementById('btn-close')

btnN.addEventListener('click', () => {
    nav.classList.add('active')
});

btnClose.addEventListener('click', () => {
    nav.classList.remove('active')
});
