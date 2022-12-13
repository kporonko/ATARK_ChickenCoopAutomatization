using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Infrastructure.Models
{
    public class Coop
    {
        public int CoopId { get; set; }
        public string CoopName { get; set; }
        public int ProfileId { get; set; }
        public Profile Profile { get; set; }
        public List<CoopFeeding> CoopFeedings { get; set; } = new List<CoopFeeding>();
        public List<EggCollect> EggCollects { get; set; } = new List<EggCollect>();
        public int ThermometerId { get; set; }
        public Thermometer Thermometer { get; set; }
    }
}
