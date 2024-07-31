class HideTempleteFromListAassertion {
    

    checkTempleteIsHide(cardName){
     
        cy.wait(4000)
        cy.get("[data-testid=list]").first().should("not.contain",cardName)
        return this;
    }

    
   
   }export default HideTempleteFromListAassertion ;