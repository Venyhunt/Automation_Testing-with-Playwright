const toolTipsPageLocators = require('../locators/toolTipsPage.locators');

class ToolTipsPage {
  constructor(page) {
    this.page = page;

    this.hoverButton = page.locator(toolTipsPageLocators.hoverButton);
    this.tooltip = page.locator(toolTipsPageLocators.tooltip);
  }

  async hoverOverButton() {
    //await this.hoverButton.scrollIntoViewIfNeeded();
    await this.hoverButton.hover();
  }

  async moveMouseAway() {
    // Move mouse to top-left corner of page to dismiss tooltip
    await this.page.mouse.move(0, 0);
  }
}

module.exports = ToolTipsPage;