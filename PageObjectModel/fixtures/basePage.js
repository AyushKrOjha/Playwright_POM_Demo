const base = require("@playwright/test");
const { ComputerPage } = require("../pages/computers.page");
const { AddComputerPage } = require("../pages/addComputer.page");
require("dotenv").config();

export const test = base.extend({
  computerPage: async ({ page }, use) => {
    await use(new ComputerPage(page));
  },
  addComputerPage: async ({ page }, use) => {
    await use(new AddComputerPage(page));
  },
});
