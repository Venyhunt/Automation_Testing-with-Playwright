// Q11  Assertions
// Write a Playwright script that navigates to a page, locates an element with a specific text, and asserts that: (a) the element is visible, (b) it contains the expected text, and (c) it has a specific CSS class.
// 🌐 Practice Website: DemoQA Elements  (https://demoqa.com/elements)
// 💡 Hint: Use expect(locator).toBeVisible(), expect(locator).toContainText(), and expect(locator).toHaveClass() for the three assertions.
// 🏷 Topics: toBeVisible()  •  toContainText()  •  toHaveClass()  •  Multiple assertions

const { test, expect } = require('@playwright/test');

test('Assertions - Element Visibility, Text, and Class Test', async ({ page }) => {
    // Navigate to the elements page
    await page.goto('https://demoqa.com/elements');
    // Locate the element with specific text (e.g., "Text Box")
    const textBoxElement = page.locator('.element-list .menu-list li').filter({ hasText: 'Text Box' });
    // Assert that the element is visible
    await expect(textBoxElement).toBeVisible();
    // Assert that the element contains the expected text
    await expect(textBoxElement).toContainText('Text Box');
    // Assert that the element has a specific CSS class (e.g., "menu-list")
    await expect(textBoxElement).toHaveClass(/menu-list/);
});