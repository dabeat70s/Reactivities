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
            .ForMember(destinationMember=>destinationMember.Username, o=> o.MapFrom(sourceMember=>sourceMember.AppUser.UserName))
            .ForMember(d=> d.DisplayName, o=>o.MapFrom(s => s.AppUser.DisplayName)) ;
        }
        
    }
}