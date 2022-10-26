using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Infrastructure.Migrations
{
    public partial class TemperatureFieldFromCoopDeleted : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TemperatureCelsius",
                table: "Coop");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "TemperatureCelsius",
                table: "Coop",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }
    }
}
