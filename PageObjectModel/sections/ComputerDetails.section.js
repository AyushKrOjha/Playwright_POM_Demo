const { page } = require("@playwright/test");
const comDetails = JSON.parse(
  JSON.stringify(require("../../utils/ComputerDetails.json"))
);

class ComputerDetails {
  constructor(page) {
    this.page = page;
  }

  //Locators
  nameTextBox = () => this.page.locator("input#name");
  introduceTextBox = () => this.page.locator("#introduced");
  discontinuedTextBox = () => this.page.locator("#discontinued");
  companySelect = () => this.page.locator("#company");

  //Actions
  async enterComputerDetails() {
    await this.nameTextBox().fill(comDetails.computerName);
    await this.introduceTextBox().fill(comDetails.introduceDate);
    await this.discontinuedTextBox().fill(comDetails.disdiscontinuedDate);
    await this.companySelect().selectOption({ label: comDetails.companyName });
  }
}
module.exports = { ComputerDetails };
