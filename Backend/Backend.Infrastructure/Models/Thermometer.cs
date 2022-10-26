using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Infrastructure.Models
{
    public class Thermometer
    {
        public int ThermometerId { get; set; }
        public string IP { get; set; }
        public double TemperatureCelsius { get; set; }
        public Coop Coop { get; set; }
    }
}
