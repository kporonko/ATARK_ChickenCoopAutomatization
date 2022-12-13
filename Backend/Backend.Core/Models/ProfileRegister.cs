using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Backend.Core.Models
{
    public class ProfileRegister
    {
        [DataType(DataType.EmailAddress)]
        public string Login { get; set; }
        [StringLength(100, MinimumLength = 8)]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [RegularExpression("^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$")]
        public string TimeOfFirstFeeding { get; set; }
        [RegularExpression("^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$")]
        public string TimeOfSecondFeeding { get; set; }
    }
}
