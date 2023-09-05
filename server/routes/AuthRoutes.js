import { Router } from 'express';
import { me, registerVerifyToken, userLogin, userLogout, userRegister } from '../controller/authController.js';
import tokenVerify from '../middleware/verifyToken.js';

const router = Router();

// <!-- Authentication  -->
router.route('/login').post(userLogin);
router.route('/register').post(userRegister);
router.route('/logout').post(userLogout);
router.route('/me').get(tokenVerify, me);

// <!-- User verification  -->
router.route('/verify/:token').get(registerVerifyToken);

// // <!-- Forget Password -->
// router.route('/forget').post(forgetPassword);
// router.route('/forget/:token').post(resetPassword);

export default router;
