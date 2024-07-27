import {APIKey,APIToken} from "../../support/constants.cy";


class CreateNewCardActions {
    

    ClicksOnAddCardButton(){
      cy.wait(4000)
      
        cy.get("[data-testid=list-add-card-button]").first().click();
        return this;
    }
    TitleForTheCard(cardName){
        cy.get("[data-testid=list-card-composer-textarea]").type(cardName)
        return this;
    }
    ClickOnAddCardButton(){
        cy.get("[type=submit]").click()
        return this;
    }
   
    



}export default CreateNewCardActions;