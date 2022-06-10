using CloudinaryDotNet.Actions;

namespace API.Services;

public interface IPhotoService
{
    Task<ImageUploadResult> Upload(IFormFile formFile);
    Task<DeletionResult> Delete(string publicId);
}