using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Infrastructure.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Profile",
                columns: table => new
                {
                    ProfileId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Login = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: false),
                    FirstName = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: false),
                    LastName = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: false),
                    PasswordHash = table.Column<string>(type: "varchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Profile", x => x.ProfileId);
                });

            migrationBuilder.CreateTable(
                name: "Coop",
                columns: table => new
                {
                    CoopId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CoopName = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false),
                    TemperatureCelsius = table.Column<double>(type: "float", nullable: false),
                    ProfileId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Coop", x => x.CoopId);
                    table.ForeignKey(
                        name: "FK_Coop_Profile_ProfileId",
                        column: x => x.ProfileId,
                        principalTable: "Profile",
                        principalColumn: "ProfileId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CoopFeeding",
                columns: table => new
                {
                    CoopFeedingId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DateOfFeeding = table.Column<DateTime>(type: "datetime", nullable: false),
                    CoopId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoopFeeding", x => x.CoopFeedingId);
                    table.ForeignKey(
                        name: "FK_CoopFeeding_Coop_CoopId",
                        column: x => x.CoopId,
                        principalTable: "Coop",
                        principalColumn: "CoopId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Coop_ProfileId",
                table: "Coop",
                column: "ProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_CoopFeeding_CoopId",
                table: "CoopFeeding",
                column: "CoopId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CoopFeeding");

            migrationBuilder.DropTable(
                name: "Coop");

            migrationBuilder.DropTable(
                name: "Profile");
        }
    }
}
