// Q20  File Upload/Download
// Write a Playwright script that: (1) navigates to a file upload page, (2) uploads an image file using drag-and-drop simulation, (3) waits for a preview of the file to appear, and (4) takes a screenshot of the preview element to confirm it loaded correctly.
// 🌐 Practice Website: DemoQA Upload & Download  (https://demoqa.com/upload-download)
// 💡 Hint: Use page.dispatchEvent() or the drag-and-drop method with page.dragAndDrop(). Alternatively, use setInputFiles() on the hidden input. Then use locator.screenshot() to capture the preview.
// 🏷 Topics: Drag and drop  •  setInputFiles()  •  File preview  •  locator.screenshot()

const { test, expect } = require('@playwright/test');
const path = require('path');
test('File Upload with Drag-and-Drop Simulation', async ({ page }) => {
    // Navigate to the file upload page
    await page.goto('https://demoqa.com/upload-download');
    // Define the path to the image file to upload
    const filePath = path.resolve(__dirname, 'path/to/your/image.jpg');
    // Simulate drag-and-drop file upload
    const dropArea = page.locator('#dragBox');
    await dropArea.dispatchEvent('dragenter');
    await dropArea.dispatchEvent('dragover');
    await dropArea.dispatchEvent('drop', {
        dataTransfer: {
            files: [filePath],
        },
    });
    // Wait for the preview of the file to appear
    const preview = page.locator('#uploadedFilePath');
    await expect(preview).toBeVisible();    
    // Take a screenshot of the preview element
    await preview.screenshot({ path: 'file-preview.png' });
});