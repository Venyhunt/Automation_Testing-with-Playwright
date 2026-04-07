// Q15  Screenshots & Videos
// Write a Playwright script that visits a product listing page, takes a full-page screenshot and saves it as 'products.png', then takes a screenshot of just one specific product card element and saves it as 'card.png'.
// 🌐 Practice Website: Books to Scrape  (https://books.toscrape.com)
// 💡 Hint: Use page.screenshot({ path: 'products.png', fullPage: true }) for the full page. Use locator.screenshot({ path: 'card.png' }) for an element-level screenshot.
// 🏷 Topics: page.screenshot()  •  locator.screenshot()  •  fullPage: true  •  Element screenshots

const { test, expect } = require('@playwright/test');

test('Screenshots & Videos - Product Listing Page', async ({ page }) => {
    // Navigate to the Books to Scrape page
    await page.goto('https://books.toscrape.com');
    // Take a full-page screenshot and save it as 'products.png'
    await page.screenshot({ path: 'products.png', fullPage: true });
    // Locate a specific product card element (e.g., the first product)
    const firstProductCard = page.locator('.product_pod').first();
    // Take a screenshot of the specific product card element and save it as 'card.png'
    await firstProductCard.screenshot({ path: 'card.png' });
});