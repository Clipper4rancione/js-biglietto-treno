// domande all'utente

const userKilometers = parseInt(prompt('Quanti km vorresti percorrere?'));
const userAge = parseInt(prompt('Quanti anni hai?'));
const priceForKm = 0.21;

let ticketPrice = (priceForKm * userKilometers);

//Input dei km inseriti in index.html
document.getElementById('km-count').innerHTML = ` 
    Il tuo percorso è lungo: ${userKilometers}km
` ;

//Input degli anni inseriti in index.html
document.getElementById('age').innerHTML = ` 
    Anni: ${userAge}
` ;

//calcolo prezzo del biglietto


//calcolo prezzo del biglietto scontato per età
if(userAge < 18){
     ticketPrice = (ticketPrice * 20 / 100)
}else if(userAge > 65){
     ticketPrice = (ticketPrice * 40 / 100)
}else{};


//output prezzo del biglietto finale
document.getElementById('result').innerHTML = `
    Il tuo biglietto costerà: ${ticketPrice}€
`;