/// <reference types="cypress" />
import { APIKey, APIToken } from "../../support/constants.cy";

class SharedDataUtils {
  createNewBoard = (boardName) => {
    return cy.request("POST",`https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}` );
  };

  deleteBoard = (boardId) => {
    return cy.request("DELETE",`https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`);
  };


  getListsOnBoard(boardId) {
    return cy.request({
      method: "GET",
      url: `/1/boards/${boardId}/lists?key=${APIKey}&token=${APIToken}`,
      header: "Accept: application/json",
    });
  }
  
  

  createNewCard(id,cardName,isTemplate) {
    return cy.request({
      method: "POST",
      url: `/1/cards?idList=${id}&key=${APIKey}&token=${APIToken}`,
      header: "Accept: application/json",
      body: { name: cardName, isTemplate: isTemplate },
    });
  }

}
export default SharedDataUtils;
