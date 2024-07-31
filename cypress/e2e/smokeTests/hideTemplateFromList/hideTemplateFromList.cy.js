import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import ShardActions from "../../../pageObjects/shared/actions.cy";
import HideTempleteFromListActions from "../../../pageObjects/hideTemplateFromList/actions.cy.js";
import HideTempleteFromListAassertion from "../../../pageObjects/hideTemplateFromList/assertions.cy";


const sharedDataUtil = new sharedDataUtils();
const sharedAction = new ShardActions();
const hideTempleteAction = new HideTempleteFromListActions();
const hideTempleteAassertion = new HideTempleteFromListAassertion();

const boardName = "CypressBoard";
const cardName = " templete card";
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
        cy.wait(5000)
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
  hideTempleteAction.ClicksOnTempleteFiled()
  
});


When("Click on Hide from list  option", () => {
  hideTempleteAction.clickOnHideFromListOption()
});


Then("the templete card will be moved successfully", () => {

  hideTempleteAassertion.checkTempleteIsHide(cardName)
});





