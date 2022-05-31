using API.Entities;

namespace API.Services;

public interface IUsersService
{
    Task<AppUser> CreateUser(string username, string password);
    Task<AppUser[]> GetAllUsers();
    Task<AppUser> GetUserById(int userId);
    Task<bool> ChangeUserPassword(string username, string password);
}