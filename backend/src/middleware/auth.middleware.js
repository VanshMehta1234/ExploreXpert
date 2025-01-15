const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');

const clerkAuth = ClerkExpressRequireAuth({
  secretKey: process.env.CLERK_SECRET_KEY,
  authorizedParties: ['http://localhost:3000'],
  onError: (err, req, res, next) => {
    console.error('Clerk Auth Error:', err);
    res.status(401).json({ error: 'Authentication failed' });
  }
});

// Add user data to request
const addUserData = async (req, res, next) => {
  if (req.auth) {
    req.userId = req.auth.userId;
    req.userEmail = req.auth.sessionClaims.email;
  }
  next();
};

module.exports = { clerkAuth, addUserData }; 