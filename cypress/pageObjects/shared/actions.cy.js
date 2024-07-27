/// <reference types="cypress" />

class ShardActions {

    openBoard(URL){
       return cy.visit(URL)
    }


    deleteBoard = (boardId)=>{
        return cy.request("DELETE",`https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`)
    }

  
    



}
export default ShardActions;