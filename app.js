const skillContainer = document.getElementById('skills')


document.addEventListener('DOMContentLoaded', function(){
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
</div>`
}

function eventListener(){
    const mobileMenu = document.querySelector('.mobile-menu')    
    mobileMenu.addEventListener('click', navResponsive);
    printSkills(skills)
    
}

function navResponsive(){
    console.log('click')
    const nav = document.querySelector('.barra')
    nav.classList.toggle('show')
}

var skills = {
    "HTML" : 60,
    "CSS" : 45,
    "JavaScript" : 50,
    "Java" : 70,
    "PHP" : 70,
    "Python" : 75
}

console.log(skills[0])