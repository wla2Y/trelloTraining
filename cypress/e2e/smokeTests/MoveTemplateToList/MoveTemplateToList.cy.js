import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import ShardActions from "../../../pageObjects/shared/actions.cy";

import MoveTemplateToAnyListActions from "../../../pageObjects/MoveTemplateToList/actions.cy.js";
import MoveTemplateToAnyListAassertion from "../../../pageObjects/MoveTemplateToList/assertions.cy.js";


const sharedDataUtil = new sharedDataUtils();
const sharedAction = new ShardActions();
const moveTempleteAction = new MoveTemplateToAnyListActions();
const moveTempleteAssertion = new MoveTemplateToAnyListAassertion();




const boardName = "CypressBoard";
const cardName = "templete card";
const isTemplate = "true";

before(() => {
  cy.loginToTrello();
  cy.wait(6000);

  sharedDataUtil.createNewBoard(boardName).as("boardResponse")// get bord id for list ... done 
    .then((data) => {
      cy.log(data);
      sharedDataUtil.getListsOnBoard(data.body.id).then((dataList) => {   // get list id for one index  ... done request 
        cy.log(dataList.body[0].id);
        console.log(dataList.body[0].id);
        sharedDataUtil.createNewCard( dataList.body[0].id , cardName , isTemplate );
      });
    });
});

Given("The user navigate to board", () => {
  cy.wait(5000);
  cy.get("@boardResponse").then((data) => {
    cy.log(data);
    sharedAction.openBoard(data.body.url);
  });
});

Given("Clicks on Templete filed", () => {
    moveTempleteAction.ClicksOnTempleteFiled()
});


When("Click on Move option", () => {
    moveTempleteAction.ClicksOnMOveAction()
});
When("the user choose the List that want to move to", () => {
    moveTempleteAction.fillMoveCardFiled()
});
When("click on Move Button", () => {
    moveTempleteAction.clickOnMoveButton()
});
Then("the templete card will be moved successfully", () => {
    moveTempleteAssertion.checkTempleteIsMoved()
});

after(() => {
  cy.wait(6000);
  cy.get("@boardResponse").then((response) => {
    sharedDataUtil.deleteBoard(response.body.id);
  });
});
