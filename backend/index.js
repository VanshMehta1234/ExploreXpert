// server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const loginRouter = require('./src/routes/login.route');
const handleUserApi = require('./src/routes/user.api.route');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.error('Error connecting to MongoDB:', error));

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (err.name === 'ClerkError') {
    return res.status(401).json({ error: 'Authentication failed' });
  }
  res.status(500).json({ error: 'Something went wrong!' });
});

// Routes
app.use("/user", loginRouter);
app.use("/user/api", handleUserApi);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
