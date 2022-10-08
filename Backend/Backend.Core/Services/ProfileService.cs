using Backend.Infrastructure.Data;
using Backend.Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.Services
{
    public class ProfileService : IProfileService
    {
        /// <summary>
        /// Entity Framework DbContext.
        /// </summary>
        private readonly ApplicationContext _context;
        public ProfileService(ApplicationContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Method checks if the profile exists and password is valid and returns id of profile.
        /// </summary>
        /// <param name="profileLogin">Entered by user profile data.</param>
        /// <returns>Dto with Id of user if data is valid or null if data was invalid.</returns>
        public ProfileDto? Login(string login, string password)
        {
            Profile? dbProfile = _context.Profiles.FirstOrDefault(x => x.Login == login);
            ProfileLogin profileLogin = new ProfileLogin { Login = login, Password = password };
            if (ProfileLoginIsValid(dbProfile, profileLogin))
                return ConvertProfileIntoDto(dbProfile);
            return null;
        }

        /// <summary>
        /// Creates a new Profile
        /// </summary>
        /// <param name="profileRegister"></param>
        /// <returns>201 statuscode if profile was created. In another case 409.</returns>
        public HttpStatusCode RegisterProfile(ProfileRegister profileRegister)
        {
            if (IsLoginExists(profileRegister.Login))
                return HttpStatusCode.Conflict;
            Profile profile = ConvertRegisterProfileToProfile(profileRegister);
            AddProfileToDb(profile);
            return HttpStatusCode.Created;
        }

        /// <summary>
        /// Checks whether profile login and password match the actual data in the db.
        /// </summary>
        /// <param name="dbProfile">Profile received from the db by entered login.</param>
        /// <param name="profileLogin">Profile entered by user.</param>
        /// <returns>True if logins and passwords match. False if there no such a login or incorrect password.</returns>
        private bool ProfileLoginIsValid(Profile dbProfile, ProfileLogin profileLogin)
        {
            if (dbProfile == null)
                return false;
            if (DoesPasswordsMatch(dbProfile.PasswordHash, profileLogin.Password))
                return true;
            return false;
        }


        /// <summary>
        /// Checks if 2 hashes 
        /// </summary>
        /// <param name="existingHash"></param>
        /// <param name="enteredPassword"></param>
        /// <returns></returns>
        private bool DoesPasswordsMatch(string existingHash, string enteredPassword)
        {
            if(existingHash == ConvertPasswordToHash(enteredPassword))
                return true;
            return false;
        }

        /// <summary>
        /// Converts password string to hash.
        /// </summary>
        /// <param name="password">Entered password.</param>
        /// <returns>Hash of password.</returns>
        private string ConvertPasswordToHash(string password)
        {
            using SHA256 sha256Hash = SHA256.Create();
            byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(password));
            StringBuilder builder = new StringBuilder();
            for (int i = 0; i < bytes.Length; i++)
            {
                builder.Append(bytes[i].ToString("x2"));
            }
            return builder.ToString();
        }

        /// <summary>
        /// Converts Profile object into dto.
        /// </summary>
        /// <param name="profile">Profile from db.</param>
        /// <returns>Dto of profile.</returns>
        private ProfileDto ConvertProfileIntoDto(Profile profile)
        {
            ProfileDto dto = new ProfileDto { ProfileId = profile.ProfileId };
            return dto;
        }


        /// <summary>
        /// Checks whether the login is already taken.
        /// </summary>
        /// <param name="profileRegister"></param>
        /// <returns></returns>
        private bool IsLoginExists(string login)
        {
            Profile? profile = _context.Profiles.FirstOrDefault(x => x.Login == login);
            if (profile == null)
                return false;
            return true;
        }

        /// <summary>
        /// Converts register data to profile model.
        /// </summary>
        /// <param name="profileRegister">Registration data.</param>
        /// <returns>Profile model object.</returns>
        private Profile ConvertRegisterProfileToProfile(ProfileRegister profileRegister)
        {
            Profile profile = new Profile { FirstName = profileRegister.FirstName, LastName = profileRegister.LastName, Login = profileRegister.Login };
            profile.PasswordHash = ConvertPasswordToHash(profileRegister.Password);
            return profile;
        }

        /// <summary>
        /// Adds the profile to database.
        /// </summary>
        /// <param name="profile">Profile to add.</param>
        private void AddProfileToDb(Profile profile)
        {
            _context.Profiles.Add(profile);
            _context.SaveChanges();
        }
    }
}
