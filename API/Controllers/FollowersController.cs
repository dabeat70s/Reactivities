using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Followers;
using Application.Profiles;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/profiles")]
    public class FollowersController: BaseController
    {
        [HttpPost("{username}/follow")]
        public async Task<ActionResult<Unit>> Follow(string username)
        {
            return await Med.Send(new Add.Command{Username = username});
        }

           [HttpDelete("{username}/follow")]
        public async Task<ActionResult<Unit>> Unfollow(string username)
        {
            return await Med.Send(new Delete.Command{Username = username});
        }

        [HttpGet("{username}/follow")]
         public async Task<ActionResult<List<Profile>>> Getfollowings(string username, string predicate)
        {
            return await Med.Send(new List.Query{Username = username,Predicate = predicate});
        }


    }
}