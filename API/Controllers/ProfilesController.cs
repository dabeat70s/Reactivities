using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Profiles;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ProfilesController :BaseController
    {
        [HttpGet("{username}")]
        public async Task<ActionResult<Profile>> GetTask(string username)
        {
            return await Med.Send(new Details.Query{Username = username});
        }
        
        [HttpPut]
        public async Task<ActionResult<Unit>> Edit(Edit.Command command)
        {
            return await Med.Send(command);
        }

        [HttpGet("{username}/activities")]
        public async Task<ActionResult<List<UserActivityDTO>>> GetUserActivities
        (string username, string predicate)
        {
            return await Med.Send(new ListActivities.Query
            {Username = username, Predicate = predicate});
        }
        
    }
}