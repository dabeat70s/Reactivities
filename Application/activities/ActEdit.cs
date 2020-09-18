using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.activities
{
    public class ActEdit
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Title { get; set; }
            public string Description { get; set; }
            public string Category { get; set; }
            public DateTime? Date { get; set; }
            public string City { get; set; }
            public string Venue { get; set; }
        }

          public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Title).NotEmpty();
                RuleFor(x => x.Description).NotEmpty();
                RuleFor(x => x.Category).NotEmpty();
                RuleFor(x => x.Date).NotEmpty();
                RuleFor(x => x.City).NotEmpty();
                RuleFor(x => x.Venue).NotEmpty();
            }
        }


        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;

            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activ = await _context.Activities.FindAsync(request.Id);

                if (activ == null)
                       throw new RestException(System.Net.HttpStatusCode.NotFound, new {activity = "Not Found"});

                activ.Title = request.Title ?? activ.Title;
                activ.Description = request.Description ?? activ.Description;
                activ.Category = request.Category ?? activ.Category;
                activ.Date = request.Date ?? activ.Date;
                activ.City = request.City ?? activ.City;
                activ.Venue = request.Venue ?? activ.Venue;

                var success = await _context.SaveChangesAsync() > 0;

                if (success)
                {
                    return Unit.Value;
                }
                throw new Exception("Problem saving chamges");


            }
        }
    }
}