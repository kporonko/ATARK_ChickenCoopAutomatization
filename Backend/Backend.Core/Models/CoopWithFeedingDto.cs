using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.Models
{
    public class CoopWithFeedingDto
    {
        public string Name { get; set; }
        public double TemperatureCelsius { get; set; }
        public DateTime LastFeeding { get; set; }
        public List<DateTime> AllFeedingsHistory { get; set; } 
    }
}
