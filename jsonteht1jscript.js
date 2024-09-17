fetch('https://run.mocky.io/v3/93d4a974-2461-4ed5-923b-b51ce7251edb')

// Muunnetaan vastaus JSON muotoon

})

// Käsitellään muunnettu (eli JSON muotoinen) vastaus

.then(function (responseJson) {

// Testataan onnistuuko json-luku

// jos onnistuu päivitetään tähän json-datan käsittelevän funktion kutsu

document.getElementById("vastaus").innerHTML =

"<p>Jatketaan harjoitusta</p>";

})

// Jos tuli jokin virhe

.catch(function (error) { document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";

})