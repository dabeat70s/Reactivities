using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application;
using Application.activities;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ActivitiesController : BaseController
    {


        [HttpGet]
        public async Task<ActionResult<List<ActivityDTO>>> List()
        {


            return await Med.Send(new ActList.Query());
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<ActivityDTO>> Details(Guid id)
        {
            return await Med.Send(new ActDetails.Query { Id = id });
        }


        [HttpPost]
        public async Task<ActionResult<Unit>> Create(ActCreate.Command cmd)
        {
            return await Med.Send(cmd);
        }

        [HttpPut("{id}")]
        [Authorize(Policy = "IsActivityHost")]
        public async Task<ActionResult<Unit>> Edit(Guid id, ActEdit.Command cmd)
        {
            cmd.Id = id;
            return await Med.Send(cmd);
        }

        
        [HttpDelete("{id}")]
        [Authorize(Policy = "IsActivityHost")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await Med.Send(new ActDelete.Command { Id = id });
        }

        [HttpPost("{id}/attend")]
        public async Task<ActionResult<Unit>> Attend(Guid id)
        {
            return await Med.Send(new Attend.Command { Id = id });
        }

        [HttpDelete("{id}/attend")]
        public async Task<ActionResult<Unit>> Unattend(Guid id)
        {
            return await Med.Send(new UnAttend.Command { Id = id });
        }

    }
}