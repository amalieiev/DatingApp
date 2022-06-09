Feature: UserShouldBeAbleToLogIn

Scenario: Add two numbers
	Given user is navigated to home page
	When user is entered david username and qwe123QWE password
	And user clicked login button
	Then user should be navigated to matches page