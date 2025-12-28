using System;
using System.Collections.Generic;

namespace CrudWebAPI.Models;

public partial class Product
{
    public int Id { get; set; }

    public string? ProdName { get; set; }

    public double? Price { get; set; }

    public string? Descp { get; set; }
}
