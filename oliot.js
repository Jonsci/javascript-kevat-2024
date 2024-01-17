const autot = [{id: 1, merkki: "Toyota", vuosimalli: 2000, hinta: 4500}, 
{id: 2, merkki: "BMW", vuosimalli: 1986, hinta: 35000}, 
{id: 3, merkki: "Lada", vuosimalli: 1991, hinta: 5}]

var hakusana = ""

var standard_input = process.stdin;
standard_input.setEncoding('utf-8')

console.log("JavaScript autohaku")
console.log("Sovellus suljetaan kirjoittamalla 'exit'")

process.stdout.write("Hae autoja merkkillä: ")

standard_input.on('data', function (data) {
    // Sovellus suljetaan, kun käyttäjä antaa avainsanan "exit"
    if (data.trim() === 'exit') {
        console.log("Kiitos ja näkemiin")
        process.exit();
    } else {
        var hakusana = data.trim()
        autot.forEach(function (a) {
            if (a.merkki.toLowerCase().includes(hakusana.toLowerCase())) {
                console.log("Merkki: " + a.merkki + ", vm. " + a.vuosimalli + ", Hinta: " + a.hinta)
            }
        })
    }
})
    

//forEach käy läpi jokaisen auton
// autot.forEach(auto => {
//     //Black friday: poista kommentti
//     //auto.hinta = 100

//     console.log(auto.merkki + " vuodelta " + auto.vuosimalli)
//     console.log("Hinta: " + auto.hinta)
//     console.log("_____________________________________________")
// }
// )

// autot.forEach(auto => {
//     if (auto.id === 3) {
//     console.log("Auto id:llä " + auto.id + " on LUJAA LAATUA " + auto.merkki )
//     console.log("_____________________________________________")
//     }
// }
// )

