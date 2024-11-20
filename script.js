//1.Chiedere all'utente di inserire parola
//2.creare funzione per capire se palindroma
const parola = prompt('inserisci una parola');
let message;
if (parola.toLocaleLowerCase() === palindroma(parola)) {
  message = 'la parola è girata'
} else {
  message = 'la parola non è girata'
}

let palindroma = '';

function reverse(palindroma) {
  for (let i = parola.length - 1; i >= 0; i--) {
    palindroma += word[i]
  }
  return palindroma
}
console.log(reverse(palindroma));

//soluzione migliorata
/* 

/*prompt per inserire parola, variabile vuota per costruire la parola al contrario, funzione per invertire la parola, ciclo for per fare la parola al contrario, dove parola.lenght vede la launghezza fino al primo carattere con indice 0, at prende il carattere (i), ad ogni ripetizione il carattere viene aggiunto alla stringa palindroma con +=, return restituisce stringa una volta completato ciclo*/


/*3. utente sceglie pari o dispari inserire un numero da 1 a 5 generare un numero random 1 a 5 (funzione)*/
const numeroGiocatore = parseInt(prompt('inserisci un numero da 1 a 5'));
const numeroComputer = getRandomNumberandom(1, 5);
const total = somma(numeroGiocatore, numeroComputer);


function getRandomNumber() {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


//5. somma i due numeri
function total(numero1, numero2) {
  let somma = numero1 + numero2;
}

//6. stabilire se la somma è pari o dispari con una funzione