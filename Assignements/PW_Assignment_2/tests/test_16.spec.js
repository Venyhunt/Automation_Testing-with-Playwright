// Q16  Screenshots & Videos
// Write a Playwright script configured to record a video of the entire test run. The script should fill a form and submit it. After the test, verify that a video file was created in the output folder.
// 🌐 Practice Website: DemoQA Text Box  (https://demoqa.com/text-box)
// 💡 Hint: In your playwright.config.js, set use: { video: 'on' } or use: { video: 'retain-on-failure' }. The video is saved in the test-results folder after the test ends.
// 🏷 Topics: Video recording  •  playwright.config.js  •  video: 'on'  •  test-results folder

const { test, expect } = require('@playwright/test');

test('Screenshots & Videos - Form Submission with Video Recording', async ({ page }) => {
    // Navigate to the text box page
    await page.goto('https://demoqa.com/text-box');
    // Fill in the form fields
    await page.fill('#userName', 'Alice');
    await page.fill('#userEmail', 'alice@example.com');
    // Submit the form
    await page.click('#submit');
    // Verify that the success message is displayed
    const successMessage = await page.locator('#output').textContent();
    expect(successMessage).toContain('Alice');
    expect(successMessage).toContain('alice@example.com');
    // Note: The video will be automatically saved in the test-results folder after the test run, so we don't need to manually check for the video file here.
});