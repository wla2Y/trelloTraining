import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import DeltetExistCardActions from "../../../pageObjects/deleteExistingCard/actions.cy.js";
import DeltetExistCardAssertions from "../../../pageObjects/deleteExistingCard/assertions.cy.js";

const sharedDataUtil = new sharedDataUtils();
//const sharedAction = new ShardActions();
const deletecardAction = new DeltetExistCardActions();
const deletecardassertion = new DeltetExistCardAssertions();

const boardName = "CypressBoard";
const cardName = "CypressCard";

before(() => {
  cy.loginToTrello();
  sharedDataUtil.createNewBoard(boardName).as("boardResponse");


});

Given("The user navigate to board", () => {
  cy.wait(5000);
  cy.get("@boardResponse").then((data) => {
    cy.log(data);
    deletecardAction.openBoardCard(data.body.url);
  });
});

Given("Clicks on  card to delete", () => {
  deletecardAction.ClicksOnCard();
});

Given("Clicks on  archive button", () => {
  deletecardAction.ClicksOnArchiveButton();
});

When("Clicks on delete button", () => {
  deletecardAction.ClicksOnDeleteButton();
});
When("Confirm the delete", () => {
  deletecardAction.ConfirmTheDelete();
});

Then("the card  will be deleted", () => {
  deletecardassertion.checkCardIsDeleted(cardName);
});

after(() => {
  cy.wait(9000);
  cy.get("@boardResponse").then((response) => {
    sharedDataUtil.deleteBoard(response.body.id);
  });
});
