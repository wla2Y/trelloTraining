
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
      url: `https://api.trello.com/1/boards/${boardId}/lists?key=${APIKey}&token=${APIToken}`,
      header: "Accept: application/json",
    });
  }
 
  createNewCard(id, cardName, isTemplate) {
    console.log(id);
    cy.wait(7000);  
  
    return cy.request({
      method: 'POST',
      url: `https://api.trello.com/1/cards`, 
      qs: {
        idList: id,  
        key: APIKey, 
        token: APIToken 
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
      },
      body: {
        name: cardName,
        isTemplate: isTemplate
      },
      failOnStatusCode: false  
    }).then((response) => {
     
      console.log(response.body);
      return response;
    });
  }

}
export default SharedDataUtils;
