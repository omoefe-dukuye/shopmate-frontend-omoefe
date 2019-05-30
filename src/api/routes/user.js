import { Router } from 'express';
// import { upload } from '../../testingVimeo';

import { registerUser, verifyUser, loginUser } from '../controllers/user';
import {
  registrationValidation,
  loginValidation
} from '../middleware/validation/user';

const userRouter = Router();
userRouter.post('/', registrationValidation, registerUser);
userRouter.post('/login', loginValidation, loginUser);
userRouter.patch('/:id/verify', verifyUser);

export default userRouter;
