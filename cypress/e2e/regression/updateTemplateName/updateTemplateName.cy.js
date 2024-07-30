/// <reference types="cypress" />

//import { APIKey, APIToken } from "../../support/constants.cy";

class UpdateTepmpleteNameRegression {
  CreateNewTemplete = (templeteName) => {
    cy.get("[data-testid=card-template-list-button]").first().click();
    cy.wait(3000);
    cy.get("[data-testid=create-new-template-card-button]").click();
    cy.wait(3000);
    cy.get("[data-testid=create-template-card-composer]").type(templeteName);
    cy.wait(4000);
    cy.get(".nK4IoJSaSomDZ_ [type=button]").click();
    cy.wait(4000);
    cy.get(".BXekJYFkPyovJz [type=button]").first().click();
    cy.wait(4000)
    
  };

}
export default UpdateTepmpleteNameRegression;
