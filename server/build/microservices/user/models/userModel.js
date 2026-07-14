import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Please provide your first name']
    },
    email: {
      type: String,
      required: [true, 'Please provide an email address'],
      match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide a valid email address'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Please provide password']
    },
    confirmPassword: {
      type: String,
      required: [true, 'Please provide password again to confirm']
    }
  },
  {
    timestamps: true
  }
);
export default mongoose.model('user', userSchema);
