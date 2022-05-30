using API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("/api/buggy")]
public class BuggyController : ControllerBase
{
    private readonly DataContext _context;

    public BuggyController(DataContext context)
    {
        _context = context;
    }
    
    [Authorize]
    [HttpGet("auth")]
    public ActionResult<string> Get()
    {
        return "secret text";
    }
    
    [HttpGet("not-found")]
    public ActionResult<string> GetNotFound()
    {
        return NotFound();
    }
    
    [HttpGet("server-error")]
    public ActionResult<string> GetServerError()
    {
        var user = _context.Users.Find(-1);
        return user.UserName;
    }
    
    [HttpGet("bad-request")]
    public ActionResult<string> GetBadRequest()
    {
        return BadRequest("this is bad request");
    }
}