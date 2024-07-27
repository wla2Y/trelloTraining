import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import ShardActions from "../../../pageObjects/shared/actions.cy";
import CreateNewCardActions from "../../../pageObjects/createNewCard/actions.cy";
import CreateNewCardAssertions from "../../../pageObjects/createNewCard/assertions.cy";


const sharedDataUtil = new sharedDataUtils();
const sharedAction = new ShardActions();
const cardAction = new CreateNewCardActions();
const cardAssertions = new CreateNewCardAssertions();


const boardName = "CypressBoard";
const cardName = "trello";


// let boardId; 
// let bourdURL;

before(() => {
  cy.loginToTrello();
  sharedDataUtil.createNewBoard(boardName).as('boardResponse');
      // OR ..    
      //.then((response)=>{
      //      boardId =response.body.id;
      //      bourdURL =response.body.url; // using the data that get from response
      //     }); // create a board using key thats i made from atla. dev
});

Given("The user navigate to board", () => {
  //sharedAction.openBoard(bourdURL);
  // OR ..
  // bc of the local varible we use ".as"  works like temp storage
  //cy.wait("@boardResponse"); //daynamic wait API  is better 
  
  cy.wait(5000)
  cy.get("@boardResponse").then((data) => {
  cy.log(data);
  sharedAction.openBoard(data.body.url);
  });
});

When("Clicks on Add a card button", () => {
    cy.wait(3000)
    cardAction.ClicksOnAddCardButton(
      
    )
});

When("Enters a title for the card", () => {
    cy.wait(3000)
    cardAction.TitleForTheCard(cardName)
});

When("Clicks on Add card button", () => {
    cy.wait(3000)
    cardAction.ClickOnAddCardButton()
});

Then("A new card will be created", () => {
  cardAssertions.checkCardIsExist().checkCardIsContain(cardName);



});

after(() => {
  //sharedDataUtil.deleteBoard(boardId);
  cy.wait(6000)
  cy.get("@boardResponse").then((response)=>{
        sharedDataUtil.deleteBoard(response.body.id);
    })
});
