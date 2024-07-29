import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import ShardActions from "../../../pageObjects/shared/actions.cy"; 
import CreateNewListeActions  from "../../../pageObjects/CreateNewList/actions.cy";
import CreateNewListAssertions from "../../../pageObjects/CreateNewList/assertions.cy";


const sharedDataUtil = new sharedDataUtils();
const sharedAction = new ShardActions();
const listAction = new CreateNewListeActions ();
const listAssertions = new CreateNewListAssertions();




const boardName = "CypressBoard";
const listName = "CypressTitle";

before(() => {
  cy.loginToTrello();
  sharedDataUtil.createNewBoard(boardName).as("boardResponse");
  
});



Given("The user navigate to board", () => {
    cy.wait(5000)
    cy.get("@boardResponse").then((data) => {
    cy.log(data);
    sharedAction.openBoard(data.body.url);
    
    });

});

When("Clicks on Add another list", () => {
    cy.wait(3000)
    listAction.ClicksOnAddListButton()

});

When("Enters a title for the list", () => {
    listAction.TitleForTheList(listName)

});

When("Clicks on Add list button", () => {

    listAction.ClickOnAddListButton()
});

Then("A new list will be created", () => {
    listAssertions.checkListIsContain(listName)

});


after(() => {
    cy.wait(9000)
    cy.get("@boardResponse").then((response)=>{
          sharedDataUtil.deleteBoard(response.body.id);
      })

});
