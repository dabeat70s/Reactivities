using System.Linq;
using AutoMapper;
using Domain;

namespace Application.activities
{
    public class MappingProfile :Profile
    {
        public MappingProfile()
        {
            CreateMap<Activity, ActivityDTO>();
            CreateMap<UserActivity, AttendeeDto>()
            .ForMember(destinationMember=>destinationMember.Username, o=> o.MapFrom(sourceMember=>sourceMember.AppUser.UserName)) //o = options
            .ForMember(d=> d.DisplayName, o=>o.MapFrom(s => s.AppUser.DisplayName))
            .ForMember(d=>d.Image, o => o.MapFrom(s => s.AppUser.Photos.FirstOrDefault(x => x.IsMain).Url)) ;
        }
        
    }
}