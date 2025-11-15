import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, Info } from 'lucide-react';
import { Bar, BarChart, Line, LineChart, Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const DataOwnershipIntro = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Override body background when component mounts
  useEffect(() => {
    document.body.style.background = 'transparent';
    document.body.style.overflow = 'hidden';
    const appDiv = document.querySelector('.App');
    if (appDiv) {
      appDiv.style.background = 'transparent';
      appDiv.style.minHeight = '100vh';
    }
    
    return () => {
      document.body.style.background = '';
      document.body.style.overflow = '';
    };
  }, []);

  // Tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          border: '2px solid #ff8c00',
          borderRadius: '8px',
          padding: '10px 14px',
        }}>
          <p style={{ color: '#fff', fontWeight: 'bold', marginBottom: '6px', fontSize: '14px' }}>{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: '#fff', fontSize: '13px', margin: '2px 0' }}>
              {entry.name}: <span style={{ color: '#ff8c00', fontWeight: 'bold' }}>{entry.value}</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Data
  const marketGrowthData = [
    { year: '2023', value: 327 },
    { year: '2024', value: 450 },
    { year: '2025', value: 565 },
    { year: '2026', value: 710 },
    { year: '2027', value: 890 },
    { year: '2028', value: 1100 },
    { year: '2029', value: 1300 },
    { year: '2030', value: 1500 }
  ];

  const userValueData = [
    { platform: 'Google', value: 460 },
    { platform: 'Meta', value: 274 },
    { platform: 'Amazon', value: 177 },
    { platform: 'TikTok', value: 14 },
    { platform: 'You', value: 0 }
  ];

  const dailyProfitsData = [
    { company: 'Google', daily: 721 },
    { company: 'Meta', daily: 438 },
    { company: 'Amazon', daily: 154 },
    { company: 'TikTok', daily: 50 }
  ];

  const ownershipGapData = [
    { category: 'Value Created', user: 100, company: 0 },
    { category: 'Compensation', user: 0, company: 100 }
  ];

  const aiDataConvergence = [
    { year: '2023', ai: 197, data: 374 },
    { year: '2024', ai: 276, data: 450 },
    { year: '2025', ai: 390, data: 565 },
    { year: '2026', ai: 585, data: 710 },
    { year: '2027', ai: 877, data: 890 },
    { year: '2028', ai: 1315, data: 1100 },
    { year: '2029', ai: 1973, data: 1300 },
    { year: '2030', ai: 2400, data: 1500 }
  ];

  const industryData = [
    { industry: 'AdTech', current: 663, projected2030: 2200 },
    { industry: 'Healthcare', current: 45, projected2030: 133 },
    { industry: 'Retail', current: 52, projected2030: 136 },
    { industry: 'Mfg', current: 34, projected2030: 250 },
    { industry: 'Finance', current: 11, projected2030: 24 }
  ];

  const awarenessData = [
    { metric: 'Want to trade data', percent: 76 },
    { metric: 'Know it is sold', percent: 75 },
    { metric: 'Feel they benefit', percent: 11 }
  ];

  const arpuGrowthData = [
    { year: '2022', meta: 225, google: 393 },
    { year: '2023', meta: 235, google: 420 },
    { year: '2024', meta: 274, google: 460 }
  ];

  const tenYearValueData = [
    { scenario: 'Low', value: 7000 },
    { scenario: 'Mid', value: 12000 },
    { scenario: 'Actual', value: 20000 }
  ];

  const slides = [
    {
      title: "The Data Economy: $450B → $1.5 Trillion by 2030",
      subtitle: "A market bigger than the entire advertising industry is being built on your data",
      source: "https://www.marketsandmarkets.com/Market-Reports/big-data-market-1068.html",
      chart: (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={marketGrowthData}>
            <defs>
              <linearGradient id="marketGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#fff" stopOpacity={0.6}/>
                <stop offset="95%" stopColor="#ff8c00" stopOpacity={0.2}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
            <XAxis dataKey="year" stroke="#fff" tick={{ fill: '#fff', fontSize: 14, fontWeight: 600 }} />
            <YAxis stroke="#fff" tick={{ fill: '#fff', fontSize: 14, fontWeight: 600 }} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="value" name="Market Value ($B)" stroke="#ff8c00" strokeWidth={3} fillOpacity={1} fill="url(#marketGradient)" />
          </AreaChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "Your Data Generates $700-2,000/Year. You Get: $0",
      subtitle: "Tech giants monetize your data while you receive nothing",
      source: "https://www.statista.com/statistics/arpu-facebook-google/",
      chart: (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={userValueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
            <XAxis dataKey="platform" stroke="#fff" tick={{ fill: '#fff', fontSize: 14, fontWeight: 600 }} />
            <YAxis stroke="#fff" tick={{ fill: '#fff', fontSize: 14, fontWeight: 600 }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" name="Annual Value ($)" radius={[8, 8, 0, 0]}>
              {userValueData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={index === userValueData.length - 1 ? '#ff8c00' : '#fff'} 
                  fillOpacity={index === userValueData.length - 1 ? 1 : 0.8}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "Big Tech Extracts $1.36 Billion Daily From User Data",
      subtitle: "Every single day, billions flow from your data to their profits",
      source: "https://investor.fb.com/financials/",
      chart: (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dailyProfitsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
            <XAxis dataKey="company" stroke="#fff" tick={{ fill: '#fff', fontSize: 14, fontWeight: 600 }} />
            <YAxis stroke="#fff" tick={{ fill: '#fff', fontSize: 14, fontWeight: 600 }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="daily" name="Daily Profit ($M)" fill="#fff" fillOpacity={0.8} stroke="#ff8c00" strokeWidth={2} radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "100% Value Extraction, 0% User Compensation",
      subtitle: "The most one-sided economic relationship in history",
      source: "https://www.eff.org/issues/privacy",
      chart: (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={ownershipGapData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
            <XAxis dataKey="category" stroke="#fff" tick={{ fill: '#fff', fontSize: 14, fontWeight: 600 }} />
            <YAxis stroke="#fff" tick={{ fill: '#fff', fontSize: 14, fontWeight: 600 }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="user" stackId="a" fill="#fff" fillOpacity={0.5} name="User Share" radius={[0, 0, 0, 0]} />
            <Bar dataKey="company" stackId="a" fill="#ff8c00" name="Company Share" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "AI + Data Markets Racing to $4 Trillion Combined",
      subtitle: "Two massive markets converging around one resource: your data",
      source: "https://www.grandviewresearch.com/industry-analysis/artificial-intelligence-ai-market",
      chart: (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={aiDataConvergence}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
            <XAxis dataKey="year" stroke="#fff" tick={{ fill: '#fff', fontSize: 14, fontWeight: 600 }} />
            <YAxis stroke="#fff" tick={{ fill: '#fff', fontSize: 14, fontWeight: 600 }} />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="ai" 
              name="AI Market ($B)"
              stroke="#ff8c00" 
              strokeWidth={4} 
              dot={{ r: 7, fill: '#ff8c00', strokeWidth: 2, stroke: '#fff' }} 
            />
            <Line 
              type="monotone" 
              dataKey="data" 
              name="Data Market ($B)"
              stroke="#fff" 
              strokeWidth={4} 
              dot={{ r: 7, fill: '#fff', strokeWidth: 2, stroke: '#ff8c00' }} 
            />
          </LineChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "Top Data-Driven Industries: 2024 vs 2030",
      subtitle: "Every industry is racing to monetize data—without sharing profits",
      source: "https://www.idc.com/getdoc.jsp?containerId=prUS48165721",
      chart: (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={industryData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
            <XAxis dataKey="industry" stroke="#fff" tick={{ fill: '#fff', fontSize: 14, fontWeight: 600 }} />
            <YAxis stroke="#fff" tick={{ fill: '#fff', fontSize: 14, fontWeight: 600 }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="current" name="2024 ($B)" fill="#fff" fillOpacity={0.6} stroke="#fff" strokeWidth={1} radius={[8, 8, 0, 0]} />
            <Bar dataKey="projected2030" name="2030 ($B)" fill="#ff8c00" stroke="#ff8c00" strokeWidth={2} radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "76% Want Data Ownership. 89% See No Benefits.",
      subtitle: "The disconnect between what people want and what they receive",
      source: "https://www.pewresearch.org/internet/2019/11/15/americans-and-privacy-concerned-confused-and-feeling-lack-of-control-over-their-personal-information/",
      chart: (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={awarenessData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
            <XAxis dataKey="metric" stroke="#fff" tick={{ fill: '#fff', fontSize: 14, fontWeight: 600 }} />
            <YAxis domain={[0, 100]} stroke="#fff" tick={{ fill: '#fff', fontSize: 14, fontWeight: 600 }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="percent" name="Percentage" radius={[8, 8, 0, 0]}>
              {awarenessData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.percent > 50 ? '#fff' : '#ff8c00'} fillOpacity={0.9} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "Platform Revenue Per User Growing 17-22% Yearly",
      subtitle: "They're getting richer from your data every single year",
      source: "https://www.statista.com/statistics/251328/facebooks-average-revenue-per-user/",
      chart: (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={arpuGrowthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
            <XAxis dataKey="year" stroke="#fff" tick={{ fill: '#fff', fontSize: 14, fontWeight: 600 }} />
            <YAxis stroke="#fff" tick={{ fill: '#fff', fontSize: 14, fontWeight: 600 }} />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="meta" name="Meta ARPU ($)" stroke="#fff" strokeWidth={4} dot={{ r: 8, fill: '#fff', strokeWidth: 2, stroke: '#ff8c00' }} />
            <Line type="monotone" dataKey="google" name="Google ARPU ($)" stroke="#ff8c00" strokeWidth={4} dot={{ r: 8, fill: '#ff8c00', strokeWidth: 2, stroke: '#fff' }} />
          </LineChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "Your Data's 10-Year Value: Up to $20,000",
      subtitle: "Imagine what you could do with that money in your pocket",
      source: "https://www.weforum.org/agenda/2020/01/personal-data-values-worth/",
      chart: (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={tenYearValueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
            <XAxis dataKey="scenario" stroke="#fff" tick={{ fill: '#fff', fontSize: 14, fontWeight: 600 }} />
            <YAxis stroke="#fff" tick={{ fill: '#fff', fontSize: 14, fontWeight: 600 }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" name="10-Year Value ($)" radius={[8, 8, 0, 0]}>
              {tenYearValueData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={index === 2 ? '#ff8c00' : '#fff'} 
                  fillOpacity={index === 2 ? 1 : 0.6}
                  stroke={index === 2 ? '#ff8c00' : '#fff'} 
                  strokeWidth={2} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )
    }
  ];

  const currentSlideData = slides[currentSlide];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      background: 'transparent',
      padding: '0',
      margin: '0',
      overflow: 'hidden',
      zIndex: 9999
    }}>
      {/* Title at top - 150px padding to avoid nav overlap */}
      <div style={{
        padding: '150px 60px 10px 60px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: 'clamp(28px, 4vw, 52px)',
          fontWeight: '900',
          color: '#fff',
          margin: '0',
          textShadow: '0 2px 20px rgba(0,0,0,0.9), 0 4px 40px rgba(0,0,0,0.8)',
          lineHeight: '1.2'
        }}>
          {currentSlideData.title}
        </h1>
      </div>

      {/* Chart - max 60% of vertical height */}
      <div style={{
        width: '100%',
        height: '60vh',
        maxHeight: '60vh',
        padding: '0 60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {currentSlideData.chart}
      </div>

      {/* Subtitle - closer to chart */}
      <div style={{
        padding: '5px 60px 10px 60px',
        textAlign: 'center'
      }}>
        <p style={{
          fontSize: 'clamp(16px, 2vw, 22px)',
          color: '#fff',
          margin: '0',
          textShadow: '0 2px 8px rgba(0,0,0,0.9)',
          opacity: 0.95
        }}>
          {currentSlideData.subtitle}
        </p>
        
        {/* Source link with info icon */}
        <a 
          href={currentSlideData.source} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginTop: '8px',
            color: 'rgba(255, 140, 0, 0.8)',
            fontSize: '14px',
            textDecoration: 'none',
            transition: 'all 0.3s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#ff8c00';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = 'rgba(255, 140, 0, 0.8)';
          }}
        >
          <Info size={16} />
          <span>Source</span>
        </a>
      </div>

      {/* Navigation - 100px bottom padding */}
      <div style={{
        padding: '20px 60px 100px 60px',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px'
        }}>
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              border: '2px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '50%',
              width: '54px',
              height: '54px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s',
              backdropFilter: 'blur(10px)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255, 140, 0, 0.4)';
              e.currentTarget.style.borderColor = '#ff8c00';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <ChevronLeft size={30} color="white" strokeWidth={3} />
          </button>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                style={{
                  height: '10px',
                  width: currentSlide === index ? '36px' : '10px',
                  borderRadius: '5px',
                  background: currentSlide === index ? '#ff8c00' : 'rgba(255, 255, 255, 0.5)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              border: '2px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '50%',
              width: '54px',
              height: '54px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s',
              backdropFilter: 'blur(10px)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255, 140, 0, 0.4)';
              e.currentTarget.style.borderColor = '#ff8c00';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <ChevronRight size={30} color="white" strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Scroll down icon at very bottom */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        opacity: 0.7,
        animation: 'bounce 2s infinite'
      }}>
        <span style={{
          color: '#fff',
          fontSize: '14px',
          textShadow: '0 2px 8px rgba(0,0,0,0.9)'
        }}>
          Scroll to continue
        </span>
        <ChevronDown size={24} color="white" strokeWidth={3} />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </div>
  );
};

export default DataOwnershipIntro;