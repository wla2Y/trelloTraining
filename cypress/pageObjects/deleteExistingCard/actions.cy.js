/// <reference types="cypress" />

class DeltetExistCardActions {
  
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
