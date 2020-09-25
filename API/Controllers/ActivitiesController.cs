using System;
using System.Collections.Generic;
using System.Threading.Tasks;
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
        public async Task<ActionResult<List<Activity>>> List()
        {
        

            return await Med.Send(new ActList.Query());
        }

       
        [HttpGet("{id}")]        
        public async Task<ActionResult<Activity>> Details(Guid id)
        {
            return await Med.Send(new ActDetails.Query{Id = id});
        }


        [HttpPost]
        public async Task<ActionResult<Unit>> Create(ActCreate.Command cmd)
        {
            return await Med.Send(cmd);
        }


        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, ActEdit.Command cmd)
        {
            cmd.Id = id;
            return await Med.Send(cmd);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await Med.Send(new ActDelete.Command{Id = id});
        }

    }
}