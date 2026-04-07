// Q17  Alerts & Dialogs
// Write a Playwright script that clicks a button which triggers a JavaScript alert popup, listens for the dialog event, accepts the alert, and then asserts that the correct message was shown in the alert.
// 🌐 Practice Website: The Internet – JavaScript Alerts  (https://the-internet.herokuapp.com/javascript_alerts)
// 💡 Hint: Register page.on('dialog', dialog => dialog.accept()) BEFORE clicking the button. Then capture dialog.message() inside the handler to assert the message text.
// 🏷 Topics: page.on('dialog')  •  dialog.accept()  •  dialog.message()  •  Alert handling

const { test, expect } = require('@playwright/test');
test('Alerts & Dialogs Test', async ({ page }) => {
    // Navigate to the JavaScript alerts page
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    // Listen for the dialog event and capture the message
    let alertMessage = '';

    page.on('dialog', async dialog => {
        alertMessage = dialog.message();
        await dialog.accept();
    });

    // Click the button that triggers the alert
    await page.click('button[onclick="jsAlert()"]');    
    // Assert that the correct message was shown in the alert
    expect(alertMessage).toBe('I am a JS Alert');
});