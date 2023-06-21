using Microsoft.AspNetCore.Mvc;
using webapi.Models;
using webapi.Services.Interfaces;

namespace webapi.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class TicketsController : ControllerBase
	{
        private readonly ITicketsService _ticketsService;
        public TicketsController(ITicketsService ticketsService)
        {
            this._ticketsService = ticketsService;
        }

        [HttpPost]
        public IActionResult GenerateTickets([FromBody] InputModel model)
        {
            var result = _ticketsService.GenerateNumbers(model.NumberOfTickets, model.Superzahl);
            return Ok(result);
        }

        [HttpGet]
        public IActionResult GetAllTickets() 
        { 
            var tickets = _ticketsService.GetAllTickets();
            return Ok(tickets);
        }
    }
}
