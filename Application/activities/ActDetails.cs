using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.activities
{
    public class ActDetails
    {
        public class Query : IRequest<ActivityDTO>
        {
            public Guid Id { get; set; }

        }

        public class Handler : IRequestHandler<Query, ActivityDTO>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<ActivityDTO> Handle(Query request, CancellationToken cancellationToken)
            {
                var activ = await _context.Activities.FindAsync(request.Id);
                // var activ = await _context.Activities
                // .Include(x => x.UserActivities)
                // .ThenInclude(x => x.AppUser)
                // .SingleOrDefaultAsync(x => x.Id == request.Id);
                if (activ == null)
                    throw new RestException(System.Net.HttpStatusCode.NotFound, new { activity = "Not Found" });


                return _mapper.Map<Activity, ActivityDTO>(activ);
            }
        }
    }
}