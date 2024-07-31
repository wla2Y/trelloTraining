/// <reference types="cypress" />
import { APIKey, APIToken } from "../../support/constants.cy";

class ShardActions {

    openBoard(URL){
       return cy.visit(URL)
    }


    deleteBoard = (boardId)=>{
        return cy.request("DELETE",`https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`)
    }


  
   
    

}
export default ShardActions;