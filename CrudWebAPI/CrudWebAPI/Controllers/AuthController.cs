using CrudWebAPI.Data;
using CrudWebAPI.Helpers;
using CrudWebAPI.Models;
using CrudWebAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CrudWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly CrudContext _context;
        private readonly TokenServices _tokenServices;
        public AuthController(CrudContext context, TokenServices tokenServices)
        {
            _context = context;
            _tokenServices = tokenServices;
        }
        [HttpPost("register")]
        public IActionResult RegisterUser(User user)
        {
            var existingUser = _context.Users.FirstOrDefault(u => u.Username == user.Username);

            if(existingUser != null)
            {
                return BadRequest("User already exists");
            }

            var hashedPassword = PasswordHasher.HashCode(user.PasswordHash);
            user.PasswordHash = hashedPassword;

            _context.Users.Add(user);
            _context.SaveChanges();
            return Ok("User Registered Successfully");
        }
        [HttpPost("login")]
        public IActionResult Login(User user)
        {
            var isUser = _context.Users.FirstOrDefault(u => u.Email == user.Email);
            if(isUser != null)
            {
                return Unauthorized("User not found");
            }
            if(user.PasswordHash != PasswordHasher.HashPassword(isUser.PasswordHash))
            {
                return Unauthorized("Invalid Password");
            }
            var token = _tokenServices.GenerateToken(isUser);
            return Ok(new { Token = token });
        }

    }
}
