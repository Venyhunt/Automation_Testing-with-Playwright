const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

  test(' script 10.1 :Valid login with correct credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Step 1: Open the URL in the browser
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // Step 2: Assert the Username input box is visible on the page
    await expect(loginPage.usernameInput).toBeVisible();

    // Step 3: Type 'student' into the Username input box
    // Step 4: Type 'Password123' into the Password input box
    // Step 5: Click the Submit button
    await loginPage.login('student', 'Password123')

    // Step 6: Assert the heading 'Logged In Successfully' is visible
    await expect(loginPage.successHeading).toBeVisible();
    await expect(loginPage.successHeading).toHaveText('Logged In Successfully');

    // Step 7: Assert the Log out button is visible after login
    await expect(loginPage.logoutButton).toBeVisible();
  });

  test(' script 10.2: Invalid login with wrong credentials shows error message', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Step 8: Run a second test: enter wrong credentials and assert the error message appears
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await expect(loginPage.usernameInput).toBeVisible();

    await loginPage.login('wrongUser', 'wrongPassword');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Your username is invalid!');
  });

