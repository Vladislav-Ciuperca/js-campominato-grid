// creo una costante per richiamare il container della griglia
const container = document.getElementById('container')
// creo una funzione che genera un div con dentro del contenuto 
function createSquare(numero) {
    const newElement = document.createElement("div");
    newElement.innerHTML = numero;
    newElement.classList.add("square");
    return newElement;
}
// creo un ciclo for che conta da 1 a 100

for (let i = 0; i < 100; i++) {
    // richiamo la funzione sopra creata
    const newSquare = createSquare(i + 1)
    console.log(newSquare, i)
    // appendo il "<div>" dentro al container per 100 volte
    container.appendChild(newSquare)
    // creo un event listener collegato a newsquare
}
