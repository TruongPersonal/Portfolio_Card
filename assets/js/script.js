var container = document.querySelector('.container')
var icons = document.querySelector('.icons')
var contact = document.querySelector('.contact')
var body = document.querySelector('body')
var card = document.querySelector('.card')
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const themeToggle = document.getElementById("theme-toggle");
const socialIcons = document.querySelectorAll('.icon');
let activeVideo = video1;
let inactiveVideo = video2;


setTimeout(function () {
    container.classList.add('move')
}, 3000)

setTimeout(function () {
    icons.style = "opacity: 0"
    contact.style = "opacity: 0"
}, 2000)

setTimeout(function () {
    card.classList.remove('move')
    icons.style = "opacity: 1"
    contact.style = "opacity: 1"
}, 6000)


themeToggle.addEventListener("click", () => {
    const newSource = document.body.classList.contains("theme-alt") 
        ? "./assets/videos/background_one.mp4" 
        : "./assets/videos/background_two.mp4";
    
    inactiveVideo.setAttribute("src", newSource);
    
    inactiveVideo.load();
    
    inactiveVideo.onloadeddata = () => {
        inactiveVideo.play();
        
        activeVideo.classList.remove('fade-in');
        activeVideo.classList.add('fade-out');
        
        inactiveVideo.classList.remove('fade-out');
        inactiveVideo.classList.add('fade-in');
        
        document.body.classList.toggle("theme-alt");
        
        const temp = activeVideo;
        activeVideo = inactiveVideo;
        inactiveVideo = temp;
    };
});

