import express from 'express'
import multer from 'multer'
import { uploadImg } from '../controllers/image.controller.js'

const router = express.Router();
const upload = multer({ dest: "uploads/" }); //temporary folder

router.post('/upload-image', upload.single("file"), uploadImg);

export default router;