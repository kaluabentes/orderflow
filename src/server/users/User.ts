import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: false
  },
  street: {
    type: String,
    required: false
  },
  number: {
    type: String,
    required: false
  },
  complement: {
    type: String,
    required: false
  }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
