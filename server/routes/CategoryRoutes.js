import { Router } from 'express';
import { createCategory, deleteCategory, getAllCategory, getSingleCategory } from '../controller/categoryController.js';
import tokenVerify from '../middleware/verifyToken.js';

const router = Router();

router.use(tokenVerify);

router.route('/').get(getAllCategory).post(createCategory);
router.route('/:id').get(getSingleCategory).delete(deleteCategory);

export default router;
