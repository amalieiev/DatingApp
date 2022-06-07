using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace DatingApp.Automation.Tests;

public class HomePageTests
{

    private IWebDriver _driver;
    
    private readonly By _loginButton = By.XPath("//button[text()='Login']");
    private readonly By _usernameInput = By.XPath("//input[@name='username']");
    private readonly By _passwordInput = By.XPath("//input[@name='password']");
    
    [SetUp]
    public void Setup()
    {
        _driver = new ChromeDriver();
        _driver.Manage().Cookies.DeleteAllCookies();
        _driver.Manage().Window.Maximize();
    }

    [Test]
    public void ShouldOpenHomePage()
    {
        _driver.Navigate().GoToUrl("https://localhost:4200");
        
        _driver.FindElement(_usernameInput).SendKeys("david");
        _driver.FindElement(_passwordInput).SendKeys("qwe123QWE");
        _driver.FindElement(_loginButton).Click();
        
        Assert.Pass();
    }

    [TearDown]
    public void TearDown()
    {
        _driver.Dispose();
    }
}