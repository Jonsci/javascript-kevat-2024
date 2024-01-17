//Palvelut sivun näyttäminen
function palvelut() {
    let palvelut = `<h2> Palvelumme </h2>
    <p>Eläinlääkäri</p>
    <p>Päivähoito</p>
    <p>Yöhoito</p>
    
    `
    document.getElementById("sisältö").innerHTML = palvelut
}

//Yhteystiedot
function yhteystiedot() {

    document.getElementById("sisältö").innerHTML = ""
    var h = document.createElement("h2");            //var muuttuja h on otsikko (h2)
    var t = document.createTextNode("Yhteystiedot"); //var muuttuja t on teksti (Yhteystiedot)
    h.appendChild(t);
    var sisältö = document.getElementById("sisältö")
    sisältö.appendChild(h)

    var puhelin = document.createElement("h4");           
    var puhteksti = document.createTextNode("P. 0503523532524"); 
    puhelin.appendChild(puhteksti);
    sisältö.appendChild(puhelin)
}


function tumma() {
    document.getElementById("sivu").style.backgroundColor = "black"
    document.getElementById("sivu").style.color = "yellow"
    localStorage.setItem("teema", "tumma")

}

function vaalea() {
    document.getElementById("sivu").style.backgroundColor = "white"
    document.getElementById("sivu").style.color = "black"
    localStorage.setItem("teema", "vaalea")

}
 //Suoritetaan aina alussa
if (localStorage.getItem("teema") == "tumma") {
    tumma()
 }

 else {
    vaalea()
 }