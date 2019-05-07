var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
  "userId":Number,
  "userName":String,
  "userGender":Number,
  "userAge":Number,
  "thingList":[
    {
      "thingId":Number,
      "thingTitle":String,
      "thingContent":String
    }
  ]
})

module.exports = mongoose.model('User',userSchema)
