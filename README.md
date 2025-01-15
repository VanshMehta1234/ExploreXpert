# ExploreXpert

A full-stack travel planning application built with React and Node.js that helps users discover and plan their travel itineraries with interactive maps and personalized recommendations.

## Project Structure

── frontend/ # React application
── backend/ # Node.js/Express API


## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB
- Google Maps API key

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/YOUR_USERNAME/ExploreXpert.git
   cd ExploreXpert
   ```

2. Install Frontend Dependencies
   ```bash
   cd frontend
   npm install
   ```

3. Install Backend Dependencies
   ```bash
   cd ../backend
   npm install
   ```

4. Set up environment variables:
   - Copy `.env.example` to `.env` in both frontend and backend directories
   - Update the variables with your values

5. Start the application:

   **Backend:**
   ```bash
   cd backend
   npm start
   ```

   **Frontend:**
   ```bash
   cd frontend
   npm start
   ```

## Features

### 1. Interactive Map Integration
- Real-time location search
- Place details with ratings and reviews
- Custom map styles and markers

### 2. Travel Itinerary Planning
- Create and customize travel itineraries
- Add multiple destinations
- Set dates and times for activities
- Save and export itineraries as PDF

### 3. User Authentication
- Secure login and registration
- Google OAuth integration
- Password reset functionality

### 4. Profile Management
- View and edit user profile
- Track favorite places
- View travel history

## Technologies Used

### Frontend
- React.js
- Material-UI (MUI)
- Google Maps API
- Axios for API calls
- React Router for navigation

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Nodemailer for email services

### APIs
- Google Maps JavaScript API
- Travel Advisor API
- Weather API

## Environment Variables

### Frontend (.env)

### Backend (.env)
