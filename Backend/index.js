const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8080;

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://Dhamu:Dhamu123@ecom.suvfsqp.mongodb.net/?retryWrites=true&w=majority&appName=ecom', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Define User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

// Create User model
const User = mongoose.model('User', userSchema);

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle user registration
app.post('/new-user', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Create new user
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
