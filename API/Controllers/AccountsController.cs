using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class AccountController : BaseApiController
{
    private readonly DataContext _context;

    public AccountController(DataContext context)
    {
        _context = context;
    }


    [HttpPost("register")]
    public async Task<ActionResult<AppUser>> Register(RegisterDto data)
    {
        var isUserExist = await _context.Users.AnyAsync(x => x.UserName.ToLower() == data.Username.ToLower());

        if (isUserExist) return BadRequest("Username is already taken");

        using var hmac = new HMACSHA512();

        var user = new AppUser
        {
            UserName = data.Username.ToLower(),
            PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(data.Password)),
            PasswordSalt = hmac.Key
        };

        _context.Users.Add(user);

        await _context.SaveChangesAsync();

        return user;
    }

    [HttpPost("login")]
    public async Task<ActionResult<AppUser>> Login(LoginDto data)
    {
        var user = await _context.Users.SingleOrDefaultAsync(x => x.UserName == data.Username);

        if (user is null) return Unauthorized("User not found");

        using var hmac = new HMACSHA512(user.PasswordSalt);

        var passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(data.Password));

        for (var i = 0; i < passwordHash.Length; i++)
        {
            if (passwordHash[i] != user.PasswordHash[i]) return Unauthorized("Password is invalid");
        }

        return user;
    }
}
