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

    public Task<ImageUploadResult> Upload(IFormFile formFile)
    {
        throw new NotImplementedException();
    }

    public Task<DeletionResult> Delete(string publicId)
    {
        throw new NotImplementedException();
    }
}