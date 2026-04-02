const selectMenuPageLocators = require('../locators/selectMenuPage.locators');

class SelectMenuPage {
  constructor(page) {
    this.page = page;

    // Script 5 locators
    this.oldStyleSelectMenu = page.locator(selectMenuPageLocators.oldStyleSelectMenu);

    // Script 6 locators
    this.selectValueDropdown = page.locator(selectMenuPageLocators.selectValueDropdown);
  }

  // =========================
  // Script 5 methods
  // =========================
  async selectOldStyleOption(optionText) {
    await this.oldStyleSelectMenu.scrollIntoViewIfNeeded();
    await this.oldStyleSelectMenu.selectOption({ label: optionText });
  }

  async getSelectedOldStyleOptionText() {
    return await this.oldStyleSelectMenu.locator('option:checked').textContent();
  }

  // =========================
  // Script 6 methods
  // =========================
 async selectValueOption(optionText) {
  await this.selectValueDropdown.scrollIntoViewIfNeeded();
  await this.selectValueDropdown.click();

  const option = this.page.locator('div[id^="react-select-"][id*="-option-"]', {
    hasText: optionText
  });

  await option.first().click();
}
}

module.exports = SelectMenuPage;