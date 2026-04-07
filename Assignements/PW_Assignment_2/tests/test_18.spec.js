// Q18  Alerts & Dialogs
// Write a Playwright script that triggers a JavaScript confirm popup, dismisses it (clicks Cancel), and then asserts that the page shows a message indicating the user clicked Cancel.
// 🌐 Practice Website: The Internet – JavaScript Alerts  (https://the-internet.herokuapp.com/javascript_alerts)
// 💡 Hint: Use page.on('dialog', dialog => dialog.dismiss()) to click Cancel on the confirm box. Then verify the result text on the page using toContainText('cancel').
// 🏷 Topics: dialog.dismiss()  •  Confirm dialogs  •  toContainText()  •  Dialog types


const { test, expect } = require('@playwright/test');
test('Alerts & Dialogs - Confirm Test', async ({ page }) => {
    // Navigate to the JavaScript alerts page
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    // Listen for the dialog event and dismiss the confirm dialog
    page.on('dialog', async dialog => { 
        await dialog.dismiss();
    });
    // Click the button that triggers the confirm dialog
    await page.click('button[onclick="jsConfirm()"]');    
    // Assert that the page shows a message indicating the user clicked Cancel
    const resultText = await page.locator('#result').textContent();
    expect(resultText).toContain('You clicked: Cancel');
});