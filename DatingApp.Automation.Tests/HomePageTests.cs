using System.Threading;
using DatingApp.Automation.Tests.Pages;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace DatingApp.Automation.Tests;

public class HomePageTests
{
    private readonly IWebDriver _driver = new ChromeDriver();
    private HomePage _homePage;
    private MatchesPage _matchesPage;

    [SetUp]
    public void Setup()
    {
        _homePage = new HomePage(_driver);
        _matchesPage = new MatchesPage(_driver);

        _driver.Manage().Cookies.DeleteAllCookies();
        _driver.Manage().Window.Maximize();
    }

    [Test]
    public void ShouldLoginUser_WhenCredentialsAreValid()
    {
        _homePage.NavigateToPage();
        _homePage.LoginAsUserWithCredentials("david", "qwe123QWE");

        Thread.Sleep(1000);

        _matchesPage.ShouldBeOpen();
    }

    [TearDown]
    public void TearDown()
    {
        _driver.Dispose();
    }
}