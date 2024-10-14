// mit möglichen Wetterlagen
const wetterlagen = ["Sonnig", "Regnerisch", "Schnee", "Windig"];

// Funktion, die eine zufällige Wetterlage zurückgibt
function getRandomWeather() {
    const zufallsIndex = Math.floor(Math.random() * wetterlagen.length);
    return wetterlagen[zufallsIndex]; // Gibt eine zufällige Wetterlage zurück
}

// Funktion, die die Wetterlage interpretiert und eine Aktivität vorschlägt
function interpretiereWetter() {
    // Holt sich die Wetterlage aus der Funktion getRandomWeather()
    let wetterlage = getRandomWeather();
    console.log('Die Wetterlage ist: ' + wetterlage);

    // Switch-case-Anweisung zur Vorschlag der Aktivität
    switch (wetterlage) {
        case "Sonnig":
            console.log("Gehe spazieren");
            break;
        case "Regnerisch":
            console.log("Bleibe zu Hause und lese ein Buch");
            break; 
        case "Schnee":
            console.log("Baue einen Schneemann");
            break;
        case "Windig":
            console.log("Fliege einen Drachen");
            break;
        default:
            console.log("Unbekannte Wetterlage");        
    }
}

// Funktionsaufruf (Hiermit siehst du die console.log-Befehle im Terminal!)
interpretiereWetter();