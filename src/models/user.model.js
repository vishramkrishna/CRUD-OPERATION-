import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type:String,
    required: 'category is required',
    default:""
  },
  password: {
    type: String,
    default:""
  },
  email: {
    type: String,
    required: 'name is required'

  },
  firstname: {
    type: String,
    required: 'description is required'

  },
  lastname: {
    type: String,
    default: undefined
  },
  isactive:{
    type:Boolean,
    default:false
  },

})

export default mongoose.model('user', userSchema)
