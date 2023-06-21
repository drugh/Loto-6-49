using Newtonsoft.Json;
using System.Net.Sockets;
using webapi.Models;
using webapi.Services.Interfaces;

namespace webapi.Services
{
	public class TicketsService : ITicketsService
	{
		private static readonly string folderPath = "Tickets";
		private static readonly string filePath = Path.Combine(folderPath, "ticket.json");

		public OutputModel GenerateNumbers(int numberOfTickets, bool superzahl)
		{
			var result = new int[numberOfTickets][];
			var outputModel = new OutputModel();
			var random = new Random();

			foreach (var ticket in Enumerable.Range(0, numberOfTickets))
			{
				int[] randomNumbers = Enumerable.Range(1, 49)
					.OrderBy(x => random.Next())
					.Take(6)
					.OrderBy(x => x)
					.ToArray();

				result[ticket] = randomNumbers;
			}

			if (superzahl)
			{
				outputModel.Superzahl = random.Next(10);
			}

			outputModel.Tickets = result;
			StoreTickets(outputModel);

			return outputModel;
		}

		public List<OutputModel> GetAllTickets()
		{
			string content = File.ReadAllText(filePath);
			return JsonConvert.DeserializeObject<List<OutputModel>>(content) ?? new List<OutputModel>();
		}

		private void StoreTickets(OutputModel model)
		{
			var tickets = new List<OutputModel>();

			Directory.CreateDirectory(folderPath);

			if (File.Exists(filePath))
			{
				string content = File.ReadAllText(filePath);
				tickets = JsonConvert.DeserializeObject<List<OutputModel>>(content);
			}

			tickets.Add(model);

			var updatedContent = JsonConvert.SerializeObject(tickets);

			File.WriteAllText(filePath, updatedContent);
		}
	}
}
