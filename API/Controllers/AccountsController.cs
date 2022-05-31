using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Extensions;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AccountController : ControllerBase
{
    private readonly DataContext _context;
    private readonly ITokenService _tokenService;

    public AccountController(DataContext context, ITokenService tokenService)
    {
        _context = context;
        _tokenService = tokenService;
    }


    [HttpPost("Register")]
    public async Task<ActionResult<UserDto>> Register(RegisterDto data)
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

        return new UserDto { Username = user.UserName, Token = _tokenService.CreateToken(user) };
    }

    [HttpPost("Login")]
    public async Task<ActionResult<UserDto>> Login(LoginDto data)
    {
        var user = await _context.Users.SingleOrDefaultAsync(x => x.UserName == data.Username);

        if (user is null) return Unauthorized("User not found");

        using var hmac = new HMACSHA512(user.PasswordSalt);

        var passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(data.Password));

        for (var i = 0; i < passwordHash.Length; i++)
        {
            if (passwordHash[i] != user.PasswordHash[i]) return Unauthorized("Password is invalid");
        }

        return user.ToUserDto(_tokenService);
    }
    
    [HttpPost("ChangePassword")]
    public async Task<ActionResult<bool>> ChangePassword(LoginDto data)
    {
        var user = await _context.Users.SingleOrDefaultAsync(x => x.UserName == data.Username);

        if (user is null) return Unauthorized("User not found");

        using var hmac = new HMACSHA512();

        user.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(data.Password));
        user.PasswordSalt = hmac.Key;

        _context.Entry(user).State = EntityState.Modified;

        await _context.SaveChangesAsync();

        return true;
    }
}
