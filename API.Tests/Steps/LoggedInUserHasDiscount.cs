using FluentAssertions;
using Shop.Services;
using TechTalk.SpecFlow;

namespace API.Tests.Steps;

[Binding]
public class LoggedInUserHasDiscount
{
    private Basket _basket { get; set; }
    private User _user { get; set; }

    [Given(@"(.*) is logged in")]
    public void GivenUserIsLoggedIn(string username)
    {
        _basket = new Basket();
        _user = new User(username);
        _basket.Login(_user);
    }

    [Given(@"basket is empty")]
    public void GivenBasketIsEmpty()
    {
        _basket.Empty();
    }

    [When(@"(.*) with price (.*) added to order")]
    public void WhenProductWithPriceAddedToOrder(string productName, int price)
    {
        var product = new Product()
        {
            Price = price,
            Title = productName
        };
        
        _basket.AddProduct(product);
    }

    [Then(@"total price is (.*) USD")]
    public void ThenTotalPriceIsUsd(int price)
    {
        var total = _basket.GetTotal();
        total.Should().Be(price);
    }

    [Given(@"User has discount (.*)%;")]
    public void GivenUserHasDiscount(int discount)
    {
        _user.Discount = discount;
    }

    [Given(@"user is not logged in;")]
    public void GivenUserIsNotLoggedIn()
    {
        _basket = new Basket();
    }
}