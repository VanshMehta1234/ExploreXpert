import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useClerk, UserButton } from '@clerk/clerk-react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  IconButton, 
  Typography, 
  Menu, 
  Container, 
  Button, 
  MenuItem,
  Avatar,
  useTheme,
  alpha,
  Slide,
  Badge,
  Tooltip
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExploreIcon from '@mui/icons-material/Explore';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import MapIcon from '@mui/icons-material/Map';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useClerk();
  const navigate = useNavigate();
  const theme = useTheme();
  const location = useLocation();

  const pages = [
    { name: 'Home', path: '/Home', icon: <ExploreIcon sx={{ mr: 1 }} /> },
    { name: 'Itinerary', path: '/Itinerary', icon: <FlightTakeoffIcon sx={{ mr: 1 }} /> },
    { name: 'Map', path: '/Map', icon: <MapIcon sx={{ mr: 1 }} /> },
    { name: 'Contact', path: '/Contact', icon: <ContactSupportIcon sx={{ mr: 1 }} /> },
    { name: 'About', path: '#', icon: <InfoIcon sx={{ mr: 1 }} /> },
    { name: 'Help', path: '#', icon: <HelpIcon sx={{ mr: 1 }} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (path) => {
    handleCloseNavMenu();
    navigate(path);
  };

  return (
    <Slide appear={false} direction="down" in={!isScrolled}>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: isScrolled 
            ? 'rgba(18, 18, 18, 0.95)' 
            : 'rgba(18, 18, 18, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo - Desktop */}
            <Box 
              sx={{ 
                display: { xs: 'none', md: 'flex' }, 
                alignItems: 'center', 
                mr: 4,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                }
              }}
            >
              <Typography
                variant="h6"
                noWrap
                sx={{
                  ml: 2,
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #4DD0E1 30%, #00BCD4 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                ExploreXpert
              </Typography>
            </Box>

            {/* Mobile Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: 'white' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  '& .MuiPaper-root': {
                    backgroundColor: 'rgba(18, 18, 18, 0.95)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                {pages.map((page) => (
                  <MenuItem 
                    key={page.name} 
                    onClick={() => handleNavigate(page.path)}
                    sx={{
                      color: 'white',
                      '&:hover': {
                        background: alpha(theme.palette.secondary.main, 0.1),
                      }
                    }}
                  >
                    {page.icon}
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Logo - Mobile */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', flexGrow: 1 }}>
              <img 
                src="/assets/images/logo.png" 
                alt="Logo" 
                style={{ height: '35px', marginRight: '8px' }}
              />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #4DD0E1 30%, #00BCD4 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                ExploreXpert
              </Typography>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => handleNavigate(page.path)}
                  sx={{
                    mx: 1,
                    color: location.pathname === page.path ? theme.palette.secondary.main : 'white',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    '&:hover': {
                      background: alpha(theme.palette.secondary.main, 0.1),
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      width: location.pathname === page.path ? '100%' : '0%',
                      height: '2px',
                      background: theme.palette.secondary.main,
                      transition: 'all 0.3s ease',
                      transform: 'translateX(-50%)',
                    },
                    '&:hover::after': {
                      width: '100%',
                    }
                  }}
                >
                  {page.icon}
                  {page.name}
                </Button>
              ))}
            </Box>

            {/* User Menu */}
            <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', gap: 2 }}>
              <Tooltip title="Notifications">
                <IconButton sx={{ color: 'white' }}>
                  <Badge badgeContent={3} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Tooltip>

          {user ? (
            <UserButton 
              afterSignOutUrl="/Home"
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                        width: '35px',
                        height: '35px',
                      },
                      userButtonTrigger: {
                        border: '2px solid rgba(255, 255, 255, 0.1)',
                        '&:hover': {
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                        }
                  }
                }
              }}
            />
          ) : (
                <Button
                  onClick={() => navigate('/sign-in')}
                  sx={{
                    color: 'white',
                    background: 'linear-gradient(45deg, #4DD0E1 30%, #00BCD4 90%)',
                    px: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 20px rgba(77, 208, 225, 0.4)',
                    }
              }}
            >
              Sign In
            </Button>
          )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
};

export default Header;
