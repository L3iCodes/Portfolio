import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'
import dotenv from 'dotenv'

dotenv.config()

cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.CLOUD_API_KEY,
        api_secret: process.env.CLOUD_API_SECRET
    })

export const uploadImg = async (req, res) => {
    console.log('Uploading Image')

    try{
        console.log("File received:", req.file);

        if(!req.file){
            return res.status(400).json({message: 'No file uploaded'});
        }

        const upload = await cloudinary.uploader.upload(
            req.file.path,
            {
                folder: 'Portfolio-Projects',
                public_id: req.file.originalname,
            }
        )

        console.log(`Upload succesfully`)
        console.log(upload)

        fs.unlinkSync(req.file.path) // Delete temp file

        return res.status(201).json({
            message: 'Image uploaded successfully', 
            imgInfo: {
                public_id: upload.public_id,
                name: upload.display_name,
                url: upload.url,
            }
        });

    }catch(error){
        console.log(`Failed to upload image. Error`);
        console.log(error)
        return res.status(401).json({message: 'Failed to upload image'});
    }
}