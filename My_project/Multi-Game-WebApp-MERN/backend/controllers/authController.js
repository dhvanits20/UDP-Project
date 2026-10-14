const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Email validation regex helper
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(String(email).trim());
};

// Register User (Player or Developer)
const registerUser = async (req, res) => {
  const { name, email, password, role, studio_name, portfolio_url, specialization, bio } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({ message: 'Name is required' });
  }

  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ message: 'Please provide a valid email address' });
  }

  if (!password || password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long' });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const userExists = await User.findOne({ email: normalizedEmail });
  if (userExists) {
    return res.status(400).json({ message: 'An account with this email already exists' });
  }

  const requestedRole = (role === 'developer') ? 'developer' : 'player';

  const user = await User.create({
    name: name.trim(),
    email: normalizedEmail,
    password,
    role: requestedRole,
    studio_name: studio_name?.trim() || undefined,
    portfolio_url: portfolio_url?.trim() || undefined,
    specialization: specialization?.trim() || undefined,
    bio: bio?.trim() || undefined
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      studio_name: user.studio_name,
      portfolio_url: user.portfolio_url,
      specialization: user.specialization,
      token: generateToken(user._id)
    });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
};

// Login User
const authUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address' });
  }

  if (!password) {
    return res.status(400).json({ message: 'Password is required' });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const user = await User.findOne({ email: normalizedEmail });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id)
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};

// OTP verification logic placeholder (from original)
const verifyOtp = async (req, res) => {
  // Add OTP logic here if required by frontend
  res.json({ message: 'OTP verified' });
};

module.exports = { registerUser, authUser, verifyOtp };
