using System.Net;

namespace Backend.Core.Interfaces
{
    public interface ICoopService
    {
        public List<CoopDto> GetAllProfileCoops(int profileId); 
        public CoopWithFeedingDto? GetCoopById(int coopId);
        public HttpStatusCode AddFeeding(FeedingDto feeding);
        public HttpStatusCode AddCoop(AddCoopDto coop);
        public HttpStatusCode DeleteCoop(DeleteCoopDto coop);
        public HttpStatusCode UpdateCoop(UpdateCoop coopUpd);
    }
}
