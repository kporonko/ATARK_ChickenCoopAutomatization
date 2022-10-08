using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.Interfaces
{
    public interface ICoopService
    {
        public List<CoopDto> GetAllProfileCoops(int profileId); 
        public CoopWithFeedingDto? GetCoopById(int coopId);
        public HttpStatusCode AddFeeding(FeedingDto feeding);
        public HttpStatusCode AddCoop(AddCoopDto coop);
        public HttpStatusCode DeleteCoop(DeleteCoopDto coop);
        public HttpStatusCode UpdateCoop(double newTemperature);
    }
}
