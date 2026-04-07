// Q5  Form Interactions
// Write a Playwright script that selects a specific option from a dropdown menu (e.g., selects 'Option 2') and then asserts that the correct option is now selected.
// 🌐 Practice Website: The Internet – Dropdown  (https://the-internet.herokuapp.com/dropdown)
// 💡 Hint: Use page.selectOption() passing the value or label of the option. Then use page.inputValue() or expect().toHaveValue() to verify the selection.
// 🏷 Topics: Dropdown  •  page.selectOption()  •  toHaveValue()  •  <select> element

const { test, expect } = require('@playwright/test');

test('Form Interactions - Dropdown Test', async ({ page }) => { 
    // Navigate to the dropdown page
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    // Select 'Option 2' from the dropdown menu
    await page.selectOption('#dropdown', '2');  
    // Assert that 'Option 2' is now selected
    const selectedValue = await page.inputValue('#dropdown');
    expect(selectedValue).toBe('2');
});