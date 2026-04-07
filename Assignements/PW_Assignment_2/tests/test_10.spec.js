// Q10  File Upload/Download
// Write a Playwright script that clicks a Download button, waits for the file download to complete, and then asserts that the downloaded file exists and its filename matches the expected value.
// 🌐 Practice Website: The Internet – File Download  (https://the-internet.herokuapp.com/download)
// 💡 Hint: Use page.waitForEvent('download') wrapped with the click action. Then use download.suggestedFilename() and download.saveAs() to save and verify the file.
// 🏷 Topics: waitForEvent('download')  •  Download handling  •  suggestedFilename()  •  fs.existsSync()

const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');   
test('File Download Test', async ({ page }) => {
    // Navigate to the file download page
    await page.goto('https://the-internet.herokuapp.com/download');
    // Click the Download button and wait for the download to complete
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.click('a[href="/download/some-file.txt"]') // Adjust the selector to match the actual download link
    ]); 
    // Get the suggested filename and save the downloaded file
    const suggestedFilename = download.suggestedFilename();
    const downloadPath = path.join(__dirname, 'downloads', suggestedFilename);
    await download.saveAs(downloadPath);
    // Assert that the downloaded file exists and its filename matches the expected value
    expect(fs.existsSync(downloadPath)).toBeTruthy();
    expect(suggestedFilename).toBe('some-file.txt'); // Adjust the expected filename as needed
});