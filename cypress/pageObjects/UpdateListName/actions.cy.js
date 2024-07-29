/// <reference types="cypress" />

import { APIKey, APIToken } from "../../support/constants.cy";

class UpdateListNameAction {

  ClickOnListFiled() {
     //cy.wait(4000);
     cy.get("#board [role=textbox]").first().click()
      return this;
    }

   updateListName(listName) {
     cy.wait(4000);
    cy.get("#board [data-testid=list-name-textarea]").first().type(listName)
    return this;
}

   //updateListName = (listName)=>{return cy.request("PUT",`https://api.trello.com/1/lists/{66a6be207e189cbc6be9a751}?name=${listName}&key=${APIKey}&token=${APIToken}`)}



}export default UpdateListNameAction;


