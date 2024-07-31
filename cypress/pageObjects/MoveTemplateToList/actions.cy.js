
class MoveTemplateToAnyListActions {
    

    ClicksOnTempleteFiled(){
      cy.wait(4000)
      cy.get("[data-testid=list-cards]").first().click();
        return this;
    }

    ClicksOnMOveAction(){
        cy.wait(4000)
        cy.get("[title=Move]").click();
          return this;
      }


      fillMoveCardFiled(){
        cy.wait(4000)
        cy.get("[data-testid=move-card-popover-select-list-destination]").select(2);
          return this;
      }

      clickOnMoveButton(){
        cy.wait(4000)
        cy.get("[data-testid=move-card-popover-move-button]").click();
          return this;
      }

    
   
   }export default MoveTemplateToAnyListActions ;