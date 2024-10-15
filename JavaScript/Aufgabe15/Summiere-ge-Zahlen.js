function summeGeradeZahlen() {
  // Initialisiere die Variable 'summe' mit 0
  let summe = 0;

  // Initialisiere die Variable 'zahl' mit 1
  let zahl = 1;

  // Do-while Schleife, die ausgeführt wird, solange 'zahl' kleiner oder gleich 100 ist
  do {
    // Überprüfe, ob die Zahl gerade ist (Restwert bei Division durch 2 ist 0)
    if (zahl % 2 === 0) {
      // Füge die gerade Zahl zur Summe hinzu
      summe += zahl;
    }

    // Erhöhe die Zahl um 1
    zahl++;
  } while (zahl <= 100);  // Wiederhole die Schleife, solange 'zahl' kleiner oder gleich 100 ist

  // Gib die berechnete Summe zurück
  return summe;
}

// Ausgabe des Ergebnisses in der Konsole
console.log("Die Summe der geraden Zahlen von 1 bis 100 ist: " + summeGeradeZahlen());