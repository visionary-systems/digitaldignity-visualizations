import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import DataVisualizationStage1 from './components/DataVisualizationStage1';
import DataVisualizationStage2 from './components/DataVisualizationStage2';
import EmbedDataChart from './components/EmbedDataChart';
import './App.css';

// Home page component
const HomePage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#0a0a14',
      padding: '6rem 2rem 2rem 2rem',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '48rem' }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '1.5rem',
          fontFamily: "'Patua One', serif"
        }}>
          Digital Dignity Visualizations
        </h1>
        
        <p style={{
          fontSize: '1.25rem',
          color: '#9ca3af',
          marginBottom: '3rem',
          lineHeight: '1.8'
        }}>
          Interactive data visualizations demonstrating the scale and flow of personal data. 
          Your data is your intellectual property.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(2, 1fr)',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <a href="/stage1" style={{
            display: 'block',
            background: 'rgba(241, 90, 41, 0.1)',
            border: '2px solid #f15a29',
            borderRadius: '0.5rem',
            padding: '2rem',
            textDecoration: 'none',
            transition: 'all 0.3s',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(241, 90, 41, 0.2)';
            e.currentTarget.style.transform = 'translateY(-4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(241, 90, 41, 0.1)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <div style={{
              fontSize: '2rem',
              marginBottom: '1rem'
            }}>📊</div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: '#f15a29',
              marginBottom: '0.5rem'
            }}>
              Annual Data Footprint
            </h3>
            <p style={{
              fontSize: '0.875rem',
              color: '#9ca3af'
            }}>
              Visualize 543,120 data points generated annually across health, location, social, and more.
            </p>
          </a>
          
          <a href="/stage2" style={{
            display: 'block',
            background: 'rgba(74, 144, 226, 0.1)',
            border: '2px solid #4A90E2',
            borderRadius: '0.5rem',
            padding: '2rem',
            textDecoration: 'none',
            transition: 'all 0.3s',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(74, 144, 226, 0.2)';
            e.currentTarget.style.transform = 'translateY(-4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(74, 144, 226, 0.1)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <div style={{
              fontSize: '2rem',
              marginBottom: '1rem'
            }}>🌐</div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: '#4A90E2',
              marginBottom: '0.5rem'
            }}>
              Data Flow Network
            </h3>
            <p style={{
              fontSize: '0.875rem',
              color: '#9ca3af'
            }}>
              Follow your data's journey from device through apps, networks, to platform aggregation.
            </p>
          </a>
        </div>
        
        <div style={{
          background: 'rgba(17,24,39,0.5)',
          border: '1px solid #1f2937',
          borderRadius: '0.5rem',
          padding: '1.5rem',
          textAlign: 'left'
        }}>
          <h4 style={{
            fontSize: '1rem',
            fontWeight: '600',
            color: '#f15a29',
            marginBottom: '1rem'
          }}>
            About This Project
          </h4>
          <p style={{
            fontSize: '0.875rem',
            color: '#9ca3af',
            lineHeight: '1.6',
            marginBottom: '1rem'
          }}>
            These visualizations are part of the Digital Dignity movement, advocating for personal 
            data as user-owned intellectual property. Each visualization demonstrates different 
            aspects of data generation, collection, and control.
          </p>
          <p style={{
            fontSize: '0.875rem',
            color: '#9ca3af',
            lineHeight: '1.6'
          }}>
            Built with React, D3.js, and Recharts. Designed for embedding in educational content 
            and presentations about data sovereignty.
          </p>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stage1" element={<DataVisualizationStage1 />} />
          <Route path="/stage2" element={<DataVisualizationStage2 />} />
          <Route path="/embed/chart" element={<EmbedDataChart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
