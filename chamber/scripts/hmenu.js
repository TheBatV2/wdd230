
function hmenu (){
const hamButton = document.querySelector('#menu');
const mainnav = document.querySelector('.navbar');

hamButton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hamButton.classList.toggle('show');
});}

function dmode (){
  const modeButton = document.querySelector("#mode");
  const html = document.querySelector("html");
  
  modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌘")) {
      html.style.background = "#000";
      html.style.color = "white";
      modeButton.textContent = "☀︎";
    } else {
      html.style.background = "#4083e1";
      html.style.color = "white";
      modeButton.textContent = "🌘";
    }
  });}
  
  document.addEventListener('DOMContentLoaded',() =>{ 
    hmenu();
    dmode();
      
  });