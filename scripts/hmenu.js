const hamButton = document.querySelector('#menu');
const mainnav = document.querySelector('.navbar');

hamButton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hamButton.classList.toggle('open');
});