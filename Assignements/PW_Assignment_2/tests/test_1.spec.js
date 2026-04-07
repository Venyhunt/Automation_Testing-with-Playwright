// Q1  User Actions
// Write a Playwright script that opens a browser, navigates to a demo login page, finds the username and password input fields, types credentials into them, and clicks the Login button.
// 🌐 Practice Website: The Internet (Herokuapp)  (https://the-internet.herokuapp.com/login)
// 💡 Hint: Use page.goto(), page.fill(), and page.click() methods. Look for input[name='username'] and input[name='password'] selectors.
// 🏷 Topics: page.goto()  •  page.fill()  •  page.click()  •  CSS Selectors

const { test, expect } = require('@playwright/test');

test('User Actions - Login Test', async ({ page }) => {
    // Navigate to the demo login page  
    await page.goto('https://the-internet.herokuapp.com/login');

    // Fill in the username and password fields
    await page.fill('input[name="username"]', 'tomsmith');
    await page.fill('input[name="password"]', 'SuperSecretPassword!');

    // Click the Login button
    await page.click('button[type="submit"]');  
    // Verify that the login was successful by checking for a success message
    const successMessage = await page.locator('#flash').textContent();
    expect(successMessage).toContain('You logged into a secure area!');
});