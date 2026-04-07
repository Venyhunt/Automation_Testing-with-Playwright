const { test, expect } = require('@playwright/test');
const SelectMenuPage = require('../pages/SelectMenuPage');

test('Script 5: Select from a Native HTML Dropdown', async ({ page }) => {
  const selectMenuPage = new SelectMenuPage(page);

  // Step 1: Open the URL
  await page.goto('https://demoqa.com/select-menu');

  // Step 2 & Step 3: Select 'Purple'
  await selectMenuPage.selectOldStyleOption('Purple');

  // Step 4: Assert 'Purple' is selected
  let selectedOption = await selectMenuPage.getSelectedOldStyleOptionText();
  expect(selectedOption.trim()).toBe('Purple');

  // Step 5: Change selection to 'Magenta'
  await selectMenuPage.selectOldStyleOption('Magenta');

  // Step 6: Assert 'Magenta' is selected
  selectedOption = await selectMenuPage.getSelectedOldStyleOptionText();
  expect(selectedOption.trim()).toBe('Magenta');
});



test('Script 6: Select from a Custom Styled Dropdown', async ({ page }) => {
  const selectMenuPage = new SelectMenuPage(page);

  // Step 1: Open the URL
  await page.goto('https://demoqa.com/select-menu');

  // Step 2 & Step 3: Select 'Group 1, option 1'
  await selectMenuPage.selectValueOption('Group 1, option 1');

  // Step 4: Assert dropdown displays selected value
  await expect(selectMenuPage.selectValueDropdown).toContainText('Group 1, option 1');

  // Step 5: Re-open dropdown and select 'Group 2, option 1'
  await selectMenuPage.selectValueOption('Group 2, option 1');

  // Step 6: Assert displayed value updates correctly
  await expect(selectMenuPage.selectValueDropdown).toContainText('Group 2, option 1');
});