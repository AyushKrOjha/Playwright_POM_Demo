const { page } = require("@playwright/test");

class ComputerActions {
  constructor(page) {
    this.page = page;
  }

  //Locators
  createNewComputerButton = () => this.page.locator("input.btn.primary");

  //Actions
  async clickCreateNewComputer() {
    await this.createNewComputerButton().click();
  }
}
module.exports = { ComputerActions };
