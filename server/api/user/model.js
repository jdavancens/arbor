var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    required: true
  }

})

var UserModel = mongoose.model("User", UserSchema)
module.exports = UserModel
