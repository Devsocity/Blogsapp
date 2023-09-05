import { Router } from 'express';
import { createComment, deleteComment, fetchAllComment, fetchSingleComment, updateComment } from '../controller/commentController.js';
import tokenVerify from '../middleware/verifyToken.js';

const router = Router();

router.use(tokenVerify);

router.route('/').get(fetchAllComment).post(createComment);
router.route('/:id').get(fetchSingleComment).delete(deleteComment).put(updateComment).patch(updateComment);

export default router;
