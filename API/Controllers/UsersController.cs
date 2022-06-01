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
    public async Task<ActionResult<AppUser[]>> GetUsers()
    {
        return await _usersService.GetAllUsers();
    }

    [HttpGet("{username}")]
    public async Task<ActionResult<AppUser>> GetUserById(string username)
    {
        return await _usersService.GetUserByUserName(username);
    }
}