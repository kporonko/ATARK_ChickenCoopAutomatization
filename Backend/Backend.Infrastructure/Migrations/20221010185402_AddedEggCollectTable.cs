using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Infrastructure.Migrations
{
    public partial class AddedEggCollectTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EggCollect",
                columns: table => new
                {
                    EggCollectId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DateOfCollecting = table.Column<DateTime>(type: "datetime", nullable: false),
                    EggsCount = table.Column<int>(type: "int", nullable: false),
                    CoopId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EggCollect", x => x.EggCollectId);
                    table.ForeignKey(
                        name: "FK_EggCollect_Coop_CoopId",
                        column: x => x.CoopId,
                        principalTable: "Coop",
                        principalColumn: "CoopId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EggCollect_CoopId",
                table: "EggCollect",
                column: "CoopId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EggCollect");
        }
    }
}
