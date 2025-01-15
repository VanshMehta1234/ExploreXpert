import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Login from './Components/LoginSignupFinal/Login.jsx';
import ForgetPassword from './Components/Forget/Forget.jsx';
import Home from './Components/NewHome4/Home';
import MainContent from './Components/NewHome2/MainContent';
import MyMap from './components1/TravelAdvisor/TravelAdvisor';
import Profile from './Components/Profile/Profile';
import { MyContext } from './Components/ReactContext.js';
import ItonoryCreation from './Components/Itenory/Main.js';
import PDFGenrator from './Components/PDFCreation/PDFCreation.js';
import Protected from './Components/Protected.jsx';
import Contact from './Components/ContactUs/ContactUs.jsx';
import Try from './Components/Try/Try.js';
import { Provider } from 'react-redux';
import store from './Components/store/store.js';
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn, useUser } from '@clerk/clerk-react';
import SignInPage from './Components/auth/SignIn';

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
console.log('Clerk Key:', clerkPubKey);

if (!clerkPubKey) {
  throw new Error("Missing Publishable Key")
}

const LoadingScreen = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    background: 'linear-gradient(to bottom right, #161616, #2c3e50)'
  }}>
    <div className="spinner-border text-light" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

function App() {
  useEffect(() => {
    localStorage.clear();
  }, []);

  const [favplaces, setFavplaces] = useState([]);

  const contextValue = {
    favplaces,
    setFavplaces,
  };

  return (
    <ClerkProvider 
      publishableKey={clerkPubKey}
      loadingScreen={LoadingScreen}
    >
      <Provider store={store}>
        <MyContext.Provider value={contextValue}>
          <Router>
            <Routes>
              <Route 
                path="/" 
                element={
                  <SignedIn>
                    <MainContent />
                  </SignedIn>
                } 
              />
              <Route path="/Home" element={<MainContent />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Header" element={<Header />} />
              <Route path="/reset-password/:token" element={<ForgetPassword />} />
              <Route
                path="/Search"
                element={
                  <>
                    <SignedIn>
                      <Home />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                }
              />
              <Route
                path="/Contact"
                element={
                  <>
                    <SignedIn>
                      <Contact />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                }
              />
              <Route 
                path="/Map" 
                element={
                  <SignedIn>
                    <MyMap />
                  </SignedIn>
                } 
              />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/ItenoryCreator" element={<PDFGenrator />} />
              <Route path="/Itinerary" element={<ItonoryCreation />} />
              <Route path="/ItineraryGenerator" element={<Try />} />
              <Route path="/sign-in/*" element={<SignInPage />} />
            </Routes>
          </Router>
        </MyContext.Provider>
      </Provider>
    </ClerkProvider>
  );
}

export default App;
