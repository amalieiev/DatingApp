namespace Shop.Services;

public class Basket
{
    private int _total = 0;

    private User _user;

    private List<Product> _products = new List<Product>(){};

    public void Login(User user)
    {
        _user = user;
    }

    public void AddProduct(Product product)
    {
        _products.Add(product);
    }

    public void Empty()
    {
        _products = new List<Product>();
    }

    public double GetTotal()
    {
        _total = 0;
        
        _products.ForEach(product =>
        {
            _total += product.Price;
        });

        if (_user is not null)
        {
            return _total - _total / 100 * _user.Discount;
        }

        return _total;
    }
}

public class Product
{
    public string Title { get; set; }

    public int Price { get; set; }
}

public class User
{
    private readonly string _username;

    public User(string username)
    {
        _username = username;
    }

    public int Discount { get; set; }
}