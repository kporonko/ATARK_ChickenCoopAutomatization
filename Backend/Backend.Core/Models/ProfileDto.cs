using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.Models
{
    public class ProfileDto
    {
        public int ProfileId { get; set; }
        public string FirstFeeding { get; set; }
        public string SecondFeeding { get; set; }
        public string Email { get; set; }
    }
}
