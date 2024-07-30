

class CreateCardTemplatessertions {

    checkTempCardExist(){
      
        cy.wait(6000)
        cy.get("[role=dialog]").first().should("contain","This is a Template card.")
        return this;
    }
}
export default CreateCardTemplatessertions;