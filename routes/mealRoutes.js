const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Meals = mongoose.model('meals');

module.exports = app => {
  app.post('/api/savedMeals', (req, res) => {
    const { title, MealID } = req.body;
    const meal = new Meals({
      title,
      MealID,
      user: req.user.id
    });
    meal.save();
  });
  app.get('/api/savedMeals', requireLogin, async (req, res) => {
    const meals = await Meals.find({ user: req.user.id })

    res.send(meals)
  });
}