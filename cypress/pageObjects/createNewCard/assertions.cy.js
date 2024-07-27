class CreateNewCardAssertions {

    checkCardIsExist(){
        cy.get("[data-testid=trello-card]").should("exist")
        return this;
    }
    checkCardIsContain(cardName){
        //cy.pause()
        cy.wait(4000)
        cy.get("[data-testid=trello-card]").should("contain",cardName)
        return this;
    }
}
export default CreateNewCardAssertions;