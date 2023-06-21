using webapi.Models;

namespace webapi.Services.Interfaces
{
	public interface ITicketsService
	{
		public OutputModel GenerateNumbers(int numberOfTickets, bool superzahl);
		public List<OutputModel> GetAllTickets();
	}
}
