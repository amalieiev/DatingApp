using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities;

[Table("Photos")]
public class Photo
{
    public string Id { get; set; }
    
    public string Url { get; set; }

    public AppUser User { get; set; }
    
    public int UserId { get; set; }
}