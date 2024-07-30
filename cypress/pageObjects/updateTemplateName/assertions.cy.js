class UpdateTempleteNameAssertions {


    checkUpdatedTemplete(templeteUpdate){
   
        cy.wait(4000)
        cy.get("[data-testid=card-name]").should("contain",templeteUpdate)
        return this;
    }


}
export default UpdateTempleteNameAssertions;