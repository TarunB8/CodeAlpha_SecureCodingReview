const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

app.use(helmet()); // ✅ Set security headers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ✅ Simulated database with hashed password
const users = [
  {
    username: 'admin',
    password: '$2b$10$JqgW79p7FSxFZgSGZBeqdeD0EpB3xw4T.4BqpUz19sKpxI7DIFOSW' // hashed version of 'admin123'
  }
];

// ✅ Login Route with validation
app.post('/login',
  [
    body('username').isLength({ min: 3 }).trim().escape(),
    body('password').isLength({ min: 5 }).trim()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    if (!user) {
      return res.status(401).send('Invalid credentials');
    }

    // ✅ Compare hashed passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send('Invalid credentials');
    }

    res.send('✅ Login successful with secure code!');
  }
);

app.listen(3000, () => {
  console.log('🔒 Secure server running at http://localhost:3000');
});
