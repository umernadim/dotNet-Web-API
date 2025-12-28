using CrudWebAPI.Data;
using CrudWebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CrudWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly CrudContext _context;

        public ProductController(CrudContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult ProductList()
        {
            return Ok(_context.Products.ToList());
        }

        [HttpGet("fetch/{Id}")]
        public IActionResult SingleProductWithId(int id)
        {
            return Ok(_context.Products.Find(id));
        }

        [HttpGet("{prodName}")]
        public IActionResult ProductFilter(string prodName)
        {
            return Ok(_context.Products.Where(p => p.ProdName.Contains(prodName)));
        }

        [HttpPost]
        public IActionResult AddProduct(Product product)
        {
            _context.Products.Add(product);
            _context.SaveChanges();
            return Ok("Product added successfully");
        }
        [HttpPut]
        public IActionResult UpdateProduct(Product product)
        {
            var existingProduct = _context.Products.Find(product.Id);
            if (existingProduct == null)
            {
                return NotFound("Product Not Found");
            }
            existingProduct.ProdName = product.ProdName;
            existingProduct.Price = product.Price;
            existingProduct.Descp = product.Descp;
            _context.SaveChanges();
            return Ok("Product Updated Successfully");
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            var product = _context.Products.Find(id);
            if (product == null)
            {
                return NotFound("Product Not Found");
            }
            _context.Products.Remove(product);
            _context.SaveChanges();
            return Ok("Product Deleted Successfully");
        }
    }
}
