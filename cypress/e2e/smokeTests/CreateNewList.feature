
Feature: Create A New List functionality 

    Scenario: verify  that the user can create a new List successfully
    
        Given The user navigate to board
        When  Clicks on Add another list
        And   Enters a title for the list
        And   Clicks on Add list button
        Then  A new list will be created