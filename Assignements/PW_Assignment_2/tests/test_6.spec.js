// Q6  Form Interactions
// Write a Playwright script that locates a group of radio buttons on a page, selects one specific radio button by clicking it, and then asserts that it is the selected option.
// 🌐 Practice Website: DemoQA Radio Buttons  (https://demoqa.com/radio-button)
// 💡 Hint: Use page.locator() to find the radio input and .check() to select it. Use toBeChecked() to confirm it was selected.
// 🏷 Topics: Radio Buttons  •  .check()  •  toBeChecked()  •  Input types
const { test, expect } = require('@playwright/test');

test('Form Interactions - Radio Button Test', async ({ page }) => { 
    // Navigate to the radio buttons page
    await page.goto('https://demoqa.com/radio-button'); 
    // Locate the 'Yes' radio button and select it
    const yesRadioButton = page.locator('input[type="radio"][value="yes"]');
    await yesRadioButton.check();
    // Assert that the 'Yes' radio button is selected
    await expect(yesRadioButton).toBeChecked();
});
