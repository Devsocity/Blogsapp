import { Router } from 'express';

import { createPost, deletePost, fetchAllPost, fetchSinglePost, updatePost } from '../controller/postController.js';
import { multerMiddleware } from '../middleware/multer.js';
import tokenVerify from '../middleware/verifyToken.js';

const router = Router();

router.use(tokenVerify);

router.route('/').get(fetchAllPost).post(multerMiddleware, createPost);
router.route('/:id').get(fetchSinglePost).delete(deletePost).put(multerMiddleware, updatePost).patch(multerMiddleware, updatePost);

export default router;
