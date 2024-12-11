const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

describe("E2E-Test: Button klicken", function () {
    let driver;

    before(async function () {
        driver = await new Builder().forBrowser("chrome").build();
    });

    after(async function () {
        await driver.quit();
    });

    it("sollte den Button klicken und den Text ändern", async function () {
        await driver.get("https://seleniumbase.io/demo_page");

        const button = await driver.findElement(By.xpath("//button[@id='myButton']"));
        await button.click();

        // Überprüfen, ob der Buttontext geändert wurde
        const buttonText = await button.getText();
        assert.strictEqual(buttonText, "Click Me (Purple)", "Der Buttontext hat sich nicht geändert.");

        console.log("Buttontext erfolgreich geändert.");
    });
});