/// <reference types="cypress" />

class DeltetExistCardActions {
  //createCard = ()=>{
  //cy.get("#board [data-testid=list-add-card-button]").first().type("card to delete")
  //cy.get("[type=submit]").click()
  // }

  openBoardCard(URL) {
    cy.visit(URL);
    cy.get("#board [data-testid=list-add-card-button]")
      .first()
      .type("CypressCard");
    cy.get("[type=submit]").click();
  }

  ClicksOnCard() {
    cy.wait(3000);
    cy.get("[data-testid=trello-card]").click();
    cy.wait(5000);
  }

  ClicksOnArchiveButton() {
    cy.get("[title=Archive]").first().click();
  }

  ClicksOnDeleteButton() {
    cy.get("[title=Delete]").first().click();
  }

  ConfirmTheDelete() {
    cy.get("[value=Delete] ").first().click();
  }
}
export default DeltetExistCardActions;
