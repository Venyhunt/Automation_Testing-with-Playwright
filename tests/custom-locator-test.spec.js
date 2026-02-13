const {test, expect}=require("@playwright/test");
const { text } = require("node:stream/consumers");

test("Playwright Special Locators",async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");

}
);