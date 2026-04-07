// Q2  User Actions
// Write a Playwright script that hovers over a menu item on a webpage so that a hidden dropdown appears, then clicks one of the links inside the dropdown.
// 🌐 Practice Website: The Internet – Hovers Page  (https://the-internet.herokuapp.com/hovers)
// 💡 Hint: Use page.hover() to trigger the hover state and then page.click() on the revealed element. You may need a short wait after hovering.
// 🏷 Topics: page.hover()  •  page.click()  •  CSS :hover state  •  Visibility

const { test, expect } = require('@playwright/test');

test('User Actions - Hover and Click Test', async ({ page }) => {
    // Navigate to the hovers page
    await page.goto('https://the-internet.herokuapp.com/hovers');
    await page.hover('.figure:nth-child(3)'); 
    // Click on the revealed link after hovering
    await page.click('.figure:nth-child(3) .figcaption a');
    // Verify that the correct page is loaded by checking the URL or page content   
    const url = page.url();
    expect(url).toContain('/users/3');
});

