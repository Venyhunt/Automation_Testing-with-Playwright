const homePageLocators = require('../locators/homePage.locators');

class HomePage {
  constructor(page) {
    this.page = page;

    // Locator properties
    this.elementsCard = page.locator(homePageLocators.elementsCard);
    this.textBoxMenuItem = page.locator(homePageLocators.textBoxMenuItem);
    this.pageHeading = page.locator(homePageLocators.pageHeading);  
  }

  // Action method
  async clickElementsCard() {
    await this.elementsCard.scrollIntoViewIfNeeded();
    await this.elementsCard.click();
  }

  async clickTextBoxMenuItem() {
    //await this.textBoxMenuItem.scrollIntoViewIfNeeded();
    await this.textBoxMenuItem.click();
  }
}

module.exports = HomePage;
