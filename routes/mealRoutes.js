const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Meals = mongoose.model('meals');

module.exports = app => {

  let mealArr = [];

  app.post('/api/savedMeals', (req, res) => {
    const { title } = req.body;
    const meal = new Meals({
      title,
      user: req.user.id
    });
    mealArr.push(meal)
    meal.save();
  });
  app.get('/api/savedMeals', requireLogin, async (req, res) => {
    const meals = await Meals.find({ user: req.user.id })

    res.send(meals)
  });
}