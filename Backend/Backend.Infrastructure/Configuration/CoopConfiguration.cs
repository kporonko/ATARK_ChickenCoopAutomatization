using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Backend.Infrastructure.Configuration
{
    public class CoopConfiguration : IEntityTypeConfiguration<Coop>
    {
        public void Configure(EntityTypeBuilder<Coop> builder)
        {
            builder
                 .ToTable("Coop")
                 .HasKey(x => x.CoopId);
            builder
                .Property(x => x.CoopId)
                .IsRequired()
                .HasColumnName("CoopId")
                .HasColumnType("int")
                .ValueGeneratedOnAdd();
            builder
                .Property(x => x.CoopName)
                .IsRequired()
                .HasColumnName("CoopName")
                .HasColumnType("varchar")
                .HasMaxLength(50);
        }
    }
}
