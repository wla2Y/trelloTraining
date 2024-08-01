/// <reference types="cypress" />


class UpdateTepmpleteNameAction {

    ClicksOnTempleteCardField() {
     cy.contains("span","This card is a template.").click({force: true})
     cy.wait(3000)
      return this;
    }

    ClicOnTitleOfTheTemplete() {
        cy.wait(3000)
        cy.get(".T9JQSaXUsHTEzk .KWQlnMvysRK4fI").click({force: true})
        return this;
    }
 

    UpdateTheNameOfTheTemplete(){
        cy.wait(5000)
        cy.get("[data-testid=card-back-title-input]").focus().clear().type("tepmlete updeted")
        cy.wait(5000)
        cy.get(".BXekJYFkPyovJz [type=button]").first().click();
        return this;
    }


}
export default UpdateTepmpleteNameAction;
