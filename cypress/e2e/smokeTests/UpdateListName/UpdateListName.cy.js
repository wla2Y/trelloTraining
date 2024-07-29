import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import ShardActions from "../../../pageObjects/shared/actions.cy";
import UpdateListNameAction from "../../../pageObjects/UpdateListName/actions.cy";
import UpdateListNameAssertions from "../../../pageObjects/UpdateListName/assertions.cy";


const sharedDataUtil = new sharedDataUtils();
const sharedAction = new ShardActions();
const updateListNameAction = new UpdateListNameAction();
const listAssertions = new UpdateListNameAssertions();


const boardName = "CypressBoard";
const listName = "listUpdated";



before(() => {
    cy.loginToTrello();
    sharedDataUtil.createNewBoard(boardName).as('boardResponse');
   
});

Given("The user navigate to board", () => {
    cy.wait(5000)
    cy.get("@boardResponse").then((data) => {
    cy.log(data);
    sharedAction.openBoard(data.body.url);
    });

});

When("The user Click on list filed", () => { 
    updateListNameAction.ClickOnListFiled()


});

When("the user enter the new name of the list", () => {
    //updateListNameAction.updateListName(listName)
    updateListNameAction.updateListName(listName)
   
});


Then("the name of the test will be update", () => {
    listAssertions.checkUpdatedList(listName)

});



after(() => {cy.wait(6000)
    cy.get("@boardResponse").then((response)=>{
          sharedDataUtil.deleteBoard(response.body.id);
      })});
