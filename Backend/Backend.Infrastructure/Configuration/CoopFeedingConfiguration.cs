
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Backend.Infrastructure.Configuration
{
    public class CoopFeedingConfiguration : IEntityTypeConfiguration<CoopFeeding>
    {
        public void Configure(EntityTypeBuilder<CoopFeeding> builder)
        {
            builder
                 .ToTable("CoopFeeding")
                 .HasKey(x => x.CoopFeedingId);
            builder
                .Property(x => x.CoopFeedingId)
                .IsRequired()
                .HasColumnName("CoopFeedingId")
                .HasColumnType("int")
                .ValueGeneratedOnAdd();
            builder
                .Property(x => x.DateOfFeeding)
                .IsRequired()
                .HasColumnName("DateOfFeeding")
                .HasColumnType("datetime");
        }
    }
}
