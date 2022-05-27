import cost from '../models/costModel.js';
import users from '../models/usersModel.js';

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const Users = await users.findAll();
    res.json(Users);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Get user by id
export const getUserById = async (req, res) => {
  try {
    const Users = await users.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(Users[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Create new user
export const createUser = async (req, res) => {
  try {
    await users.create(req.body);
    res.json({
      message: 'New user created',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Update user
export const updateUser = async (req, res) => {
  try {
    await users.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: 'New cost updated' });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  try {
    await users.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'User deleted',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
