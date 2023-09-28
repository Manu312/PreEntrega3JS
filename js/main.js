const posiblesWins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
const tablero = Array(9).fill(null);
const turno = {
    "X": "X", "O": "O"
}
let ganador = false;
let estado = turno.X;

function setCasilla(elemento) {
    console.log(elemento.id);
    if (!elemento.className.includes("X") && !elemento.className.includes("O") && !ganador && notComplete()) {
        elemento.className += ` ${estado}`;
        tablero[elemento.id] = estado;
        estado === turno.X ? estado = turno.O : estado = turno.X;
        chequearGanador();
    }

}

function chequearGanador() {
    posiblesWins.forEach((posiblesWin) => {
        const [a, b, c] = posiblesWin;
        if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
            ganador = true;
            const container = document.querySelector(".tablero");
            console.log(container);
            const mensajeGanador = document.createElement("div");
            mensajeGanador.textContent = `El Ganador es el jugador: ${tablero[a] === "X" ? "Amarillo" : "Rojo"}`;
            container.insertBefore(mensajeGanador, container.querySelector(".fila"));
        }
    });
}

function notComplete() {
    return tablero.includes(null);
}