const fs = require('fs').promises;
const readline = require('readline');

// Interface für die asynchrone Benutzereingabe erstellen
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Promisified question-Funktion für asynchrone Eingabe
function questionAsync(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function writeOrAppendToFile() {
  try {
    // 1. Benutzer nach dem Dateinamen fragen
    const fileName = await questionAsync('Gib den Namen der Datei ein: ');
    // 2. Benutzer nach einer Nachricht fragen
    const message = await questionAsync('Gib die Nachricht ein, die in die Datei geschrieben werden soll: ');

    // 3. Nachricht in die Datei schreiben oder anhängen
    await fs.appendFile(fileName, `${message}\n`);
    console.log('Nachricht erfolgreich hinzugefügt.');

  } catch (err) {
    console.error('Fehler beim Schreiben in die Datei:', err);
  } finally {
    rl.close(); // Schließt das Interface für die Benutzereingabe
  }
}

// Funktion aufrufen
writeOrAppendToFile();