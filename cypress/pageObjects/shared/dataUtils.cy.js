/// <reference types="cypress" />
import { APIKey, APIToken } from "../../support/constants.cy";

class SharedDataUtils {
  createNewBoard = (boardName) => {
    return cy.request("POST",`https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}` );
  };

  deleteBoard = (boardId) => {
    return cy.request("DELETE",`https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`);
  };

  // createCard = (cardName) => {
  //   cy.request(
  //     "POST",
  //     `https://api.trello.com/1/cards?idList=66a74c92e563ccdd4ee42aaa&key=${APIKey}&token=${APIToken},name=${cardName}`
  //   );

  //   return this;
  // };
}
export default SharedDataUtils;
