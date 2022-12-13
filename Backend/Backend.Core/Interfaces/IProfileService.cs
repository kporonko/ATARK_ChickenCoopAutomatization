using System.Net;

namespace Backend.Core.Interfaces
{
    public interface IProfileService
    {
        public ProfileDto? Login(string login, string password);
        public HttpStatusCode RegisterProfile(ProfileRegister profileRegister);
    }
}
