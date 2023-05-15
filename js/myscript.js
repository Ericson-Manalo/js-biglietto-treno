//> Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. 
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: 

//    il prezzo del biglietto è definito in base ai km (0.21 € al km)
//    va applicato uno sconto del 20% per i minorenni
//    va applicato uno sconto del 40% per gli over 65. 
// L'output del prezzo finale va messo fuori in forma umana in pagina (con massimo due decimali, per indicare centesimi sul prezzo).


const kmToDo = parseInt(prompt('Inserisci quanti km devi percorrere'));

document.getElementById("km").innerHTML += kmToDo;

const userAge = parseInt(prompt('Inserisci la tua età'));

document.getElementById("user-age").innerHTML += userAge;

const priceForKm = 0.21;

let fullPrice = kmToDo * priceForKm;


let discountMinorAge = (20 / 100) * fullPrice;
let finalDiscMinAge = fullPrice - discountMinorAge;
console.log("importo finale con eventuale sconto del 20% per età compresa tra 1 e 17 anni " + finalDiscMinAge.toFixed( 2 ));

let discountSeniorAge = (40 / 100) * fullPrice;
let finalDiscSeniorAge = fullPrice - discountSeniorAge;
console.log("importo finale con eventuale sconto del 40% per età dopo i 66 anni " + finalDiscSeniorAge.toFixed( 2 ));

let result;

if (userAge < 18){
    result = (finalDiscMinAge.toFixed( 2 )+'€');
}else if (userAge > 65){
    result = (finalDiscSeniorAge.toFixed( 2 )+'€');
}else{
    result = (fullPrice.toFixed( 2 )+'€');
}

document.getElementById("output").innerHTML += result;