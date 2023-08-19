import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  portfolio: {
    type: Array,
    default: [],
  },
});

export default mongoose.model('User', userSchema);
