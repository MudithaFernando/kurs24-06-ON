function bestimmeKategorie(alter) {
    console.log(`Dein Alter ist: ${alter}`);

    if (alter >= 0 && alter <= 12) {
        console.log("Du bist ein Kind!");
    } else if (alter >= 13 && alter <= 17) {
        console.log("Du bist ein Jugendlicher!");
    } else if (alter >= 18 && alter <= 64) {
        console.log("Du bist ein Erwachsener!");
    } else if (alter >= 65) {
        console.log("Du bist ein Senior im Rentenalter!");
    } else {
        console.log("Ungültiges Alter!");
    }
}

// Beispielaufrufe
bestimmeKategorie(2);   // Dein Alter ist: 2 Du bist ein Kind!
bestimmeKategorie(91);  // Dein Alter ist: 91 Du bist ein Senior im Rentenalter!
bestimmeKategorie(93);  // Dein Alter ist: 93 Du bist ein Senior im Rentenalter!

