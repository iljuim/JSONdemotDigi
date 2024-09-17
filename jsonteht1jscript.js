fetch('https://run.mocky.io/v3/7f8dcc16-e0b5-4e6a-b28b-41fd9fbdf6d4')

// Muunnetaan vastaus JSON muotoon

    .then(function(response) {
    return response.json()
})

// Käsitellään muunnettu (eli JSON muotoinen) vastaus

.then(function (responseJson) {

// Testataan onnistuuko json-luku

// jos onnistuu päivitetään tähän json-datan käsittelevän funktion kutsu

document.getElementById("vastaus").innerHTML =

"<p>Jatketaan harjoitusta</p>";

})

// Jos tuli jokin virhe

.catch(function (error) { 
    document.getElementById("vastaus").innerHTML = 
    "<p>Tietoa ei pystytä hakemaan</p>";

})