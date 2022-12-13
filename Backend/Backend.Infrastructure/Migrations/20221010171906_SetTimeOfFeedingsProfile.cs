using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Infrastructure.Migrations
{
    public partial class SetTimeOfFeedingsProfile : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "TimeOfFirstFeeding",
                table: "Profile",
                type: "varchar(5)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "TimeOfSecondFeeding",
                table: "Profile",
                type: "varchar(5)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TimeOfFirstFeeding",
                table: "Profile");

            migrationBuilder.DropColumn(
                name: "TimeOfSecondFeeding",
                table: "Profile");
        }
    }
}
