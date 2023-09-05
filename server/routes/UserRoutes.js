import { Router } from 'express';
import { createUser, deleteUser, fetchAllUser, fetchSingleUser, updateUser } from '../controller/userController.js';
import { multerMiddleware } from '../middleware/multer.js';
import tokenVerify from '../middleware/verifyToken.js';

const router = Router();

router.use(tokenVerify);

router.route('/').get(fetchAllUser).post(createUser);
router.route('/:id').get(fetchSingleUser).delete(deleteUser).put(multerMiddleware, updateUser).patch(multerMiddleware, updateUser);

export default router;
