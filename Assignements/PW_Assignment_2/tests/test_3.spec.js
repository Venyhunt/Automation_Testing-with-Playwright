// Q3  Form Interactions
// Write a Playwright script that navigates to a registration form, fills in the First Name, Last Name, and Email fields, then submits the form and verifies a success message is displayed.
// 🌐 Practice Website: DemoQA Forms  (https://demoqa.com/text-box)
// 💡 Hint: Use page.fill() for each input field. After submission, use page.locator() with expect().toBeVisible() to check the confirmation message.
// 🏷 Topics: page.fill()  •  Form Submission  •  Assertions  •  expect().toBeVisible()

const { test, expect } = require('@playwright/test');
test('Form Interactions - Registration Form Test', async ({ page }) => {
    // Navigate to the registration form
    await page.goto('https://demoqa.com/text-box'); 
    // Fill in the First Name, Last Name, and Email fields
    await page.fill('#userName', 'John');
    await page.fill('#userEmail', 'john.doe@example.com');  
    await page.fill('#currentAddress', '123 Main St, Anytown, USA');
    // Submit the form
    await page.click('#submit');    
    // Verify that the success message is displayed
    const successMessage = await page.locator('#output').textContent();
    expect(successMessage).toContain('John');
    expect(successMessage).toContain('john.doe@example.com');   
});