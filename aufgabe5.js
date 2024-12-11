const { Builder, By } = require("selenium-webdriver");

(async function selectCheckboxes() {

    let driver = await new Builder().forBrowser("chrome").build();

    try {

        await driver.get("https://seleniumbase.io/demo_page");

        console.log("Aufgabe 5: Checkboxen auswählen");

        
        const checkboxes = await driver.findElements(By.xpath("//input[@type='checkbox']")); // Ergänze den XPath

        for (const checkbox of checkboxes) {

            if (!(await checkbox.isSelected())) {

                await checkbox.click();

            }

        }

        console.log("Alle Checkboxen ausgewählt.");

    } finally {

        //await driver.quit();

    }

})();
