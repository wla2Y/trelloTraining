class MoveTemplateToAnyListActions {
  ClicksOnTempleteFiled() {
    cy.wait(5000);
    cy.get("[data-testid=list-cards]").first().click();
    return this;
  }

  ClicksOnMOveAction() {
    cy.wait(6000);
    cy.get("[title=Move]").click();
    return this;
  }


  fillMoveCardField() {
   cy.wait(4000);
    cy.get('div[data-testid="move-card-popover-select-list-destination"]').click(); // Open the dropdown
    cy.get("#react-select-3-option-1").click({ force: true }); 


    return this;
  }

  clickOnMoveButton() {
    cy.wait(4000);
    cy.get("[data-testid=move-card-popover-move-button]").click();
    return this;
  }
}
export default MoveTemplateToAnyListActions;
