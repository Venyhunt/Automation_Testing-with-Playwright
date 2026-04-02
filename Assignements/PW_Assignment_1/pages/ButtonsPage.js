const buttonsPageLocators = require('../locators/buttonsPage.locators');

class ButtonsPage {
  constructor(page) {
    this.page = page;
    // Locator properties
    this.clickMeButton = page.locator(buttonsPageLocators.clickMeButton);

    }   

    async clickClickMeButton() {
    await this.clickMeButton.click();
  }
}

module.exports = ButtonsPage;   