// Q4  Form Interactions
// Write a Playwright script that finds a checkbox on a page, clicks it to check it, asserts it is checked, then clicks it again to uncheck it and asserts it is unchecked.
// 🌐 Practice Website: The Internet – Checkboxes  (https://the-internet.herokuapp.com/checkboxes)
// 💡 Hint: Use page.locator('input[type=checkbox]') and the .check() / .uncheck() methods. Verify state with expect(checkbox).toBeChecked().
// 🏷 Topics: Checkboxes  •  .check()  •  .uncheck()  •  toBeChecked()

const { test, expect } = require('@playwright/test');

test('Form Interactions - Checkbox Test', async ({ page }) => {
    // Navigate to the checkboxes page
    await page.goto('https://the-internet.herokuapp.com/checkboxes');   
    // Locate the first checkbox
    const checkbox = page.locator('input[type="checkbox"]').first();
    // Click the checkbox to check it
    await checkbox.check();
    // Assert that the checkbox is checked
    await expect(checkbox).toBeChecked();
    // Click the checkbox again to uncheck it
    await checkbox.uncheck();
    // Assert that the checkbox is unchecked
    await expect(checkbox).not.toBeChecked();
});