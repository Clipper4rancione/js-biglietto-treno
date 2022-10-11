// domande all'utente

const userKilometers = parseInt(prompt('Quanti km vorresti percorrere?'));
const userAge = parseInt(prompt('Quanti anni hai?'));
const priceForKm = 0.21;

//Input dei km inseriti in index.html
document.getElementById('km-count').innerHTML = ` 
    Il tuo percorso è lungo: ${userKilometers}km
` ;

//Input degli anni inseriti in index.html
document.getElementById('age').innerHTML = ` 
    Anni: ${userAge}
` ;

//calcolo prezzo del biglietto
let ticketPrice = (priceForKm * userKilometers);

//calcolo prezzo del biglietto scontato per età
if(userAge <= 17){
    let ticketPrice = (priceForKm * userKilometers * 20 / 100)
}else


//output prezzo del biglietto finale
document.getElementById('result').innerHTML = `
    Il tuo biglietto costerà: ${ticketPrice}€
`;