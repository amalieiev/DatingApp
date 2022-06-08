using OpenQA.Selenium;

namespace DatingApp.Automation.Tests.Pages;

public class HomePage
{
    private IWebDriver _driver;
    
    private readonly By _loginButton = By.XPath("//button[text()='Login']");
    private readonly By _usernameInput = By.XPath("//input[@name='username']");
    private readonly By _passwordInput = By.XPath("//input[@name='password']");

    public HomePage(IWebDriver driver)
    {
        _driver = driver;
    }

    public void NavigateToPage()
    {
        _driver.Navigate().GoToUrl("https://localhost:4200");
    }

    public void LoginAsUserWithCredentials(string username, string password)
    {
        _driver.FindElement(_usernameInput).SendKeys(username);
        _driver.FindElement(_passwordInput).SendKeys(password);
        _driver.FindElement(_loginButton).Click();
    }
}