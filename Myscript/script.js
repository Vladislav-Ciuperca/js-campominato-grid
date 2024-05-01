// creo una costante per richiamare il container della griglia
const container = document.getElementById('container')
// creo una funzione che genera un div con dentro del contenuto 
function createSquare(numero) {
    const newElement = document.createElement("div");
    newElement.innerHTML = numero;
    newElement.classList.add("square");
    return newElement;
}
