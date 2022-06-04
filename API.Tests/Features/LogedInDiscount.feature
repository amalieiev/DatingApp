Feature: Loged in user should have a discount
    As a user
    I want to have 10% discount

Scenario: Loggied in user has discount;
    Given Artem is logged in
    Given User has discount 5%;
    And basket is empty
    When product with price 100 added to order
    Then total price is 95 USD
    
Scenario: Guest has no discount;
    Given user is not logged in;
    And basket is empty
    When product with price 100 added to order
    When product with price 50 added to order
    Then total price is 150 USD