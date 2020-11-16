let elem = document.querySelector("#champMdp");
//let allElem = document.querySelectorAll(".inputText");

elem.style.display = "none";  // la difference entre le display none et visibility hidden (le hidden true va faire disparaitre l'element(il va le cacher mais sans le supprimer) en display none va completement supprimer)

elem.setCustomValidity("8 lettres majuscules uniquement");  // ici c'est pour changer le message de validation (pour formulaire)
elem.focus();


const button = document.querySelector('button');
const p      = document.querySelector('#cita');

let color = ["#3346ff", "#ea2608"];

let i = 0;
button.addEventListener("click", function() {
    i = i < color.length ? ++i : 0;
    p.style.background = color[i]
})



//width ="fit-content"