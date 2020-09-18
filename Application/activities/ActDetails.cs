using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using Domain;
using MediatR;
using Persistence;

namespace Application.activities
{
    public class ActDetails
    {
        public class Query : IRequest<Activity>
        {
            public Guid Id { get; set; }

        }

        public class Handler : IRequestHandler<Query, Activity>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                var activ = await _context.Activities.FindAsync(request.Id);
                if (activ == null)
                       throw new RestException(System.Net.HttpStatusCode.NotFound, new {activity = "Not Found"});


                return activ;
            }
        }
    }
}