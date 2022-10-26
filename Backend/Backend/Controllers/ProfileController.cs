using Backend.Core.Interfaces;
using Backend.Core.Models;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProfileController : ControllerBase
    {
        private readonly IProfileService _profileService;
        public ProfileController(IProfileService profileService)
        {
            _profileService = profileService;
        }

        [HttpGet]
        [Route("Login")]
        public ActionResult<ProfileDto> LoginUser(string login, string password)
        {
            var profile = _profileService.Login(login, password);
            if(profile == null)
                return NotFound();
            return profile;
        }

        [HttpPost]
        [Route("Register")]
        public IActionResult RegisterNewUser(ProfileRegister profileRegister)
        {
            var response = _profileService.RegisterProfile(profileRegister);
            if(response == HttpStatusCode.Created)
                return CreatedAtAction(nameof(RegisterNewUser), profileRegister);
            return Conflict();
        }
    }
}