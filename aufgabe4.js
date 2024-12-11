const { Builder, By } = require("selenium-webdriver");

(async function clickButton() {

    let driver = await new Builder().forBrowser("chrome").build();

    try {

        await driver.get("https://seleniumbase.io/demo_page");

        console.log("Aufgabe 4: Button klicken");

         
        const button = await driver.findElement(By.xpath("//button[text()='Click Me (Green)']")); // Ergänze den XPath

        await button.click();

        console.log("Button geklickt.");

    } finally {

        await driver.quit();

    }

})();
