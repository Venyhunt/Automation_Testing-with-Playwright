// Q12  Assertions
// Write a Playwright script that navigates to a page with a counter, clicks the increment button 3 times, and then asserts that the counter displays the value '3'.
// 🌐 Practice Website: Playwright Demo Counter  (https://demo.playwright.dev/todomvc)
// 💡 Hint: Use a loop or three separate page.click() calls. Then use expect(locator).toHaveText('3') or toContainText() to validate the counter value.
// 🏷 Topics: toHaveText()  •  Loops in tests  •  Counting interactions  •  State assertions

const { test, expect } = require('@playwright/test');

test('Assertions - Counter Increment Test', async ({ page }) => {
    // Navigate to the counter page
    await page.goto('https://demo.playwright.dev/todomvc');
    // Locate the increment button and the counter display
    const incrementButton = page.locator('#increment');
    const counterDisplay = page.locator('#counter');
    // Click the increment button 3 times
    for (let i = 0; i < 3; i++) {
        await incrementButton.click();
    }
    // Assert that the counter displays the value '3'
    await expect(counterDisplay).toHaveText('3');
}
);