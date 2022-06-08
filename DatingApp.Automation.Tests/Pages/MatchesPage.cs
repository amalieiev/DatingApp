using NUnit.Framework;
using OpenQA.Selenium;

namespace DatingApp.Automation.Tests.Pages;

public class MatchesPage
{
    private IWebDriver _driver;
    
    private readonly By _pageText = By.XPath("//p[text()='matches works!']");

    public MatchesPage(IWebDriver driver)
    {
        _driver = driver;
    }

    public void Open()
    {
        _driver.Navigate().GoToUrl("https://localhost:4200/matches");
    }

    public void ShouldBeOpen()
    {
        var text = _driver.FindElement(_pageText);
        var isOpen = text is not null;
        
        Assert.IsTrue(isOpen);
    }
}