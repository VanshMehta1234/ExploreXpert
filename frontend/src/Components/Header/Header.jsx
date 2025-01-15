import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useClerk, UserButton } from '@clerk/clerk-react';
import Logo from '../Assets/output-onlinepngtools.png';
import './Header.css';

function Header() {
  const { user, signOut } = useClerk();
  const [showNav, setShowNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggleNav = () => {
    setShowNav(!showNav);
  };

  const handleSignIn = () => {
    navigate('/sign-in');
  };

  return (
    <div className="d-flex h3 flex-wrap align-items-center justify-content-between">
      <div className="d-flex align-items-center mx-3">
        <Link to="/" className="d-flex align-items-center mb-lg-0 text-white text-decoration-none">
          <img src={Logo} alt="Logo" />
        </Link>
        <p className="mx-2 header-font">ExploreXpert</p>
      </div>

      <div className='header-font'>
        <button className="toggle-button" onClick={handleToggleNav}>
          <FaBars />
        </button>
        <ul className={`nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center justify-content-around mb-md-0 ${showNav ? 'show' : ''}`}>
          <li><Link to="/Home" className="nav-link px-2 text-white">Home</Link></li>
          <li><Link to="/Itinerary" className="nav-link px-2 text-white">Itinerary</Link></li>
          <li><Link to="/Contact" className="nav-link px-2 text-white">Contact Us</Link></li>
          <li><Link to="#" className="nav-link px-2 text-white">About Us</Link></li>
          <li><Link to="#" className="nav-link px-2 text-white">Help</Link></li>
        </ul>
      </div>

      {windowWidth >= 768 && (
        <div className='header-font d-flex align-items-center justify-content-center'>
          {user ? (
            <UserButton 
              afterSignOutUrl="/Home"
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: '40px',
                    height: '40px'
                  }
                }
              }}
            />
          ) : (
            <button 
              onClick={handleSignIn}
              className="button1" 
              style={{ 
                textDecoration: 'none',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer'
              }}
            >
              Sign In
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
