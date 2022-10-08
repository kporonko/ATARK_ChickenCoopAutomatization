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
        public double TemperatureCelsius { get; set; }
        public int ProfileId { get; set; }
        public Profile Profile { get; set; }
        public List<CoopFeeding> CoopFeedings { get; set; } = new List<CoopFeeding>();
    }
}
