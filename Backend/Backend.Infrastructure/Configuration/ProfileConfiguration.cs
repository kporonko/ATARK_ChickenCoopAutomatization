using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Backend.Infrastructure.Configuration
{
    public class ProfileConfiguration : IEntityTypeConfiguration<Profile>
    {
        public void Configure(EntityTypeBuilder<Profile> builder)
        {
            builder
                 .ToTable("Profile")
                 .HasKey(x => x.ProfileId);
            builder
                .Property(x => x.ProfileId)
                .IsRequired()
                .HasColumnName("ProfileId")
                .HasColumnType("int")
                .ValueGeneratedOnAdd();
            builder
                .Property(x => x.Login)
                .IsRequired()
                .HasColumnName("Login")
                .HasColumnType("varchar")
                .HasMaxLength(100);
            builder
                .Property(x => x.FirstName)
                .IsRequired()
                .HasColumnName("FirstName")
                .HasColumnType("varchar")
                .HasMaxLength(100);
            builder
                .Property(x => x.LastName)
                .IsRequired()
                .HasColumnName("LastName")
                .HasColumnType("varchar")
                .HasMaxLength(100);
            builder
                .Property(x => x.PasswordHash)
                .IsRequired()
                .HasColumnName("PasswordHash")
                .HasColumnType("varchar(max)");
        }
    }
}
