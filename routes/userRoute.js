import express from 'express';
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from '../controllers/Users.js';

const userRouter = express.Router();
userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);
userRouter.patch('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;
