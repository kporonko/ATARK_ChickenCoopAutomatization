using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Infrastructure.Configuration
{
    public class ThermometerConfiguration : IEntityTypeConfiguration<Thermometer>
    {
        public void Configure(EntityTypeBuilder<Thermometer> builder)
        {
            builder
                .ToTable("Thermometer")
                .HasKey(x => x.ThermometerId);
            builder
                .Property(x => x.ThermometerId)
                .IsRequired()
                .HasColumnName("ThermometerId")
                .HasColumnType("int")
                .ValueGeneratedOnAdd();
            builder
                .Property(x => x.IP)
                .IsRequired()
                .HasColumnName("IP")
                .HasColumnType("varchar(max)");
            builder
                .Property(x => x.TemperatureCelsius)
                .HasColumnName("TemperatureCelsius")
                .HasColumnType("float");
            builder
                .Property(x => x.ApiKey)
                .HasColumnName("ApiKey")
                .HasColumnType("varchar(max)");
        }
    }
}
