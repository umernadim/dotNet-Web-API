using CrudWebAPI.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace CrudWebAPI.Services
{
    public class TokenServices
    {
        private IConfiguration _confiuration;

        public TokenServices(IConfiguration configuration)
        {
            _confiuration = configuration;
        }
        public string GenerateToken(User user)
        {
            var jwt = _confiuration.GetSection("Jwt");
            var key = Encoding.UTF8.GetBytes(jwt["Key"]);

            var claims = new[]
            {
                new Claim (ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role, user.Role)
            };

            var token = new JwtSecurityToken(
               issuer: jwt["Issuer"],
               audience: jwt["Audience"],
               claims: claims,
               expires: DateTime.UtcNow.AddMinutes(Convert.ToDouble(jwt["ExpiryInMinutes"])),
               signingCredentials: new SigningCredentials
               (
                   new SymmetricSecurityKey(key),
                   SecurityAlgorithms.HmacSha256)
                );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
