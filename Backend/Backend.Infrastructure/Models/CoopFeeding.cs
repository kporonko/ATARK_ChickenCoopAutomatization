using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Infrastructure.Models
{
    public class CoopFeeding
    {
        public int CoopFeedingId { get; set; }
        public DateTime DateOfFeeding { get; set; }
        public int CoopId { get; set; }
        public Coop Coop { get; set; }
    }
}
