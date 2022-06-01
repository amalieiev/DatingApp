using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Services;

public class UsersService : IUsersService
{
    private readonly DataContext _context;

    public UsersService(DataContext context)
    {
        _context = context;
    }

    public async Task<AppUser> CreateUser(string username, string password)
    {
        using var hmac = new HMACSHA512();

        var user = new AppUser
        {
            UserName = username.ToLower(),
            PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password)),
            PasswordSalt = hmac.Key
        };

        _context.Users.Add(user);

        await _context.SaveChangesAsync();

        return user;
    }

    public Task<AppUser[]> GetAllUsers()
    {
        return _context.Users.ToArrayAsync();
    }

    public async Task<AppUser> GetUserById(int userId)
    {
        return await _context.Users.FindAsync(userId);
    }

    public async Task<bool> ChangeUserPassword(string username, string password)
    {
        var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName == username);

        if (user is null) return false;
        
        using var hmac = new HMACSHA512();

        user.PasswordSalt = hmac.Key;
        user.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));

        _context.Entry(user).State = EntityState.Modified;

        return await _context.SaveChangesAsync() > 0;
    }
}