const email = "Akseli.vonKujala@yritysoy.fi"

var osoitteenOsat = email.split('@')
var kokonimiPisteella = osoitteenOsat[0]
var kokonimi = kokonimiPisteella.split('.')
var etunimi = kokonimi [0]
var sukunimi = kokonimi [1]

console.log("Etunimi: " + etunimi)
console.log("Sukunimi " + sukunimi)

if (sukunimi.indexOf("v") === 0) {
    console.log("Sukunimi alkaa v:llä")
}
