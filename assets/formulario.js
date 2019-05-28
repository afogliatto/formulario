let gente = [];

let nombre
let apellido
let dni
let balance

// const button = document.querySelector("#submit")
// button.addEventListener("click", () => {
//     console.log("click")
//     console.log(formulario);
// })

let nametag = document.querySelector("#nombre");
nametag.addEventListener("change", (event) => {
    nombre = event.target.value
    console.log(event.target.value);
});

let apellidotag = document.querySelector("#apellido");
apellidotag.addEventListener("change", (event) => {
    apellido = event.target.value
    console.log(event.target.value);
});

let dnitag = document.querySelector("#dni");
dnitag.addEventListener("change", (event) => {
    dni = event.target.value
    console.log(event.target.value)
});

let balancetag = document.querySelector("#balance");
balancetag.addEventListener("change", (event) => {
    balance = event.target.value
    console.log(event.target.value)
});

const submit = document.querySelector("#mandar");
submit.addEventListener("click", () => {
    gente = [];
    gente.push({
        nombre,
        apellido,
        dni,
        balance,
    });
localStorage.setItem(Math.random(), JSON.stringify(gente));
});

