import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: true
  }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
