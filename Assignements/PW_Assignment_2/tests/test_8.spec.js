// Q8  Keyboard & Mouse
// Write a Playwright script that double-clicks a word in a text area to select it, then types a replacement word. Verify the text area now contains the replacement text.
// 🌐 Practice Website: DemoQA Text Box  (https://demoqa.com/text-box)
// 💡 Hint: Use page.dblclick() on the element or locator.dblclick(). After double-clicking a word gets highlighted; typing replaces it. Use toHaveValue() to assert.
// 🏷 Topics: page.dblclick()  •  Text Selection  •  toHaveValue()  •  Mouse Actions

const { test, expect } = require('@playwright/test');
test('Keyboard & Mouse - Double Click Text Replacement Test', async ({ page }) => {
    // Navigate to the text box page
    await page.goto('https://demoqa.com/text-box'); 
    // Locate the Current Address text area and type initial text
    const currentAddressTextArea = page.locator('#currentAddress');
    await currentAddressTextArea.fill('123 Main Street');
    // Double-click the word "Main" to select it
    await currentAddressTextArea.dblclick({ position: { x: 50, y: 10 } });
    // Type the replacement word "Broadway"
    await page.keyboard.type('Broadway');
    // Verify that the text area now contains the replacement text
    await expect(currentAddressTextArea).toHaveValue('123 Broadway Street');
});