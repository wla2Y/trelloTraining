import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import ShardActions from "../../../pageObjects/shared/actions.cy";




const sharedDataUtil = new sharedDataUtils();
const sharedAction = new ShardActions();


before(() => {
    cy.loginToTrello();
    cy.wait(6000);
  
    sharedDataUtil.createNewBoard(boardName).as("boardResponse")
      .then((data) => {
        cy.log(data);
        sharedDataUtil.getListsOnBoard(data.body.id).then((dataList) => { 
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
   
});


When("Click on Hide from list  option", () => {
   
});


Then("the templete card will be moved successfully", () => {
});





