using API.DTOs;
using API.Entities;
using API.Interfaces;

namespace API.Extensions;

public static class AppUserExtensions
{
    public static UserDto ToUserDto(this AppUser user, ITokenService tokenService)
    {
        return new UserDto {Token = tokenService.CreateToken(user), Username = user.UserName};
    }
}