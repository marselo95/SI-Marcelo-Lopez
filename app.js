const skillContainer = document.getElementById('skills');
const slider = document.getElementById('slider');
const btnL = document.getElementById('btn-l');
const btnR = document.getElementById('btn-r');
const form = document.getElementById('formulario');
const letras = ['á', 'é', 'í', 'ó', 'ú', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

document.addEventListener('DOMContentLoaded', function () {
    startApp();
});

form.addEventListener('submit', e => {
    e.preventDefault();
    let nombre = validateName();
    let email = ValidateEmail();
    const nam = document.getElementById('nombre');
    const crr = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');

    if (nombre === false) {
        form.innerHTML += `<p class="warning red wn">Nombre invalido</P>`

        setTimeout(function () {
            const alert = document.querySelector('.wn');
            alert.remove()
        }, 5000)

    }
    if (email === false) {
        form.innerHTML += `<p class="warning red en">email invalido</P>`

        setTimeout(function () {
            const alert = document.querySelector('.en');
            alert.remove()
        }, 5000)

    }

    if (email === true && nombre === true) {
        alert(nam.value + "\n" + crr.value + "\n" + mensaje.value);
        form.innerHTML += `<p class="warning green s">Mensaje enviado exitosamente</P>` 

        setTimeout(function () {
            const alert = document.querySelector('.s');
            alert.remove()
        }, 5000)

    }


})

function ValidateEmail() {
    const email = document.getElementById('email');
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) && email.value.length != 0) {
        return (true)
    } else {
        alert("You have entered an invalid email address!")
        return false
    }

}


function validateName() {

    const name = document.getElementById('nombre');

    if (name.value.length === 0) {
        return false
    }

    for (let index = 0; index < name.value.length; index++) {
        // console.log(name.value[index].toLowerCase())
        if (letras.includes(name.value[index].toLowerCase())) {
            continue
        } else {
            alert("El nombre no puede contener caracteres especiales");
            return false;
        }

    }

    return true
}


function startApp() {
    scrollNav();
}

function start() {
    scrollNav();
}

function right() {
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function left() {

    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnR.addEventListener('click', function () {
    right();
})

btnL.addEventListener('click', function () {
    left();
})

setInterval(function () {
    right();
}, 5000)


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
    const nav = document.querySelector('.barra')
    nav.classList.toggle('show')
}

function scrollNav() {
    const links = document.querySelectorAll('.navbar a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const scrollSection = e.target.attributes.href.value;
            const section = document.querySelector(scrollSection);
            section.scrollIntoView({ behavior: "smooth" });
        });
    });
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