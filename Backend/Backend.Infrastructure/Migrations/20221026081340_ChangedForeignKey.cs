using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Infrastructure.Migrations
{
    public partial class ChangedForeignKey : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Thermometer_Coop_CoopId",
                table: "Thermometer");

            migrationBuilder.DropIndex(
                name: "IX_Thermometer_CoopId",
                table: "Thermometer");

            migrationBuilder.DropColumn(
                name: "CoopId",
                table: "Thermometer");

            migrationBuilder.AddColumn<int>(
                name: "ThermometerId",
                table: "Coop",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Coop_ThermometerId",
                table: "Coop",
                column: "ThermometerId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Coop_Thermometer_ThermometerId",
                table: "Coop",
                column: "ThermometerId",
                principalTable: "Thermometer",
                principalColumn: "ThermometerId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Coop_Thermometer_ThermometerId",
                table: "Coop");

            migrationBuilder.DropIndex(
                name: "IX_Coop_ThermometerId",
                table: "Coop");

            migrationBuilder.DropColumn(
                name: "ThermometerId",
                table: "Coop");

            migrationBuilder.AddColumn<int>(
                name: "CoopId",
                table: "Thermometer",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Thermometer_CoopId",
                table: "Thermometer",
                column: "CoopId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Thermometer_Coop_CoopId",
                table: "Thermometer",
                column: "CoopId",
                principalTable: "Coop",
                principalColumn: "CoopId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
