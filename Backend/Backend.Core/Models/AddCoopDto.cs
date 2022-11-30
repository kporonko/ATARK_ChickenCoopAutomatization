using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.Models
{
    public class AddCoopDto
    {
        public string CoopName { get; set; }
        public int ProfileId { get; set; }
        public string? IpThermometer { get; set; }
        public string? ApiKey { get; set; }
    }
}
