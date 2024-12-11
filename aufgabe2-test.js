const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

describe("E2E-Test: Dropdown-Menü auswählen", function () {
    let driver;

    before(async function () {
        driver = await new Builder().forBrowser("chrome").build();
    });

    after(async function () {
        await driver.quit();
    });

    it("sollte die Dropdown-Option 'Link One' auswählen", async function () {
        await driver.get("https://seleniumbase.io/demo_page");

        console.log("Aufgabe 2: Dropdown-Menü");

        const dropdownButton = await driver.wait(
            until.elementLocated(By.xpath("//div[@id='dropdown-btn']")),
            5000
        );
        
        const actions = driver.actions({ async: true });
        await actions.move({ origin: dropdownButton }).perform();

        const dropdownOption = await driver.wait(
            until.elementLocated(By.xpath("//a[text()='Link One']")),
            5000
        );

        await dropdownOption.click();

        // Überprüfen, ob der Text "Link One Selected" angezeigt wird
        const resultText = await driver.findElement(By.xpath("//h3")).getText();
        assert.strictEqual(resultText, "Link One Selected", "Der Text in der Überschrift stimmt nicht.");

        console.log("Dropdown-Option 'Link One' erfolgreich ausgewählt.");
    });
});