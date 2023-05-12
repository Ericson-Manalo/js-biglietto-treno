//> Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. 
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: 

//    il prezzo del biglietto è definito in base ai km (0.21 € al km)
//    va applicato uno sconto del 20% per i minorenni
//    va applicato uno sconto del 40% per gli over 65. 
// L'output del prezzo finale va messo fuori in forma umana in pagina (con massimo due decimali, per indicare centesimi sul prezzo).


const kmToDo = parseInt(prompt('Inserisci quanti km devi percorrere'));

const userAge = parseInt(prompt('Inserisci la tua età'));

const priceForKm = 0.21;

let fullPrice = kmToDo * priceForKm;

let discountMinorAge = (20 / 100) * fullPrice;

let finalDiscMinAge = fullPrice - discountMinorAge;
console.log("importo scontato del 20% " + finalDiscMinAge);

let discountSeniorAge = (40 / 100) * fullPrice;
let finalDiscSeniorAge = fullPrice - discountSeniorAge;
console.log("importo al netto dello sconto " + finalDiscSeniorAge);

let result;

if (userAge < 18){
    result = finalDiscMinAge;
}else if (userAge > 65){
    result = finalDiscSeniorAge;
}
else{
    result = fullPrice;
}

document.getElementById("output").innerHTML += result;