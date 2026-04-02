const autoCompletePageLocators = require('../locators/autoCompletePage.locators');

class AutoCompletePage {
  constructor(page) {
    this.page = page;

    this.multipleColorInput = page.locator(autoCompletePageLocators.multipleColorInput);
    this.redOption = page.locator(autoCompletePageLocators.redOption);
    this.redBadge = page.locator(autoCompletePageLocators.redBadge);
  }

  async clickMultipleColorInput() {
    await this.multipleColorInput.click();
  }

  async typeColorSlowly(color) {
    await this.multipleColorInput.type(color, { delay: 200 });
  }

  async clickRedSuggestion() {
    await this.redOption.click();
  }
}

module.exports = AutoCompletePage;