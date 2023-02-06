const verdieping = 120
const beganegrond = 80

let uitleg = "In een parkeergarage passen 80 auto's op de begane grond en 120 op een verdieping.\n"+
"Vraag het gewenste aantal auto's in de garage en bereken het aantal verdiepingen wat je nodig hebt.";

alert(uitleg);
let gewenste_aantal_autos = parseInt(prompt("Hoeveel autos wilt u kwijt in de parkeergarage?"));

console.log(gewenste_aantal_autos)
let aantal_verdiepingen = 1
gewenste_aantal_autos -= beganegrond
if (gewenste_aantal_autos > 0){
    aantal_verdiepingen += parseInt(gewenste_aantal_autos / verdieping)
}

console.log(aantal_verdiepingen)

let antwoord = "aantal verdiepingen: " +Math.round(aantal_verdiepingen);
document.getElementById("antwoord").innerText = antwoord;
