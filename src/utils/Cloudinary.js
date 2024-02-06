import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';       
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key:process.env.CLOUDINARY_API_NAME,
  api_secret: process.env.CLOUDINARY_API_SECRECT
});

const uploadOnCloudinary=async(localFilePath)=>{
    try {
        if(!localFilePath) return null; 
        const response=cloudinary.uploader.upload(localFilePath,{
            resource_type:auto
        }) 

        console.log("file has been uploaded",response.url)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
    }
   

}

export {uploadOnCloudinary}