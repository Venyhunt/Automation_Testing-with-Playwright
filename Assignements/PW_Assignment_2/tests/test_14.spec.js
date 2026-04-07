// Q14  Waiting Strategies
// Write a Playwright script that navigates to a page, waits for the page to reach 'networkidle' load state (meaning no active network requests), then checks that a specific element on the page is visible.
// 🌐 Practice Website: Books to Scrape  (https://books.toscrape.com)
// 💡 Hint: Use await page.waitForLoadState('networkidle') after page.goto(). This ensures all resources have loaded before you start interacting.
// 🏷 Topics: waitForLoadState()  •  'networkidle'  •  'domcontentloaded'  •  Page lifecycle

const { test, expect } = require('@playwright/test');

test('Waiting Strategies - Network Idle Test', async ({ page }) => {
    // Navigate to the Books to Scrape page
    await page.goto('https://books.toscrape.com');
    // Wait for the page to reach 'networkidle' load state
    await page.waitForLoadState('networkidle');
    // Check that a specific element (e.g., the first book title) is visible
    const firstBookTitle = page.locator('.product_pod h3 a').first();
    await expect(firstBookTitle).toBeVisible();
}

);