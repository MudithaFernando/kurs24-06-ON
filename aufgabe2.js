const { Builder, By } = require("selenium-webdriver");

(async function selectDropdownOption() {
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get("https://seleniumbase.io/demo_page");

        console.log("Aufgabe 2: Dropdown-Menü");

        // XPath für den Dropdown-Button
        const dropdownButton = await driver.findElement(By.xpath("//div[@id='dropdown-btn']"));

        const actions = driver.actions({ async: true });

        // Maus über das Dropdown-Element bewegen
        await actions.move({ origin: dropdownButton }).perform();

        // XPath für die Option "Link One"
        const dropdownOption = await driver.findElement(By.xpath("//a[text()='Link One']"));

        // Die Dropdown-Option "Link One" auswählen
        await dropdownOption.click();

        console.log("Dropdown-Option 'Link One' ausgewählt.");
    } finally {
        await driver.quit();
    }

    
})();
