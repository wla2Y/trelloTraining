class CreateCardTemplateActions {
  ClicksOnTemplateIcon() {
    cy.get("[data-testid=TemplateCardIcon]").first().click();

    return this;
  }

  clickOnCreateTemplateButton() {
    cy.wait(3000)
    cy.get("[data-testid=create-new-template-card-button]").first().click();

    return this;
  }

  EnterTempleteTitle(titleName) {
    cy.wait(3000)
    cy.get("[data-testid=create-template-card-composer]").type(titleName);

    return this;
  }

  ClicksonAddButton() {
    cy.get("[data-testid=new-template-card-submit-button]").click()
    return this;
  }
}
export default CreateCardTemplateActions;
