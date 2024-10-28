const fs = require('fs');
const readlineSync = require('readline-sync');

// 1. Benutzer nach dem Dateinamen fragen
const fileName = readlineSync.question('Gib den Namen der Datei ein: ');

// 2. Benutzer nach einer Nachricht fragen
const message = readlineSync.question('Gib die Nachricht ein, die in die Datei geschrieben werden soll: ');

try {
  // 3. Nachricht in die Datei schreiben oder anhängen
  fs.appendFileSync(fileName, `${message}\n`);
  console.log('Nachricht erfolgreich hinzugefügt.');
} catch (err) {
  console.error('Fehler beim Schreiben in die Datei:', err);
}