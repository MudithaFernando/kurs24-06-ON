// Pakete importieren
import catFacts from 'cat-facts';
import inquirer from 'inquirer';
import boxen from 'boxen';
import chalk from 'chalk';

// Funktion zur Anzeige eines Katzenfakts
function showCatFact() {
    const fact = catFacts.random(); // Zufälliger Katzenfakt
    const factBox = boxen(chalk.green(fact), { padding: 3, margin: 2, borderStyle: 'double' });
    console.log(factBox); // Katzenfakt in einer Box anzeigen
}

// Funktion zur Abfrage des Benutzernamens
async function askForUsername() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'Wie ist dein Name?',
        },
    ]);
    return answers.username; // Benutzername zurückgeben
}

// Funktion für die Benutzerinteraktion
async function askForNewCatFact() {
    const answers = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'getFact',
            message: 'Möchtest du einen zufälligen Katzenfakt sehen?',
            default: true,
        },
    ]);
    
    if (answers.getFact) {
        showCatFact();
        await askForNewCatFact(); // Fragt erneut, ob ein weiterer Fakt angezeigt werden soll
    } else {
        console.log(chalk.yellow('Danke, dass du das Programm genutzt hast!'));
        process.exit(0); // Programm beenden
    }
}

// Hauptfunktion
async function main() {
    const username = await askForUsername(); // Benutzernamen abfragen
    console.log(chalk.blue(`Willkommen, ${username}, zu deinem Katzenfakt-Tool!`));
    await askForNewCatFact(); // Starte die Benutzerinteraktion
}

// Hauptfunktion aufrufen
main();