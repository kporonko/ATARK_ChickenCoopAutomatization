using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Infrastructure.Migrations
{
    public partial class NotNullableThermometerInCoop : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Coop_Thermometer_ThermometerId",
                table: "Coop");

            migrationBuilder.DropIndex(
                name: "IX_Coop_ThermometerId",
                table: "Coop");

            migrationBuilder.AlterColumn<int>(
                name: "ThermometerId",
                table: "Coop",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

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

            migrationBuilder.AlterColumn<int>(
                name: "ThermometerId",
                table: "Coop",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.CreateIndex(
                name: "IX_Coop_ThermometerId",
                table: "Coop",
                column: "ThermometerId",
                unique: true,
                filter: "[ThermometerId] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_Coop_Thermometer_ThermometerId",
                table: "Coop",
                column: "ThermometerId",
                principalTable: "Thermometer",
                principalColumn: "ThermometerId");
        }
    }
}
