
function hmenu (){
const hamButton = document.querySelector('.hamburger');
const mainnav = document.querySelector('.navbar');

hamButton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hamButton.classList.toggle('show');
});}


function dmode(){
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});}

document.addEventListener('DOMContentLoaded', hmenu, dmode
    
);