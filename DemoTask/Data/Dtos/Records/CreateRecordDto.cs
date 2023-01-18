using System.ComponentModel.DataAnnotations;

namespace DemoTask.Data.Dtos.Records
{
    public record CreateRecordDto([Required] string Name, [Required] string Description);
}
