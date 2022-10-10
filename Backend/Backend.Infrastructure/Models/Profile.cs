using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Infrastructure.Models
{
    public class Profile
    {
        public int ProfileId { get; set; }

        [DataType(DataType.EmailAddress)]
        public string Login { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        
        [DataType(DataType.Password)]
        public string PasswordHash { get; set; }
        public string TimeOfFirstFeeding { get; set; }
        public string TimeOfSecondFeeding { get; set; }
        public List<Coop> Coops { get; set; } = new List<Coop>();
    }
}
