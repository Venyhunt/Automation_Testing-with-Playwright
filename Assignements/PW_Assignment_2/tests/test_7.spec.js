// Q7  Keyboard & Mouse
// Write a Playwright script that clicks inside a text input field and uses keyboard shortcuts — press Ctrl+A to select all text, then press Delete to clear it, and finally type new text into the field.
// 🌐 Practice Website: DemoQA Text Box  (https://demoqa.com/text-box)
// 💡 Hint: Use page.click() to focus the field, then page.keyboard.press('Control+A') and page.keyboard.press('Delete') followed by page.keyboard.type().
// 🏷 Topics: page.keyboard.press()  •  page.keyboard.type()  •  Ctrl+A  •  Keyboard shortcuts

const { test, expect } = require('@playwright/test');

test('Keyboard & Mouse - Text Input Manipulation Test', async ({ page }) => {

    // Navigate to the text box page
    await page.goto('https://demoqa.com/text-box'); 
    // Click inside the Full Name input field to focus it
    const fullNameInput = page.locator('#userName');
    await fullNameInput.click();
    // Use keyboard shortcuts to select all text and delete it
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Delete');
    // Type new text into the field
    await page.keyboard.type('Jane Doe');
    // Verify that the new text is entered correctly
    const fullNameValue = await fullNameInput.inputValue();
    expect(fullNameValue).toBe('Jane Doe');
});