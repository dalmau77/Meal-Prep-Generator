const mongoose = require('mongoose');
const { Schema } = mongoose;

const mealSchema = new Schema({
  title: {type: String, required: true},
  picture: {type: String, required: false}
});

mongoose.model('meals', mealSchema)