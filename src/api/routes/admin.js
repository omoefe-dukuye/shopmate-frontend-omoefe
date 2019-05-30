import { Router } from 'express';
// import { upload } from '../../testingVimeo';
import multer from 'multer';

import { adminUploadMedia } from '../controllers/admin';

const adminRouter = Router();
const upload = multer({ dest: 'uploads/' }).single('myFile');
adminRouter.post('/upload', upload, adminUploadMedia);

export default adminRouter;
