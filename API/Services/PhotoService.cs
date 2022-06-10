using API.Helpers;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.Extensions.Options;

namespace API.Services;

class PhotoService : IPhotoService
{
    private readonly Cloudinary _cloudinary;

    public PhotoService(IOptions<CloudinarySettings> options)
    {
        _cloudinary =
            new Cloudinary(new Account(options.Value.CloudName, options.Value.ApiKey, options.Value.ApiSecret));
    }

    public async Task<ImageUploadResult> Upload(IFormFile file)
    {
        var uploadResult = new ImageUploadResult();

        if (file.Length > 0)
        {
            using var stream = file.OpenReadStream();
            uploadResult = await _cloudinary.UploadAsync(new ImageUploadParams()
                {File = new FileDescription(file.FileName, stream)});
        }

        return uploadResult;
    }

    public Task<DeletionResult> Delete(string publicId)
    {
        throw new NotImplementedException();
    }
}