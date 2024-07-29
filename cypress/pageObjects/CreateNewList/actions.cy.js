import {APIKey,APIToken} from "../../support/constants.cy";


class CreateNewListeActions {
    

    ClicksOnAddListButton(){
      cy.wait(4000)
      cy.get("[data-testid=list-composer-button]").click();
        return this;
    }

    TitleForTheList(listName){
        cy.get(".vVqwaYKVgTygrk [data-testid=list-name-textarea]").type(listName)
        return this;
    }
    ClickOnAddListButton(){
        cy.get("[type=submit]").click()
        return this;
    }
   
   }export default CreateNewListeActions;