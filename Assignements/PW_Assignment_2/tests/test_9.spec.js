// Q9  File Upload/Download
// Write a Playwright script that locates a file upload input on a page, uses setInputFiles() to attach a local file, submits the form, and verifies that the uploaded filename is shown on the page.
// 🌐 Practice Website: The Internet – File Upload  (https://the-internet.herokuapp.com/upload)
// 💡 Hint: Use locator.setInputFiles('/path/to/your/file.txt') on the file input. After clicking upload, check for the filename in the success message.
// 🏷 Topics: setInputFiles()  •  File Upload  •  locator.click()  •  Assertions

const { test, expect } = require('@playwright/test');

test('File Upload Test', async ({ page }) => {
    // Navigate to the file upload page
    await page.goto('https://the-internet.herokuapp.com/upload');
    // Locate the file input and set the file to upload
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles('path/to/your/file.txt');

    // Click the upload button
    await page.click('#file-submit');
    // Verify that the uploaded filename is shown on the page
    const uploadedFileName = await page.locator('#uploaded-files').textContent();
    expect(uploadedFileName).toContain('file.txt');
});