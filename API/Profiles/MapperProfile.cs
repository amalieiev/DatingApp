using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Profiles;

public class MapperProfile : Profile
{
    public MapperProfile()
    {
        CreateMap<AppUser, MemberDto>();
        CreateMap<Photo, PhotoDto>();
    }
}