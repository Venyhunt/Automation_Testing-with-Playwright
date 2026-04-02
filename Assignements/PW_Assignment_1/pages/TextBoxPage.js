const textBoxPageLocators = require('../locators/textBoxPage.locators');

class TextBoxPage {
  constructor(page) {
    this.page = page;

    // Form fields
    this.fullNameInput = page.locator(textBoxPageLocators.fullNameInput);
    this.emailInput = page.locator(textBoxPageLocators.emailInput);
    this.currentAddressInput = page.locator(textBoxPageLocators.currentAddressInput);
    this.permanentAddressInput = page.locator(textBoxPageLocators.permanentAddressInput);

    // Button
    this.submitButton = page.locator(textBoxPageLocators.submitButton);

    // Output
    this.outputSection = page.locator(textBoxPageLocators.outputSection);
    this.nameOutput = page.locator(textBoxPageLocators.nameOutput);
    this.emailOutput = page.locator(textBoxPageLocators.emailOutput);
  }

  async fillFullName(fullName) {
    await this.fullNameInput.fill(fullName);
  }

  async fillEmail(email) {
    await this.emailInput.fill(email);
  }

  async fillCurrentAddress(currentAddress) {
    await this.currentAddressInput.fill(currentAddress);
  }

  async fillPermanentAddress(permanentAddress) {
    await this.permanentAddressInput.fill(permanentAddress);
  }

   async clearFullName() {
    await this.fullNameInput.fill('');
  }

  async clickSubmit() {
    await this.submitButton.scrollIntoViewIfNeeded();
    await this.submitButton.click();
  }

  async fillTextBoxForm(fullName, email, currentAddress, permanentAddress) {
    await this.fillFullName(fullName);
    await this.fillEmail(email);
    await this.fillCurrentAddress(currentAddress);
    await this.fillPermanentAddress(permanentAddress);
  }
}

module.exports = TextBoxPage;