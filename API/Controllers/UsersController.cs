using API.Entities;
using API.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly IUsersService _usersService;

    public UsersController(IUsersService usersService)
    {
        _usersService = usersService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
    {
        return Ok(await _usersService.GetAllUsers());
    }

    [HttpGet("{username}")]
    public async Task<ActionResult<AppUser>> GetUserById(string username)
    {
        var user = await _usersService.GetUserByUserName(username);

        if (user is null) return NotFound();

        return Ok(user);
    }
}