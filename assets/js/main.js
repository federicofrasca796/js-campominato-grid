/* L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
- con difficoltà 1 => tra 1 e 100
- con difficoltà 2 => tra 1 e 81
- con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

/* Strumenti:
- prompt() | addEventListener
- if
- for
*/

//l'utente sceglie il livello di difficoltà
const chooseLvl = prompt(`Scegli la difficoltà: 
1 (facile) 2 (intermedio) 3(difficile)`);

//loop if per determinare la difficoltà scelta e generare matrici con griglie più/meno dense.
if (chooseLvl == 1){
    //esegui funzione per matrice di difficoltà 1
    console.log('Difficoltà 1');
} else if (chooseLvl == 2) {
    //esegui funzione per matrice di difficoltà 2
    console.log('Difficoltà 2');
} else if (chooseLvl == 3) {
    //esegui funzione per matrice di difficoltà 3
    console.log('Difficoltà 3');
} else {
    //restituisci messaggio di errore
    console.log('Non ha scelto');
}




//per ogni livello di difficoltà, creo una funzione che inserisce i quadrati necessari.

// function genMatrix8x8()