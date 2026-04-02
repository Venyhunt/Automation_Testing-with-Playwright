const { test, expect } = require('@playwright/test');
const ToolTipsPage = require('../pages/ToolTipsPage');
const HoversPage = require('../pages/HoversPage');

test('Script 7: Hover to Reveal a Tooltip', async ({ page }) => {
  const toolTipsPage = new ToolTipsPage(page);

  // Step 1: Open the URL
  await page.goto('https://demoqa.com/tool-tips');

  // Step 2: Hover over the button
  await toolTipsPage.hoverOverButton();

  // Step 3: Wait for tooltip popup to become visible
  await expect(toolTipsPage.tooltip).toBeVisible();

  // Step 4: Assert tooltip text
  await expect(toolTipsPage.tooltip).toHaveText('You hovered over the Button');

  // Step 5: Move mouse away
  await toolTipsPage.moveMouseAway();

  // Step 6: Assert tooltip disappears
  await expect(toolTipsPage.tooltip).toBeHidden();
});


test('Script 8: Hover to Reveal Hidden Profile Information', async ({ page }) => {
  const hoversPage = new HoversPage(page);

  // Step 1: Open the URL
  await page.goto('https://the-internet.herokuapp.com/hovers');

  // Step 2: Hover over the first user avatar image
  await hoversPage.hoverOverUser(0);

  // Step 3: Assert 'name: user1' becomes visible
  await expect(hoversPage.getUserName(0)).toBeVisible();
  await expect(hoversPage.getUserName(0)).toHaveText('name: user1');

  // Step 4: Assert 'View profile' link appears
  await expect(hoversPage.getViewProfileLink(0)).toBeVisible();
  await expect(hoversPage.getViewProfileLink(0)).toHaveText('View profile');

  // Step 5: Hover over the second avatar
  await hoversPage.hoverOverUser(1);

  // Step 6: Assert 'name: user2' appears
  await expect(hoversPage.getUserName(1)).toBeVisible();
  await expect(hoversPage.getUserName(1)).toHaveText('name: user2');
});