using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Services;

public interface IUsersService
{
    Task<AppUser> CreateUser(string username, string password);
    Task<IEnumerable<AppUser>> GetAllUsers();
    Task<AppUser> GetUserById(int userId);
    Task<bool> ChangeUserPassword(string username, string password);
    Task<AppUser> GetUserByUserName(string username);
}