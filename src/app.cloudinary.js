angular.module('rechi')
.config(function (cloudinaryProvider) {
    cloudinaryProvider.config({
      upload_endpoint: 'https://api.cloudinary.com/v1_1/', // default 
      cloud_name: 'tania', // required 
      upload_preset: 'z6dgwlg5'// optional 
    });
  })