
Feature:  Update Name Of Template functionality 

    Scenario: verify  that the user can update templete name successfully
    
        Given The user navigate to board
        And Clicks on templete card field 
        And   Click on  title of the templete
        When   Update the name of the templete
        Then  The name will be updated successfully
