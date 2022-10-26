using Backend.Infrastructure.Data;
using Backend.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace Backend.Core.Services
{
    public class CoopService : ICoopService
    {
        /// <summary>
        /// Entity Framework DbContext.
        /// </summary>
        private readonly ApplicationContext _context;
        public CoopService(ApplicationContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Checks profile. If profile doesnt exist returns 400 sc. 
        /// Otherwise creates coop object from dto and adds to db.
        /// </summary>
        /// <param name="coop">Entered profile id and coop name.</param>
        /// <returns>400 code if cannot find profile. 201 if finds and adds coop to db.</returns>
        public HttpStatusCode AddCoop(AddCoopDto coop)
        {
            var profile = _context.Profiles.Include(x => x.Coops).FirstOrDefault(x => x.ProfileId == coop.ProfileId);
            if (profile == null)
                return HttpStatusCode.BadRequest;
       
            Coop addCoop = new Coop { CoopName = coop.CoopName, Profile = profile, ProfileId = profile.ProfileId };
            if (coop.IpThermometer != null)
                addCoop.Thermometer = new Thermometer { IP = coop.IpThermometer };

            AddToDbCoopObject(addCoop);
            return HttpStatusCode.Created;
        }

        /// <summary>
        /// Checks coop. If coop doesnt exist returns 400 sc.
        /// Otherwise creates coopfeeding object from dto and adds to db.
        /// </summary>
        /// <param name="feeding">Coop id and date of feeding in dto.</param>
        /// <returns>201 if feeding was added to db. Otherwise 400.</returns>
        public HttpStatusCode AddFeeding(FeedingDto feeding)
        {
            Coop? coop = _context.Coops.Include(x => x.CoopFeedings).FirstOrDefault(x => x.CoopId == feeding.CoopId);
            if (coop == null)
                return HttpStatusCode.BadRequest;
            CoopFeeding coopFeeding = new CoopFeeding { Coop = coop, CoopId = coop.CoopId, DateOfFeeding = feeding.FeedingDate };
            AddToDbCoopFeedingObject(coopFeeding);
            return HttpStatusCode.Created;
        }

        /// <summary>
        /// Tries to find coop. If theres no such a coop, returns 400 sc. Otherwise deletes coop from db and returns 200 sc.
        /// </summary>
        /// <param name="coop">Coop id in dto.</param>
        /// <returns>400 if cant find coop. 200 if deletes from db.</returns>
        public HttpStatusCode DeleteCoop(DeleteCoopDto coop)
        {
            var coopToDelete = _context.Coops.FirstOrDefault(x => x.CoopId == coop.CoopId);
            if (coopToDelete == null)
                return HttpStatusCode.BadRequest;
            DeleteCoopFromDb(coopToDelete);
            return HttpStatusCode.OK;
        }

        /// <summary>
        /// Gets all coops info in dto by profile id.
        /// </summary>
        /// <param name="profileId">Profile which coops we get.</param>
        /// <returns>List of coop dto by profile.</returns>
        public List<CoopDto> GetAllProfileCoops(int profileId)
        {
            List<Coop> profileCoops = _context.Coops.Include(x => x.Profile).Include(x => x.Thermometer).Where(x => x.ProfileId == profileId).ToList();
            List<CoopDto> resList = ConvertProfileCoopsToCoopsDtoList(profileCoops);
            return resList;
        }

        /// <summary>
        /// Tries to find coop by id. If doesnt exists, returns null. Otherwise, converts Coop object to Coop Dto 
        /// with feeding info and returns it.
        /// </summary>
        /// <param name="coopId"></param>
        /// <returns>Null if coop doesnt exists. Otherwise, returns coop with feeding dto.</returns>
        public CoopWithFeedingDto? GetCoopById(int coopId)
        {
            Coop? coop = _context.Coops.Include(x => x.CoopFeedings).Include(x => x.Thermometer).Include(x => x.EggCollects).FirstOrDefault(x => x.CoopId == coopId);
            if(coop == null)
                return null;
            CoopWithFeedingDto res = ConvertCoopToCoopWithFeedingDto(coop);
            return res;
        }

        /// <summary>
        /// Checks coop. If coop doesnt exist returns 400 sc.
        /// Otherwise creates eggcollect object from dto and adds to db.
        /// </summary>
        /// <param name="eggCollect">Coop id, date of collecting and eggs count in dto.</param>
        /// <returns>201 if eggcollect was added to db. Otherwise 400.</returns>
        public HttpStatusCode AddEggCollect(EggCollectDto eggCollect)
        {
            Coop? coop = _context.Coops.Include(x => x.EggCollects).FirstOrDefault(x => x.CoopId == eggCollect.CoopId);
            if (coop == null)
                return HttpStatusCode.BadRequest;
            EggCollect collect = new EggCollect { Coop = coop, CoopId = coop.CoopId, DateOfCollecting = eggCollect.CollectDate, EggsCount = eggCollect.EggsCount };
            AddToDbEggCollectObject(collect);
            return HttpStatusCode.Created;
        }

        /// <summary>
        /// Tries to find coop by entered id. Id it doesnt exist returns 400 sc. Otherwise updates coop temperature in db.
        /// </summary>
        /// <param name="coopUpd">Coop id and new temperature in dto object.</param>
        /// <returns>400 if cant find coop. Otherwise, 200, if updates coop temperature.</returns>
        public HttpStatusCode UpdateCoop(UpdateCoop coopUpd)
        {
            var coop = _context.Coops.Include(x => x.Thermometer).FirstOrDefault(x => x.CoopId == coopUpd.CoopId);
            if (coop == null)
                return HttpStatusCode.BadRequest;
            UpdateCoopContext(coop, coopUpd.NewTemperature);
            return HttpStatusCode.OK;
        }

        /// <summary>
        /// Updates coop temperature field in db.
        /// </summary>
        /// <param name="coop">Coop to update.</param>
        /// <param name="newTemperature">New temperature in coop.</param>
        private void UpdateCoopContext(Coop coop, double newTemperature)
        {
            coop.Thermometer.TemperatureCelsius = newTemperature;
            _context.SaveChanges();
        }

        /// <summary>
        /// Adds and saves coop object to db.
        /// </summary>
        /// <param name="coop">Coop to add.</param>
        private void AddToDbCoopObject(Coop coop)
        {
            _context.Coops.Add(coop);
            _context.SaveChanges();
        }

        /// <summary>
        /// Adds coop feeding object to db.
        /// </summary>
        /// <param name="coopFeeding">Coop feeding info to add.</param>
        private void AddToDbCoopFeedingObject(CoopFeeding coopFeeding)
        {
            _context.CoopFeedings.Add(coopFeeding);
            _context.SaveChanges();
        }

        /// <summary>
        /// Deletes coop object to db.
        /// </summary>
        /// <param name="coop">Coop to delete.</param>
        private void DeleteCoopFromDb(Coop coop)
        {
            _context.Coops.Remove(coop);
            _context.SaveChanges();
        }

        /// <summary>
        /// Converts coops list to coops dto list with names and temperatures.
        /// </summary>
        /// <param name="coops">Coops to convert.</param>
        /// <returns>Coop dto list with names and temperatures.</returns>
        private List<CoopDto> ConvertProfileCoopsToCoopsDtoList(List<Coop> coops)
        {
            List<CoopDto> resList = new List<CoopDto>();
            foreach (Coop coop in coops)
            {
                CoopDto coopDto = new CoopDto { Name = coop.CoopName, TemperatureCelsius = coop.Thermometer.TemperatureCelsius };
                resList.Add(coopDto);
            }
            return resList;
        }

        /// <summary>
        /// Converts coop object into coop dto with feeding infos.
        /// </summary>
        /// <param name="coop">Coop to convert.</param>
        /// <returns>Dto with coop info and info about feedings.</returns>
        private CoopWithFeedingDto ConvertCoopToCoopWithFeedingDto(Coop coop)
        {
            CoopWithFeedingDto resCoopInfo = new CoopWithFeedingDto { Name = coop.CoopName, TemperatureCelsius = coop.Thermometer.TemperatureCelsius };
            resCoopInfo.EggCollects = GetEggCollects(coop);
            resCoopInfo.AllFeedingsHistory = GetAllFeedingsHistory(coop);
            resCoopInfo.EggsByWeek = CountEggsThisWeek(resCoopInfo.EggCollects);
            return resCoopInfo;
        }

        /// <summary>
        /// Gets last feeding datetime by coop.
        /// </summary>
        /// <param name="coop">Coop which last feeding we want to get.</param>
        /// <returns>Datetime of the last coop feeding.</returns>
        private Dictionary<DateTime, int> GetEggCollects(Coop coop)
        {
            Dictionary<DateTime, int> collects = coop.EggCollects.OrderByDescending(x => x.DateOfCollecting).ToDictionary(x => x.DateOfCollecting, x => x.EggsCount);
            return collects;
        }

        /// <summary>
        /// Gets ordered list of datetimes of coop feedings.
        /// </summary>
        /// <param name="coop"></param>
        /// <returns></returns>
        private List<DateTime> GetAllFeedingsHistory(Coop coop)
        {
            List<DateTime> allFeedings = coop.CoopFeedings.OrderByDescending(x => x.DateOfFeeding).Select(x => x.DateOfFeeding).ToList();
            return allFeedings;
        }

        /// <summary>
        /// Adds and saves egg collect object to db.
        /// </summary>
        /// <param name="eggCollect">Egg collect to add.</param>
        private void AddToDbEggCollectObject(EggCollect eggCollect)
        {
            _context.EggCollects.Add(eggCollect);
            _context.SaveChanges();
        }

        /// <summary>
        /// Counts eggs for last 7 days by date and eggscount values pair.
        /// </summary>
        /// <param name="eggsCollects"></param>
        /// <returns></returns>
        private int CountEggsThisWeek(Dictionary<DateTime, int> eggsCollects)
        {
            int count = 0;
            foreach (var item in eggsCollects)
            {
                if ((DateTime.Now - item.Key).Days < 7)
                    count += item.Value; 
            }
            return count;
        }
    }
}
