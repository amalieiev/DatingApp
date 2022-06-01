using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities;

public class Photo
{
    public int Id { get; set; }
    
    public string Url { get; set; }

    public AppUser User { get; set; }
    
    public int UserId { get; set; }
}