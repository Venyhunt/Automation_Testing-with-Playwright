const loginPageLocators = require('../locators/loginPage.locators');

class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.locator(loginPageLocators.usernameInput);
    this.passwordInput = page.locator(loginPageLocators.passwordInput);
    this.submitButton = page.locator(loginPageLocators.submitButton);

    this.successHeading = page.locator(loginPageLocators.successHeading);
    this.logoutButton = page.locator(loginPageLocators.logoutButton);

    this.errorMessage = page.locator(loginPageLocators.errorMessage);
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}

module.exports = LoginPage;