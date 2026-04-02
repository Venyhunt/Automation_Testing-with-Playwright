const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const ButtonsPage = require('../pages/ButtonsPage');

test(' script 2: Verify user navigates to Elements page after clicking Elements card', async ({ page }) => {
  const homePage = new HomePage(page);

  // Open DemoQA home page
  await page.goto('https://demoqa.com/');

  // Click Elements card
  await homePage.clickElementsCard();

  // Assert URL contains 'elements'
  await expect(page).toHaveURL(/.*elements/);

  // Step 4: Click the 'Text Box' link in the left sidebar
  await homePage.clickTextBoxMenuItem();
});

test(' script 1: Verify user can click Click Me button on Buttons page', async ({ page }) => {
    const buttonsPage = new ButtonsPage(page);
    // Open DemoQA home page    
    await page.goto('https://demoqa.com/buttons');
    // Click Click Me button
    await buttonsPage.clickClickMeButton(); 
    //assert a message apears after clicking the button
    const message = page.locator('#dynamicClickMessage');
    await expect(message).toBeVisible();
    await expect(message).toHaveText('You have done a dynamic click');
  });