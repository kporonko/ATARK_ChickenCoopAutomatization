﻿// <auto-generated />
using System;
using Backend.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Backend.Infrastructure.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    [Migration("20221026143901_NotNullableThermometerInCoop")]
    partial class NotNullableThermometerInCoop
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("Backend.Infrastructure.Models.Coop", b =>
                {
                    b.Property<int>("CoopId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("CoopId");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CoopId"), 1L, 1);

                    b.Property<string>("CoopName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("CoopName");

                    b.Property<int>("ProfileId")
                        .HasColumnType("int");

                    b.Property<int>("ThermometerId")
                        .HasColumnType("int");

                    b.HasKey("CoopId");

                    b.HasIndex("ProfileId");

                    b.HasIndex("ThermometerId")
                        .IsUnique();

                    b.ToTable("Coop", (string)null);
                });

            modelBuilder.Entity("Backend.Infrastructure.Models.CoopFeeding", b =>
                {
                    b.Property<int>("CoopFeedingId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("CoopFeedingId");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CoopFeedingId"), 1L, 1);

                    b.Property<int>("CoopId")
                        .HasColumnType("int");

                    b.Property<DateTime>("DateOfFeeding")
                        .HasColumnType("datetime")
                        .HasColumnName("DateOfFeeding");

                    b.HasKey("CoopFeedingId");

                    b.HasIndex("CoopId");

                    b.ToTable("CoopFeeding", (string)null);
                });

            modelBuilder.Entity("Backend.Infrastructure.Models.EggCollect", b =>
                {
                    b.Property<int>("EggCollectId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("EggCollectId");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("EggCollectId"), 1L, 1);

                    b.Property<int>("CoopId")
                        .HasColumnType("int");

                    b.Property<DateTime>("DateOfCollecting")
                        .HasColumnType("datetime")
                        .HasColumnName("DateOfCollecting");

                    b.Property<int>("EggsCount")
                        .HasColumnType("int")
                        .HasColumnName("EggsCount");

                    b.HasKey("EggCollectId");

                    b.HasIndex("CoopId");

                    b.ToTable("EggCollect", (string)null);
                });

            modelBuilder.Entity("Backend.Infrastructure.Models.Profile", b =>
                {
                    b.Property<int>("ProfileId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ProfileId");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ProfileId"), 1L, 1);

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("FirstName");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("LastName");

                    b.Property<string>("Login")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("varchar(100)")
                        .HasColumnName("Login");

                    b.Property<string>("PasswordHash")
                        .IsRequired()
                        .HasColumnType("varchar(max)")
                        .HasColumnName("PasswordHash");

                    b.Property<string>("TimeOfFirstFeeding")
                        .IsRequired()
                        .HasColumnType("varchar(5)")
                        .HasColumnName("TimeOfFirstFeeding");

                    b.Property<string>("TimeOfSecondFeeding")
                        .IsRequired()
                        .HasColumnType("varchar(5)")
                        .HasColumnName("TimeOfSecondFeeding");

                    b.HasKey("ProfileId");

                    b.ToTable("Profile", (string)null);
                });

            modelBuilder.Entity("Backend.Infrastructure.Models.Thermometer", b =>
                {
                    b.Property<int>("ThermometerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ThermometerId");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ThermometerId"), 1L, 1);

                    b.Property<string>("IP")
                        .IsRequired()
                        .HasColumnType("varchar(max)")
                        .HasColumnName("IP");

                    b.Property<double>("TemperatureCelsius")
                        .HasColumnType("float")
                        .HasColumnName("TemperatureCelsius");

                    b.HasKey("ThermometerId");

                    b.ToTable("Thermometer", (string)null);
                });

            modelBuilder.Entity("Backend.Infrastructure.Models.Coop", b =>
                {
                    b.HasOne("Backend.Infrastructure.Models.Profile", "Profile")
                        .WithMany("Coops")
                        .HasForeignKey("ProfileId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Backend.Infrastructure.Models.Thermometer", "Thermometer")
                        .WithOne("Coop")
                        .HasForeignKey("Backend.Infrastructure.Models.Coop", "ThermometerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Profile");

                    b.Navigation("Thermometer");
                });

            modelBuilder.Entity("Backend.Infrastructure.Models.CoopFeeding", b =>
                {
                    b.HasOne("Backend.Infrastructure.Models.Coop", "Coop")
                        .WithMany("CoopFeedings")
                        .HasForeignKey("CoopId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Coop");
                });

            modelBuilder.Entity("Backend.Infrastructure.Models.EggCollect", b =>
                {
                    b.HasOne("Backend.Infrastructure.Models.Coop", "Coop")
                        .WithMany("EggCollects")
                        .HasForeignKey("CoopId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Coop");
                });

            modelBuilder.Entity("Backend.Infrastructure.Models.Coop", b =>
                {
                    b.Navigation("CoopFeedings");

                    b.Navigation("EggCollects");
                });

            modelBuilder.Entity("Backend.Infrastructure.Models.Profile", b =>
                {
                    b.Navigation("Coops");
                });

            modelBuilder.Entity("Backend.Infrastructure.Models.Thermometer", b =>
                {
                    b.Navigation("Coop")
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}