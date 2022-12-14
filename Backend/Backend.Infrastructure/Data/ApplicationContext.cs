using Backend.Infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Infrastructure.Data
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Coop> Coops { get; set; }
        public DbSet<CoopFeeding> CoopFeedings { get; set; }
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<EggCollect> EggCollects { get; set; }
        public DbSet<Thermometer> Thermometers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=localhost\\SQLSERVER;Initial Catalog=ATARKChickenCoop;Integrated Security=True;MultipleActiveResultSets=true");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ProfileConfiguration());
            modelBuilder.ApplyConfiguration(new CoopConfiguration());
            modelBuilder.ApplyConfiguration(new CoopFeedingConfiguration());
            modelBuilder.ApplyConfiguration(new EggCollectConfiguration());
            modelBuilder.ApplyConfiguration(new ThermometerConfiguration());

            modelBuilder
                .Entity<Coop>()
                .HasOne(x => x.Profile)
                .WithMany(x => x.Coops)
                .HasForeignKey(x => x.ProfileId)
                .IsRequired();
            modelBuilder
                .Entity<CoopFeeding>()
                .HasOne(x => x.Coop)
                .WithMany(x => x.CoopFeedings)
                .HasForeignKey(x => x.CoopId)
                .IsRequired();
            modelBuilder
                .Entity<EggCollect>()
                .HasOne(x => x.Coop)
                .WithMany(x => x.EggCollects)
                .HasForeignKey(x => x.CoopId)
                .IsRequired();
            modelBuilder
                .Entity<Thermometer>()
                .HasOne(x => x.Coop)
                .WithOne(x => x.Thermometer)
                .HasForeignKey<Coop>(x => x.ThermometerId);

        }
    }
}