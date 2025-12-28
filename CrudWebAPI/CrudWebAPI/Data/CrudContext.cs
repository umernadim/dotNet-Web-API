using System;
using System.Collections.Generic;
using CrudWebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace CrudWebAPI.Data;

public partial class CrudContext : DbContext
{
    public CrudContext()
    {
    }

    public CrudContext(DbContextOptions<CrudContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<Student> Students { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Products__3214EC0777C59B8C");

            entity.Property(e => e.Descp).HasColumnType("text");
            entity.Property(e => e.ProdName)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Student>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Students__3214EC0784F784B5");

            entity.Property(e => e.Gender)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.StudName)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
