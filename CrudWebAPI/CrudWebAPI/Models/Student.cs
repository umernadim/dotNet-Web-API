using System;
using System.Collections.Generic;

namespace CrudWebAPI.Models;

public partial class Student
{
    public int Id { get; set; }

    public string? StudName { get; set; }

    public int? Age { get; set; }

    public string? Gender { get; set; }
}
