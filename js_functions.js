// Snack 1 ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈
function somma(numb1, numb2) {
    return numb1 + numb2
};

// console.log(somma(3, 5));

const somma1 = function () {

};

const somma2 = () => { };

// SNACK 2 ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

const quadrato = (squared) => { return squared * squared };
// console.log(quadrato(5))

// SNACK 3 ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈
const sottrazione = (numero, number) => numero - number;
const divisione = (numero, number) => numero / number;

const eseguiOperazione = (numero, number, callback) => callback(numero, number);

// console.log(eseguiOperazione(10, 3, sottrazione)); 
// console.log(eseguiOperazione(16, 4, divisione));

// SNACK 4 ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

function creaTimer(timer) {
    return function () {
        setTimeout(() => {
            // console.log("Tempo scaduto!")
        },timer);
    }
}
// creaTimer(1000)();
const time = creaTimer(1000);
time();

// SNACK 5 ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

const stampaOgniSecondo = m => setInterval(() => /*console.log(m)*/ 1000);

// Chiamata della funzione:
const id = stampaOgniSecondo("Ciao, mondo!");

setTimeout(() => {
    clearInterval(id);
    //console.log("Intervallo interrotto");
}, 5000);

// SNACK 6 ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

function creaContatoreAutomatico(intervallo) {
    return function() {
        let contatore = 0;
        setInterval(() => {
            contatore++;
            //console.log(contatore);
        }, intervallo);
    }
}

creaContatoreAutomatico(1000)();

// SNACK 7 ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

function eseguiEferma(avvio, stop, messaggio) {
    const interval = setInterval(() => {
        console.log(messaggio);
    }, avvio)

    setTimeout(() => {
        clearInterval(interval);
        console.log("Timer stoppato");
    }, stop)
}

eseguiEferma(1000, 5000, "Timer avviato")