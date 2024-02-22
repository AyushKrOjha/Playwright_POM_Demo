const { test } = require("../PageObjectModel/fixtures/basePage");

test("Basic Test", async ({ computerPage, addComputerPage }) => {
  await computerPage.goto();
  await computerPage.clickAddNewComputer();
  await addComputerPage.addNewComputer();
  await computerPage.assertNewComputerAdded();
});
