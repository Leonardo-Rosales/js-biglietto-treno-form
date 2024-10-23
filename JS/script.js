console.log('js-biglietto-treno-form');

const age = prompt("Inserisci la tua età?")
const kilometres = prompt("Inserisci chilometri da percorrere?")
const ticketPriceForKilometres = 0.21
const basicTicketPrice = kilometres * ticketPriceForKilometres
console.log ('basicTicketPrice:' , basicTicketPrice)

let discount

if (age < 17) {
	discount = basicTicketPrice * (20 / 100)
} else if (age > 65) {
	discount = basicTicketPrice * (40 / 100)
} else {
	discount = 0
}

console.log ('discount:' , discount)

const ticketPrice = basicTicketPrice - discount
console.log ('ticketPrice:' , ticketPrice.toFixed(2))
