// Q19  Form Automation
// Write a complete Playwright form automation test suite that: (1) opens a student registration form, (2) fills in all fields including name, email, gender radio button, date of birth, subject, and address, (3) submits the form, and (4) verifies the submitted data in the confirmation popup table.
// 🌐 Practice Website: DemoQA Practice Form  (https://demoqa.com/automation-practice-form)
// 💡 Hint: Combine page.fill(), page.click(), page.selectOption(), and locator.check(). For the date picker, you may need keyboard input. Use a table locator to verify each value in the confirmation modal.
// 🏷 Topics: Complete form  •  Multiple input types  •  Modal verification  •  End-to-end flow


const { test, expect } = require('@playwright/test');
test('Complete Form Automation Test', async ({ page }) => { 
    // Navigate to the student registration form
    await page.goto('https://demoqa.com/automation-practice-form'); 
    // Fill in the name, email,
    await page.fill('#firstName', 'John');
    await page.fill('#lastName', 'Doe');
    await page.fill('#userEmail', 'john.doe@example.com');
    // Select
    await page.check('input[name="gender"][value="Male"]'); 
    // Fill in the date of birth
    await page.click('#dateOfBirthInput');
    await page.keyboard.type('10 May 1990');
    await page.keyboard.press('Enter');
    // Fill in the subject
    await page.fill('#subjectsInput', 'Maths');
    await page.keyboard.press('Enter');

    // Fill in the address


    await page.fill('#currentAddress', '123 Main St, Anytown, USA');
    // Submit the form
    await page.click('#submit');
    // Verify the submitted data in the confirmation popup table
    const modal = page.locator('.modal-content');
    await expect(modal).toBeVisible();
    await expect(modal.locator('td')).toContainText('John Doe');
    await expect(modal.locator('td')).toContainText('john.doe@example.com');
    await expect(modal.locator('td')).toContainText('Male');
    await expect(modal.locator('td')).toContainText('10 May 1990');
    await expect(modal.locator('td')).toContainText('Maths');
    await expect(modal.locator('td')).toContainText('123 Main St, Anytown, USA');
});