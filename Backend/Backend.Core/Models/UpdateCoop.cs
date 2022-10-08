using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.Models
{
    public class UpdateCoop
    {
        public int CoopId { get; set; }
        public double NewTemperature { get; set; }
    }
}
