using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Infrastructure.Models
{
    public class EggCollect
    {
        public int EggCollectId { get; set; }
        public DateTime DateOfCollecting { get; set; }
        public int EggsCount { get; set; }
        public int CoopId { get; set; }
        public Coop Coop { get; set; }
    }
}
