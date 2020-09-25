using System.Linq;
using System.Security.Claims;
using Application.Interfaces;
using Microsoft.AspNetCore.Http;

namespace Infrastructure.Security
{
    public class UserAccessor : IUserAccessor
    {
        private readonly IHttpContextAccessor __httpContAcc;
        public UserAccessor(IHttpContextAccessor _httpContAcc)
        {
            __httpContAcc = _httpContAcc;
        }

        public string GetCurrentUsername()
        {
            var username = __httpContAcc.HttpContext.User?.Claims?.FirstOrDefault(x=>x.Type == ClaimTypes.NameIdentifier)?.Value;

            return username;
        }
    }
}