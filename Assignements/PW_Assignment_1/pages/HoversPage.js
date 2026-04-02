const hoversPageLocators = require('../locators/hoversPage.locators');

class HoversPage {
  constructor(page) {
    this.page = page;

    this.userFigures = page.locator(hoversPageLocators.userFigures);
  }

  getUserFigure(index) {
    return this.userFigures.nth(index);
  }

  getUserCaption(index) {
    return this.getUserFigure(index).locator(hoversPageLocators.figureCaption);
  }

  getUserName(index) {
    return this.getUserFigure(index).locator(hoversPageLocators.userName);
  }

  getViewProfileLink(index) {
    return this.getUserFigure(index).locator(hoversPageLocators.viewProfileLink);
  }

  async hoverOverUser(index) {
    await this.getUserFigure(index).scrollIntoViewIfNeeded();
    await this.getUserFigure(index).hover();
  }
}

module.exports = HoversPage;