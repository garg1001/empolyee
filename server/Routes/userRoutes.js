const router = require('express').Router();
let User = require('../module/User');

// Get All Users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Add a User
router.post('/add', async (req, res) => {
  const { name, address, salary, country, state, city } = req.body;

  const newUser = new User({
    name,
    address,
    salary,
    country,
    state,
    city,
  });

  try {
    await newUser.save();
    res.json('User added!');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

module.exports = router;
