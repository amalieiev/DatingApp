using API.DTOs;
using API.Entities;
using API.Services;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly IUsersService _usersService;
    private readonly IMapper _mapper;

    public UsersController(IUsersService usersService, IMapper mapper)
    {
        _usersService = usersService;
        _mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
    {
        return Ok(_mapper.Map<IEnumerable<MemberDto>>(await _usersService.GetAllUsers()));
    }

    [HttpGet("{username}")]
    public async Task<ActionResult<MemberDto>> GetUserById(string username)
    {
        var user = await _usersService.GetUserByUserName(username);

        if (user is null) return NotFound();

        return Ok(_mapper.Map<MemberDto>(user));
    }
}