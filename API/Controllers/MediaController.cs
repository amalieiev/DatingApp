using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Extensions;
using API.Helpers;
using API.Interfaces;
using API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace API.Controllers;

[ApiController]
[Authorize]
[Route("api/[controller]")]
public class MediaController : ControllerBase
{
    private readonly DataContext _context;
    private readonly IPhotoService _photoService;

    public MediaController(DataContext context, IPhotoService photoService)
    {
        _context = context;
        _photoService = photoService;
    }


    [AllowAnonymous]
    [HttpPost("Upload")]
    public IActionResult Register()
    {
        var data = new { Name = "Hello", Value = "World"};
        return Ok(data);
    }
}