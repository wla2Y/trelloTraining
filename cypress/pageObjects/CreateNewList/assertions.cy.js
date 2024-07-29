class CreateNewListAssertions {

    checkCardIsExist(){
        cy.get("[data-testid=trello-card]").should("exist")
        return this;
    }
    checkListIsContain(listName){
       
        cy.wait(4000)
        cy.get("[data-testid=list-name]").should("contain",listName)
        return this;
    }
}
export default CreateNewListAssertions;