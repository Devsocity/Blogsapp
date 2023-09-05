import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: 'dbz8v1qpo',
  api_key: '963187876313348',
  api_secret: 'VSPem7ta5VktvRCaVZpap67SR7Q'
});

export const cloudUpload = async (path) => {
  const data = await cloudinary.v2.uploader.upload(path);

  return data;
};
