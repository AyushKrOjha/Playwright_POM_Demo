const { expect, page } = require("@playwright/test");

class ComputerPage {
  constructor(page) {
    this.page = page;
  }

  async goto(page) {
    await this.page.goto(process.env.COM_PAGE);
  }

  //Locators
  addComputerButton = () => this.page.locator("a#add");
  computerAddedLabel = () =>
    this.page.getByText("Done ! Computer Think_Pad_14E has been created");

  //Actions
  async clickAddNewComputer() {
    await this.addComputerButton().click();
  }

  async assertNewComputerAdded() {
    await expect(this.computerAddedLabel()).toBeVisible();
  }
}
module.exports = { ComputerPage };
