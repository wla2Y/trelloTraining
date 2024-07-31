
class MoveTemplateToAnyListAassertion {
    

    checkTempleteIsMoved(){
     
        cy.wait(4000)
        cy.get(".window-header-inline-content").first().should("contain","in list Done")
        return this;
    }

    
   
   }export default MoveTemplateToAnyListAassertion ;