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
1 (facile) 2 (intermedio) 3 (difficile)`);

//loop if per determinare la difficoltà scelta e generare matrici con griglie più/meno dense.
if (chooseLvl == 1){
    //esegui funzione per matrice di difficoltà 1
    // console.log('Difficoltà 1');

    genMatrixLvl1();

} else if (chooseLvl == 2) {
    //esegui funzione per matrice di difficoltà 2
    // console.log('Difficoltà 2');

    genMatrixLvl2();

} else if (chooseLvl == 3) {
    //esegui funzione per matrice di difficoltà 3
    // console.log('Difficoltà 3');

    genMatrixLvl3()
    
} else {
    //restituisci messaggio di errore
    console.log('Non ha scelto');
}



//per ogni livello di difficoltà, creo una funzione che inserisce i quadrati necessari.

container = document.getElementById('container');


/**
 * Attribuisce .container1 al #container. Inserisce 100 elementi .square1 dentro al .container1 e li numera in maniera ordinata. Al click di .square1 cambia il colore, al secondo click lo rimuove.
 */
function genMatrixLvl1(){
    //inserire classe container
    

    //inserire quadrati all'interno del container
    for (let i = 1; i <= 100; i++) {
        //creo l'elemento quadrato con classe square1 (avrà dimensioni appropriate al container1)
        const squareEl = document.createElement('div');
        squareEl.className = 'square1';
        //lo inserisco come figlio di container
        container.append(squareEl);

        //inserisco l'indice di ogni casella, stampandolo al suo interno.
        const indexSquare = i;
        squareEl.append(indexSquare);


        //al click di ogni casella, la stessa diventa azzurra
            squareEl.addEventListener('click', function(){
                this.style.backgroundColor = "turquoise"
    
                this.addEventListener('click', function(){
                    this.style.backgroundColor = "inherit"
                })
            })
    }

}

function genMatrixLvl2(){
    //inserire classe per container di livello 2
    

    //inserire quadrati all'interno del container
    for (let i = 1; i <= 81; i++) {
        //creo l'elemento quadrato con classe square2 (avrà dimensioni appropriate al container1)
        const squareEl = document.createElement('div');
        squareEl.className = 'square2';
        //lo inserisco come figlio di container
        container.append(squareEl);

        //inserisco l'indice di ogni casella, stampandolo al suo interno.
        const indexSquare = i;
        squareEl.append(indexSquare);


        //al click di ogni casella, la stessa diventa azzurra
            squareEl.addEventListener('click', function(){
                this.style.backgroundColor = "turquoise"
    
                this.addEventListener('click', function(){
                    this.style.backgroundColor = "inherit"
                })
            })
    }

}

function genMatrixLvl3(){
    //inserire classe per container di livello 3
    

    //inserire quadrati all'interno del container
    for (let i = 1; i <= 49; i++) {
        //creo l'elemento quadrato con classe square3 (avrà dimensioni appropriate al container1)
        const squareEl = document.createElement('div');
        squareEl.className = 'square3';
        //lo inserisco come figlio di container
        container.append(squareEl);

        //inserisco l'indice di ogni casella, stampandolo al suo interno.
        const indexSquare = i;
        squareEl.append(indexSquare);


        //al click di ogni casella, la stessa diventa azzurra
            squareEl.addEventListener('click', function(){
                this.style.backgroundColor = "turquoise"
    
                this.addEventListener('click', function(){
                    this.style.backgroundColor = "inherit"
                })
            })
    }

}