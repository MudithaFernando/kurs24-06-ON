// Deklaration der Zahlen
let zahl1 = 10;
let zahl2 = '10'; // Diese Zahl ist ein String

// Vergleich mit dem == Operator (lose Gleichheit)
let istGleichLose = (zahl1 == zahl2);
console.log(`Vergleich mit ==: ${zahl1} == ${zahl2} ergibt:`, istGleichLose); // Ausgabe: true

// Vergleich mit dem === Operator (strikte Gleichheit)
let istGleichStrikt = (zahl1 === zahl2);
console.log(`Vergleich mit ===: ${zahl1} === ${zahl2} ergibt:`, istGleichStrikt); // Ausgabe: false
