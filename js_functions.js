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

function creaTimer(time) {
    return function () {
        setTimeout(() => {
            // console.log("Tempo scaduto!")
        },time);
    }
}
// creaTimer(1000)();
const tempo = creaTimer(1000);
tempo();

// SNACK 5 ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

