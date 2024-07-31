
class HideTempleteFromListActions {



    ClicksOnTempleteFiled() {
      cy.wait(5000);
      cy.get("[data-testid=list-cards]").first().click();
      return this;
    }
  

    clickOnHideFromListOption() {
        cy.wait(5000);
      //cy.get("[title=Hide]").first().click();
      cy.contains("span","Hide from list").click()
      cy.wait(5000);
      cy.get("[data-testid=editor-save-button]").click()
      return this;   
    }
  
  
  
  
  }
  export default HideTempleteFromListActions;