const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

describe("E2E-Test: Textfeld ausfüllen", function () {
    let driver;

    before(async function () {
        driver = await new Builder().forBrowser("chrome").build();
    });

    after(async function () {
        await driver.quit();
    });

    it("sollte das Textfeld mit 'Automatisierter Test' ausfüllen", async function () {
        await driver.get("https://seleniumbase.io/demo_page");

        const textField = await driver.findElement(By.xpath("//input[@id='myTextInput']"));
        const inputText = "Automatisierter Test";

        await textField.sendKeys(inputText);

        // Überprüfen, ob der Text korrekt ist
        const value = await textField.getAttribute("value");
        assert.strictEqual(value, inputText, "Der eingegebene Text stimmt nicht.");

        console.log("Textfeld erfolgreich ausgefüllt.");
    });
});