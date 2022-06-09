using TechTalk.SpecFlow;

namespace DatingApp.Automation.Tests.Steps;

[Binding]
public class UserShouldBeAbleToLogInSteps
{
    [Given(@"user is navigated to home page")]
    public void GivenUserIsNavigatedToHomePage()
    {
        ScenarioContext.StepIsPending();
    }

    [When(@"user is entered (.*) username and (.*) password")]
    public void WhenUserIsEnteredDavidUsernameAndQweQwePassword(int p0)
    {
        ScenarioContext.StepIsPending();
    }

    [When(@"user clicked login button")]
    public void WhenUserClickedLoginButton()
    {
        ScenarioContext.StepIsPending();
    }

    [Then(@"user should be navigated to matches page")]
    public void ThenUserShouldBeNavigatedToMatchesPage()
    {
        ScenarioContext.StepIsPending();
    }
}