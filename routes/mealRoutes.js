const mongoose = require('mongoose');

const Meals = mongoose.model('meals');

module.exports = app => {
  app.post('/api/savedMeals', (req, res) => {
    const { title } = req.body;

    const meal = new Meals({
      title
    });
    meal.save()
  });
}