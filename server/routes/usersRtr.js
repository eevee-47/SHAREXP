import express from 'express';
import usersController from '../controllers/usersCntrl.js';
import globalController from '../controllers/globalCntrl.js';
const router = express.Router();

router.post(
  '/login',
  usersController.checkIfUsernameExists,
  usersController.login,
  (req, res) => {
    console.log('logging from end of login middleware chain in router: ', res.locals);
    res
      .cookie('loggedIn', 'true', {
        maxAge: 1000 * 3, //3 sec
        httpOnly: true,
        secure: true,
      })
      .status(200)
      .json({ userId: res.locals.userId });
  }
);

router.post(
  '/signup',
  usersController.checkIfUsernameExists,
  globalController.getCohortId,
  usersController.signup,
  (req, res) => {
    console.log('logging from end of signup middleware chain in router: ', res.locals);
    res.status(200).json({
      userId: res.locals.userId,
      // avatar: res.locals.avatar,
      // cookie: 'cookie'
    });
  }
);

export default router;
