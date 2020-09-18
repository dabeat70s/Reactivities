using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.activities;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivitiesController : ControllerBase
    {
        private readonly IMediator _med;
        public ActivitiesController(IMediator med)
        {
            _med = med;
        }

        [HttpGet]
        public async Task<ActionResult<List<Activity>>> List()
        {
        

            return await _med.Send(new ActList.Query());
        }

       
        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> Details(Guid id)
        {
            return await _med.Send(new ActDetails.Query{Id = id});
        }


        [HttpPost]
        public async Task<ActionResult<Unit>> Create(ActCreate.Command cmd)
        {
            return await _med.Send(cmd);
        }


        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, ActEdit.Command cmd)
        {
            cmd.Id = id;
            return await _med.Send(cmd);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await _med.Send(new ActDelete.Command{Id = id});
        }

    }
}