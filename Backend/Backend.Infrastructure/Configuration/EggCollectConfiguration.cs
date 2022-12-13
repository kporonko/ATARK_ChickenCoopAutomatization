using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Infrastructure.Configuration
{
    public class EggCollectConfiguration : IEntityTypeConfiguration<EggCollect>
    {
        public void Configure(EntityTypeBuilder<EggCollect> builder)
        {
            builder
                .ToTable("EggCollect")
                .HasKey(x => x.EggCollectId);
            builder
                .Property(x => x.EggCollectId)
                .IsRequired()
                .HasColumnName("EggCollectId")
                .HasColumnType("int")
                .ValueGeneratedOnAdd();
            builder
                .Property(x => x.EggsCount)
                .IsRequired()
                .HasColumnName("EggsCount")
                .HasColumnType("int");
            builder
                .Property(x => x.DateOfCollecting)
                .HasColumnName("DateOfCollecting")
                .HasColumnType("datetime");
        }
    }
}
