import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import ShardActions from "../../../pageObjects/shared/actions.cy";
import UpdateTepmpleteNameRegression from "../../regression/updateTemplateName/updateTemplateName.cy.js";
import UpdateTepmpleteNameAction from "../../../pageObjects/updateTemplateName/actions.cy";
import UpdateTempleteNameAssertions from "../../../pageObjects/updateTemplateName/assertions.cy";

const sharedDataUtil = new sharedDataUtils();
const sharedAction = new ShardActions();
const updateTempleteRegression = new UpdateTepmpleteNameRegression();
const updateTempleteAction = new UpdateTepmpleteNameAction();
const updateTempleteAssertions = new UpdateTempleteNameAssertions();


const boardName = "CypressBoard";
const templeteName = "templete";
const templeteUpdate = "tepmlete updeted"; 



before(() => {
  cy.loginToTrello();
  sharedDataUtil.createNewBoard(boardName).as("boardResponse");
});

Given("The user navigate to board", () => {
  cy.wait(5000);
  cy.get("@boardResponse").then((data) => {
    cy.log(data);
    sharedAction.openBoard(data.body.url);
    updateTempleteRegression.CreateNewTemplete(templeteName)
  });
});

Given("Clicks on templete card field", () => {
  updateTempleteAction.ClicksOnTempleteCardField()

});

When("Click on  title of the templete", () => {
  updateTempleteAction.ClicOnTitleOfTheTemplete()
});

When("Update the name of the templete", () => {
updateTempleteAction.UpdateTheNameOfTheTemplete()
});

Then("The name will be updated successfully", () => {
  updateTempleteAssertions.checkUpdatedTemplete(templeteUpdate)
});


after(() => {
  cy.wait(6000);
  cy.get("@boardResponse").then((response) => {
    sharedDataUtil.deleteBoard(response.body.id);
  });
});
