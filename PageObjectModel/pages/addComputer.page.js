const { expect, page } = require("@playwright/test");
const { ComputerActions } = require("../sections/ComputerActions.section");
const { ComputerDetails } = require("../sections/ComputerDetails.section");

class AddComputerPage {
  constructor(page) {
    this.page = page;
    this.computerActions = new ComputerActions(this.page);
    this.computerDetails = new ComputerDetails(this.page);
  }

  async goto() {
    await this.page.goto(process.env.COM_DETAILS_PAGE);
  }

  async addNewComputer() {
    await this.computerDetails.enterComputerDetails();
    await this.computerActions.clickCreateNewComputer();
  }
}
module.exports = { AddComputerPage };
