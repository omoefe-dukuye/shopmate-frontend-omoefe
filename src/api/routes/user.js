import { Router } from 'express';
// import { upload } from '../../testingVimeo';
import multer from 'multer';

import {
  registerUser,
  verifyUser,
  loginUser,
  adminUploadVideo
} from '../controllers/user';
import {
  registrationValidation,
  loginValidation
} from '../middleware/validation/user';

const userRouter = Router();
const upload = multer({ dest: 'uploads/' }).single('myFile');
userRouter.post('/', registrationValidation, registerUser);
userRouter.post('/upload', upload, adminUploadVideo);
userRouter.post('/login', loginValidation, loginUser);
userRouter.patch('/:id/verify', verifyUser);

export default userRouter;
