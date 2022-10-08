using Backend.Core.Interfaces;
using Backend.Core.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CoopController : ControllerBase
    {
        private readonly ICoopService _coopService;
        public CoopController(ICoopService coopService)
        {
            _coopService = coopService;
        }

        [HttpPost]
        [Route("AddCoop")]
        public IActionResult AddCoop(AddCoopDto coop)
        {
            var result = _coopService.AddCoop(coop);
            if (result == System.Net.HttpStatusCode.BadRequest)
                return BadRequest();
            return CreatedAtAction(nameof(AddCoop), result);
        }

        [HttpPost]
        [Route("AddFeeding")]
        public IActionResult AddFeeding(FeedingDto feeding)
        {
            var result = _coopService.AddFeeding(feeding);
            if (result == System.Net.HttpStatusCode.BadRequest)
                return BadRequest();
            return CreatedAtAction(nameof(AddFeeding), result);
        }

        [HttpDelete]
        [Route("DeleteCoop")]
        public IActionResult DeleteCoop(DeleteCoopDto deleteCoop)
        {
            var result = _coopService.DeleteCoop(deleteCoop);
            if (result == System.Net.HttpStatusCode.BadRequest)
                return BadRequest();
            return Ok();
        }

        [HttpGet]
        [Route("GetAllProfileCoops")]
        public ActionResult<List<CoopDto>> GetAllProfileCoops(int profileId)
        {
            var result = _coopService.GetAllProfileCoops(profileId);
            return Ok(result);
        }

        [HttpGet]
        [Route("GetCoopById")]
        public ActionResult<List<CoopDto>> GetCoopById(int coopId)
        {
            var result = _coopService.GetCoopById(coopId);
            if (result is null)
                return BadRequest();
            return Ok(result);
        }

        [HttpPut]
        [Route("UpdateCoop")]
        public IActionResult UpdateCoop(UpdateCoop updateCoop)
        {
            var result = _coopService.UpdateCoop(updateCoop);
            if (result == System.Net.HttpStatusCode.BadRequest)
                return BadRequest();
            return Ok();
        }
    }
}
