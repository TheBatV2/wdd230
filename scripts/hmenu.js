
function hmenu (){
const hamButton = document.querySelector('#menu');
const mainnav = document.querySelector('.navbar');

hamButton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hamButton.classList.toggle('show');
});}

document.addEventListener('DOMContentLoaded', hmenu
    
  );