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
        [Route("Coop")]
        public IActionResult AddCoop(AddCoopDto coop)
        {
            var result = _coopService.AddCoop(coop);
            if (result == System.Net.HttpStatusCode.BadRequest)
                return BadRequest();
            return CreatedAtAction(nameof(AddCoop), result);
        }

        [HttpPost]
        [Route("Feeding")]
        public IActionResult AddFeeding(FeedingDto feeding)
        {
            var result = _coopService.AddFeeding(feeding);
            if (result == System.Net.HttpStatusCode.BadRequest)
                return BadRequest();
            return CreatedAtAction(nameof(AddFeeding), result);
        }

        [HttpPost]
        [Route("EggCollect")]
        public IActionResult AddEggCollect(EggCollectDto eggCollect)
        {
            var result = _coopService.AddEggCollect(eggCollect);
            if (result == System.Net.HttpStatusCode.BadRequest)
                return BadRequest();
            return CreatedAtAction(nameof(AddEggCollect), result);
        }

        [HttpDelete]
        [Route("Coop")]
        public IActionResult DeleteCoop(DeleteCoopDto deleteCoop)
        {
            var result = _coopService.DeleteCoop(deleteCoop);
            if (result == System.Net.HttpStatusCode.BadRequest)
                return BadRequest();
            return Ok();
        }

        [HttpGet]
        [Route("AllProfileCoops")]
        public ActionResult<List<CoopDto>> GetAllProfileCoops(int profileId)
        {
            var result = _coopService.GetAllProfileCoops(profileId);
            return Ok(result);
        }

        [HttpGet]
        [Route("CoopById")]
        public ActionResult<List<CoopDto>> GetCoopById(int coopId)
        {
            var result = _coopService.GetCoopById(coopId);
            if (result is null)
                return BadRequest();
            return Ok(result);
        }

        [HttpPut]
        [Route("Coop")]
        public IActionResult UpdateCoop(UpdateCoop updateCoop)
        {
            var result = _coopService.UpdateCoop(updateCoop);
            if (result == System.Net.HttpStatusCode.BadRequest)
                return BadRequest();
            return Ok();
        }
    }
}
