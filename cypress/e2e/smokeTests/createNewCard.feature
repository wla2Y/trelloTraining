


Feature: Create A new Card functionality 

    Scenario: verify  that the user can create a new card successfully
    
        Given The user navigate to board
        When  Clicks on Add a card button
        And   Enters a title for the card
        And   Clicks on Add card button
        Then  A new card will be created
