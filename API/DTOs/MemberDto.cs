namespace API.DTOs;

public class MemberDto
{
    public int Id { get; set; }
    public string Username { get; set; }
    public ICollection<PhotoDto> Photos { get; set; }
}