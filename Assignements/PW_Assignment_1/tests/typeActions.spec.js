const { test, expect } = require('@playwright/test');
const TextBoxPage = require('../pages/TextBoxPage');
const AutoCompletePage = require('../pages/AutoCompletePage');

  test('Script 3: Fill a Text Box Form and Submit', async ({ page }) => {
    const textBoxPage = new TextBoxPage(page);

    const fullName = 'John Doe';
    const email = 'john@example.com';
    const currentAddress = '123 Main Street, Mumbai';
    const permanentAddress = '456 Park Avenue, Delhi';

    // Step 1: Open the URL in the browser
    await page.goto('https://demoqa.com/text-box');

    // Step 2 to Step 5: Fill all fields
    await textBoxPage.fillTextBoxForm(
      fullName,
      email,
      currentAddress,
      permanentAddress
    );

    // Step 6: Click Submit
    await textBoxPage.clickSubmit();

    // Step 7: Assert output section appears
    await expect(textBoxPage.outputSection).toBeVisible();

    // Assert output contains entered name and email
    await expect(textBoxPage.nameOutput).toContainText(fullName);
    await expect(textBoxPage.emailOutput).toContainText(email);
  });


test('Script 4: Type in Autocomplete Field – Select Suggestion', async ({ page }) => {
  const autoCompletePage = new AutoCompletePage(page);

  // Step 1: Open the URL in the browser
  await page.goto('https://demoqa.com/auto-complete');

  // Step 2: Click the input box
  await autoCompletePage.clickMultipleColorInput();

  // Step 3: Type 'Red' slowly
  await autoCompletePage.typeColorSlowly('Red');

  // Step 4: Wait for dropdown suggestion list to appear
  await expect(autoCompletePage.redOption).toBeVisible();

  // Step 5: Click on the first option that shows 'Red'
  await autoCompletePage.clickRedSuggestion();

  // Step 6: Assert the 'Red' badge/tag appears
  await expect(autoCompletePage.redBadge).toBeVisible();
  await expect(autoCompletePage.redBadge).toHaveText('Red');
});

test('Script 9: Input Box — Fill, Clear and Verify', async ({ page }) => {
  const textBoxPage = new TextBoxPage(page);

  await page.goto('https://demoqa.com/text-box');

  await expect(textBoxPage.fullNameInput).toHaveAttribute('placeholder', 'Full Name');

  await textBoxPage.fillFullName('Wrong Name');
  await textBoxPage.clearFullName();
  await expect(textBoxPage.fullNameInput).toHaveValue('');

  await textBoxPage.fillFullName('Jane Smith');
  await expect(textBoxPage.fullNameInput).toHaveValue('Jane Smith');

  await expect(textBoxPage.emailInput).toBeVisible();
  await expect(textBoxPage.emailInput).toBeEnabled();
});