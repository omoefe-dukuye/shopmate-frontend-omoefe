import cloudinary from 'cloudinary/lib/v2';

export const sermonAudioUpload = (req) => {
  cloudinary.config({
    cloud_name: 'dimdpxlpb',
    api_key: '362574221645782',
    api_secret: 'TUJF9_L3KAUwbGz_foyU2zBqTxw'
  });

  cloudinary.uploader.upload(
    req.file.path,
    {
      resource_type: 'auto'
    },
    function (error, result) {
      if (error) {
        return;
      }
      console.log(result, '>>>>>>>>>.');
      return result;
    }
  );
};
