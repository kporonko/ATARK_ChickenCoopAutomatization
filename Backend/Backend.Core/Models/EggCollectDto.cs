using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.Models
{
    public class EggCollectDto
    {
        public int CoopId { get; set; }
        public DateTime CollectDate { get; set; }
        public int EggsCount { get; set; }
    }
}
