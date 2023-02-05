const skillContainer = document.getElementById('skills');
const slider = document.getElementById('slider');
const btnL = document.getElementById('btn-l')
const btnR = document.getElementById('btn-r')

let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function right() {
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.4s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 400);
}

function left() {

    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.4s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 400);
}

btnR.addEventListener('click', function () {
    right();
})

btnL.addEventListener('click', function () {
    left();
})


document.addEventListener('DOMContentLoaded', function () {
    eventListener();
})

function printSkills(skills) {
    skillContainer.innerHTML += ` <div class="skill">
    <h2>HTML</h2>
    <div class="progress-bar">
        <div class="progress" style="--w:${skills.HTML}%">${skills.HTML}%</div>
    </div>
</div>

<div class="skill">
    <h2>CSS</h2>
    <div class="progress-bar">
        <div class="progress" style="--w:${skills.CSS}%">${skills.CSS}%</div>
    </div>
</div>

<div class="skill">
    <h2>JavaScript</h2>
    <div class="progress-bar">
        <div class="progress" style="--w:${skills.JavaScript}%">${skills.JavaScript}%</div>
    </div>
</div>

<div class="skill">
    <h2>Java</h2>
    <div class="progress-bar">
        <div class="progress" style="--w:${skills.Java}%">${skills.Java}%</div>
    </div>
</div>

<div class="skill">
    <h2>PHP</h2>
    <div class="progress-bar">
        <div class="progress" style="--w:${skills.PHP}%">${skills.PHP}%</div>
    </div>
</div>

<div class="skill">
    <h2>Python</h2>
    <div class="progress-bar">
        <div class="progress" style="--w:${skills.Python}%">${skills.Python}%</div>
    </div>
</div>

<div class="skill">
    <h2>Procrastinar</h2>
    <div class="progress-bar">
        <div class="progress" style="--w:${skills.Procrastinar}%">${skills.Procrastinar}%</div>
    </div>
</div>

`
}

function eventListener() {
    const mobileMenu = document.querySelector('.mobile-menu')
    mobileMenu.addEventListener('click', navResponsive);
    printSkills(skills)

}

function navResponsive() {
    console.log('click')
    const nav = document.querySelector('.barra')
    nav.classList.toggle('show')
}

var skills = {
    "HTML": 60,
    "CSS": 45,
    "JavaScript": 50,
    "Java": 70,
    "PHP": 70,
    "Python": 75,
    "Procrastinar": 100
}


