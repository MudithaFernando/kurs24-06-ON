const { Builder, By } = require("selenium-webdriver");

(async function findHeader() {

    let driver = await new Builder().forBrowser("chrome").build();

    try {

        await driver.get("https://seleniumbase.io/demo_page");

        console.log("Aufgabe 1: Hauptüberschrift finden");

        
        const header = await driver.findElement(By.xpath("//h1[text()='Demo Page']")); // Ergänze den XPath

        console.log("Gefundene Überschrift:", await header.getText());

    } finally {

        //await driver.quit();

    }

})();

