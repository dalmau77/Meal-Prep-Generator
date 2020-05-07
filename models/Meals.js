const mongoose = require('mongoose');
const { Schema } = mongoose;

const mealSchema = new Schema({
  title: {type: String, required: true},
  picture: {type: String, required: false},
  MealID: {type: String,  required: false},
  user: {type: Schema.Types.ObjectId, ref:'User'}
});

mongoose.model('meals', mealSchema)