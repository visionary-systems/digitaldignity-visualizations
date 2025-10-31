import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    background: 'rgba(10, 10, 20, 0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid #1f2937',
    padding: '1rem 2rem',
    zIndex: 1000
  };
  
  const containerStyle = {
    maxWidth: '80rem',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem'
  };
  
  const logoStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#f15a29',
    textDecoration: 'none',
    fontFamily: "'Patua One', serif"
  };
  
  const navLinksStyle = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  };
  
  const linkStyle = (isActive) => ({
    color: isActive ? '#f15a29' : '#9ca3af',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    transition: 'all 0.2s',
    fontSize: '0.875rem',
    fontWeight: '500',
    border: isActive ? '1px solid #f15a29' : '1px solid transparent'
  });
  
  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <Link to="/" style={logoStyle}>
          Digital Dignity
        </Link>
        
        <div style={navLinksStyle}>
          <Link 
            to="/" 
            style={linkStyle(location.pathname === '/')}
            onMouseEnter={(e) => e.target.style.color = '#f15a29'}
            onMouseLeave={(e) => e.target.style.color = location.pathname === '/' ? '#f15a29' : '#9ca3af'}
          >
            Home
          </Link>
          <Link 
            to="/stage1" 
            style={linkStyle(location.pathname === '/stage1')}
            onMouseEnter={(e) => e.target.style.color = '#f15a29'}
            onMouseLeave={(e) => e.target.style.color = location.pathname === '/stage1' ? '#f15a29' : '#9ca3af'}
          >
            Annual Data Footprint
          </Link>
          <Link 
            to="/stage2" 
            style={linkStyle(location.pathname === '/stage2')}
            onMouseEnter={(e) => e.target.style.color = '#f15a29'}
            onMouseLeave={(e) => e.target.style.color = location.pathname === '/stage2' ? '#f15a29' : '#9ca3af'}
          >
            Data Flow Network
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
