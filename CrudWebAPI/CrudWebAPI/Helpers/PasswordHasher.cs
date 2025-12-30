using System.Security.Cryptography;
using System.Text;

namespace CrudWebAPI.Helpers
{
    public class PasswordHasher
    {
        public static string HashCode(string password)
        {
            var sha = SHA256.Create();
            var bytes = Encoding.UTF8.GetBytes(password);
            var hashedBytes = sha.ComputeHash(bytes);
            return Convert.ToBase64String(hashedBytes);
        }
        //public static bool verifyPassword()
        //    {
            
        //    }

        internal static object HashCode(object password)
        {
            throw new NotImplementedException();
        }

        internal static object HashPassword(object password)
        {
            throw new NotImplementedException();
        }
    }
}
