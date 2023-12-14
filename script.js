
let diccionario = ["FIFTH", "APPLE", "HOUSE", "MOUSE", "YOUTH", "GRADE", "DANCE"];
let palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
let intentos = 6;

const grid = document.getElementById("grid");
const boton = document.getElementById("guess-button");

boton.addEventListener("click", () => {
    const intento = leerIntento();
    const row = document.createElement("div");
    row.className = "row";
    for (const i in palabra) {
        const span = document.createElement("span");
        span.className = "letter";
        span.innerHTML = intento[i];
        if (palabra[i] == intento[i]) {
            span.style.backgroundColor = "#79b851"
        } else if (palabra.includes(intento[i])) {
            span.style.backgroundColor = "#f3c237"
        } else if (intento === "" || intento.length < 5) {
            modalError("<h1>Palabra muy corta</h1>");
            return
        } else {
            span.style.backgroundColor = "#a4aec4"
        }
        row.appendChild(span);
    }
    grid.appendChild(row);

    if (intento === palabra) {
        terminar("<h1>GANASTE!🏆</h1>")
        return
    }
    intentos--;
    if (intentos == 0) {
        terminar("<h1>PERDISTE!😖</h1>")
    }
})

function leerIntento() {
    const input = document.getElementById("guess-input");
    return input.value.toUpperCase();
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    boton.disabled = true;
    modalError(mensaje);
}

function modalError(mensaje) {
    const modal = document.getElementById("myModal");
    const modalMessage = document.getElementById("modal-message");
    modalMessage.innerHTML = mensaje;
    modal.style.display = "block";
    const closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function () {
        modal.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}