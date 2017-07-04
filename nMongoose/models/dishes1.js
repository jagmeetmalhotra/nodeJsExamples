var mongoose=require('mongoose');
var Schema = mongoose.Schema;

//Create a Schema
var dishSchema = new Schema({
  name:{
    type: String,
    required: true,
    unique: true
  },
  description:{
    type: String,
    required: true
  }
}, {
    timestamps:true
});
// the schmea
var Dishes = mongoose.model('Dish', dishSchema);

//make this available to our Node applications
module.exports = Dishes;
