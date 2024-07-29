class UpdateListNameAssertions {




    checkUpdatedList(listName){
        //cy.pause()
        cy.wait(4000)
        cy.get("#board [data-testid=list-name-textarea]").first().should("contain",listName)
        return this;
    }


}
export default UpdateListNameAssertions;