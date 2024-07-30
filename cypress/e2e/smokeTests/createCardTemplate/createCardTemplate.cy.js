import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import ShardActions from "../../../pageObjects/shared/actions.cy";
import CreateCardTemplateActions from "../../../pageObjects/createCardTemplate/actions.cy";
import CreateCardTemplatessertions from "../../../pageObjects/createCardTemplate/assertions.cy";





const sharedDataUtil = new sharedDataUtils();
const sharedAction = new ShardActions();
const templeteAction = new CreateCardTemplateActions();
const templeteAssertion= new CreateCardTemplatessertions();


const boardName = "CypressBoard";
const titleName = "Title card";

before(() => {
  cy.loginToTrello();
  sharedDataUtil.createNewBoard(boardName).as("boardResponse");
});

Given("The user navigate to board", () => {
  cy.wait(5000);
  cy.get("@boardResponse").then((data) => {
    cy.log(data);
    sharedAction.openBoard(data.body.url);
  });
});

When("Clicks on create  Template icon", () => {
    templeteAction.ClicksOnTemplateIcon()
});

When("Click on create template button", () => {
    templeteAction.clickOnCreateTemplateButton()

});

When("Enters a title of the tepmlete", () => {

    templeteAction.EnterTempleteTitle(titleName)

});
When("Clicks on Add  button", () => {
    templeteAction.ClicksonAddButton()

});

Then("A templete card will be created", () => {
    templeteAssertion.checkTempCardExist()

});


after(() => {
    cy.wait(5000);
    cy.get("@boardResponse").then((response) => {
      sharedDataUtil.deleteBoard(response.body.id);
    });
  });
