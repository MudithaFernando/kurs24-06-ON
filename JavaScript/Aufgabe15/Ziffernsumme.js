function ziffernSumme(zahl) {
    // Initialisiere die Variable "summe" mit 0
    let summe = 0;

    // Do-while Schleife, die ausgeführt wird, solange "zahl" größer als 0 ist
    do {
        // Addiere die letze Ziffer der Zahl zur Summe
      summe += zahl % 10;  // '%' Operator gibt den Restwert der Division zurück.
      // Entferne die letzte Ziffer
      zahl = Math.floor(zahl / 10);  // Math.floor() rundet die Zahl ab, um die letzte Ziffer zu entfernen
    } while (zahl > 0);  // Wiederhole die Schleife, solange 'zahl' größer als 0 ist
    
    // Gib die berechnete Summe der Ziffern zurück
    return summe;
  }
  
  // Beispielaufruf der Funktion und Ausgabe des Ergebnisses in der Konsole
  console.log (ziffernSumme(248));  