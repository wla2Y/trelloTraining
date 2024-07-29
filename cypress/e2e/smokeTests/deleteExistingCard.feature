
Feature: Delete Existing Card functionality 

    Scenario: verify  that the user can delete a  card successfully
    
        Given The user navigate to board
        And   Clicks on  card to delete   
        And   Clicks on  archive button  
        When  Clicks on delete button
        And   Confirm the delete 
        Then  the card  will be deleted 
        
