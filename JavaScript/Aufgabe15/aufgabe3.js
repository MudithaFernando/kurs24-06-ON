// Vorgabedaten
const arr = [10, 23, 35, 47, 52, 66, 71, 88, 90];
const schwellenwert = 50;

// Implementierung mit einer for-Schleife
function countForSchleife(arr, schwellenwert) {
  let count = 0;
  // Iteriere durch jedes Element im Array
  for (let i = 0; i < arr.length; i++) {
    // Überprüfe, ob das Element größer als der Schwellenwert ist
    if (arr[i] > schwellenwert) {
      count++;  // Erhöhe den Zähler, wenn die Bedingung erfüllt ist
    }
  }
  return count;  // Gib die Anzahl der Elemente zurück, die die Bedingung erfüllen
}

// Implementierung mit einer while-Schleife
function countWhileSchleife(arr, schwellenwert) {
  let count = 0;
  let i = 0;
  // Iteriere, solange der Index kleiner als die Länge des Arrays ist
  while (i < arr.length) {
    // Überprüfe, ob das Element größer als der Schwellenwert ist
    if (arr[i] > schwellenwert) {
      count++;  // Erhöhe den Zähler, wenn die Bedingung erfüllt ist
    }
    i++;  // Erhöhe den Index
  }
  return count;  // Gib die Anzahl der Elemente zurück, die die Bedingung erfüllen
}

// Implementierung mit einer do-while-Schleife
function countDoWhileSchleife(arr, schwellenwert) {
  let count = 0;
  let i = 0;
  // Stelle sicher, dass die Schleife mindestens einmal ausgeführt wird
  do {
    // Überprüfe, ob das Element größer als der Schwellenwert ist
    if (arr[i] > schwellenwert) {
      count++;  // Erhöhe den Zähler, wenn die Bedingung erfüllt ist
    }
    i++;  // Erhöhe den Index
  } while (i < arr.length);  // Wiederhole, solange der Index kleiner als die Länge des Arrays ist
  return count;  // Gib die Anzahl der Elemente zurück, die die Bedingung erfüllen
}

// Test der Funktionen
console.log("Anzahl der Elemente größer als " + schwellenwert + " (for-Schleife): " + countForSchleife(arr, schwellenwert));
console.log("Anzahl der Elemente größer als " + schwellenwert + " (while-Schleife): " + countWhileSchleife(arr, schwellenwert));
console.log("Anzahl der Elemente größer als " + schwellenwert + " (do-while-Schleife): " + countDoWhileSchleife(arr, schwellenwert));