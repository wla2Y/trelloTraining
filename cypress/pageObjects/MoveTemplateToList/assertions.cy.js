
class MoveTemplateToAnyListAassertion {
    

    checkTempleteIsMoved(){
     
        cy.wait(4000)
        cy.get(".js-open-move-from-header").first().should("contain","Doing")
        return this;
    }

    
   
   }export default MoveTemplateToAnyListAassertion ;