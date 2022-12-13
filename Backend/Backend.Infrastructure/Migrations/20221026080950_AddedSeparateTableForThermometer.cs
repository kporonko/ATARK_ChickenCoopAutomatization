using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Infrastructure.Migrations
{
    public partial class AddedSeparateTableForThermometer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Thermometer",
                columns: table => new
                {
                    ThermometerId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IP = table.Column<string>(type: "varchar(max)", nullable: false),
                    TemperatureCelsius = table.Column<double>(type: "float", nullable: false),
                    CoopId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Thermometer", x => x.ThermometerId);
                    table.ForeignKey(
                        name: "FK_Thermometer_Coop_CoopId",
                        column: x => x.CoopId,
                        principalTable: "Coop",
                        principalColumn: "CoopId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Thermometer_CoopId",
                table: "Thermometer",
                column: "CoopId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Thermometer");
        }
    }
}
