class DeltetExistCardAssertions {
  checkCardIsDeleted(cardtName) {
    cy.wait(4000);
    // cy.get("[data-testid=list-name]").should("contain",cardName)
    cy.get("[data-testid=list]").first().should("not.have.value", cardtName);
    return this;
  }
}
export default DeltetExistCardAssertions;
