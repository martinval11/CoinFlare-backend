import express from 'express';
import User from './models/User';

const router = express.Router();

router.get('/users', async (_req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.send('Error getting Users');
    console.error(error);
  }
});

router.get('/user/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (error) {
    res.send('Error getting User');
  }
});

router.post('/createUser', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    res.send('Error creating User');
    console.error(error);
  }
});

router.patch('/updateUser/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(user);
  } catch (error) {
    res.send('Error updating User');
    console.error(error);
  }
});

router.delete('/deleteUser/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.send(user);
  } catch (error) {
    res.send('Error deleting User');
    console.error(error);
  }
});

export default router;
