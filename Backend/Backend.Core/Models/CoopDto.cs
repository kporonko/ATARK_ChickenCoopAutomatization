using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.Models
{
    public class CoopDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int EggsByWeek  { get; set; }
    }
}
