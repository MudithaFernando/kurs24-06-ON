const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

describe("E2E Test für Demo Page", function () {
    let driver;

    before(async function () {
        this.timeout(10000); // Timeout auf 10 Sekunden erhöhen
        driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://seleniumbase.io/demo_page");
    });

    after(async function () {
        await driver.quit();
    });

    it("Aufgabe 1: Hauptüberschrift finden", async function () {
        const header = await driver.wait(until.elementLocated(By.xpath("//h1[text()='Demo Page']")), 5000);
        const headerText = await header.getText();
        assert.strictEqual(headerText, "Demo Page", "Hauptüberschrift stimmt nicht überein.");
    });
});