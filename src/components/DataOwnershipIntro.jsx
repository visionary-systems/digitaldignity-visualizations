import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Bar, BarChart, Line, LineChart, Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const DataOwnershipIntro = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [scale, setScale] = useState(1);

  // Get URL parameters for external control
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scaleParam = params.get('scale');
    if (scaleParam) {
      setScale(parseFloat(scaleParam));
    }
  }, []);

  // Device and orientation detection
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
      const portrait = height > width;

      setIsMobile(width <= 768);
      setIsTablet((width > 768 && width <= 1366 && isTouch) || (width > 768 && width <= 1024));
      setIsPortrait(portrait);
      setViewportHeight(height);
      setViewportWidth(width);

      console.log('DataOwnershipIntro: Device check - width:', width, 'height:', height, 'portrait:', portrait, 'mobile:', width <= 768, 'tablet:', (width > 768 && width <= 1366), 'maxWidth:', portrait ? '80%' : '100%');
    };

    checkDevice();

    document.body.style.background = 'transparent';
    document.body.style.overflow = 'hidden';
    document.body.style.margin = '0';
    document.body.style.padding = '0';

    const htmlEl = document.documentElement;
    if (htmlEl) {
      htmlEl.style.overflow = 'hidden';
    }

    const appDiv = document.querySelector('.App');
    if (appDiv) {
      appDiv.style.background = 'transparent';
      appDiv.style.minHeight = '100vh';
      appDiv.style.maxHeight = '100vh';
      appDiv.style.overflow = 'hidden';
    }

    // Listen for reset messages from parent iframe
    const handleMessage = (event) => {
      if (event.data && event.data.type === 'resetSlideshow') {
        console.log('DataOwnershipIntro: Received reset message');
        setCurrentSlide(0);
      }
      // Allow parent to set scale
      if (event.data && event.data.type === 'setScale') {
        setScale(event.data.scale || 1);
      }
    };

    window.addEventListener('resize', checkDevice);
    window.addEventListener('orientationchange', checkDevice);
    window.addEventListener('message', handleMessage);

    return () => {
      document.body.style.background = '';
      document.body.style.overflow = '';
      if (htmlEl) htmlEl.style.overflow = '';
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('orientationchange', checkDevice);
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // Navigation handlers - using onClick only to prevent double-firing
  const goToPrevSlide = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + 7) % 7);
  }, []);

  const goToNextSlide = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % 7);
  }, []);

  const goToSlide = useCallback((index) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide(index);
  }, []);

  // Enhanced Tooltip with better styling
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          border: '2px solid #ff8c00',
          borderRadius: '12px',
          padding: isMobile ? '8px 12px' : '12px 16px',
          boxShadow: '0 8px 32px rgba(255, 140, 0, 0.4)'
        }}>
          <p style={{ color: '#fff', fontWeight: 'bold', marginBottom: '6px', fontSize: isMobile ? '12px' : '14px' }}>{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: '#fff', fontSize: isMobile ? '11px' : '13px', margin: '3px 0' }}>
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

  // Responsive sizing based on device AND orientation
  const getTickFontSize = () => {
    if (isMobile) return 10;
    if (isTablet && isPortrait) return 10; // Smaller for portrait tablet
    if (isTablet) return 12;
    return 14;
  };

  const tickFontSize = getTickFontSize();

  const slides = [
    {
      title: "The Data Economy:",
      title2: "$450B → $1.5 Trillion by 2030",
      subtitle: "A market bigger than the entire advertising industry is being built on your data",
      source: "https://www.marketsandmarkets.com/Market-Reports/big-data-market-1068.html",
      chart: (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={marketGrowthData}>
            <defs>
              <linearGradient id="marketGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff8c00" stopOpacity={0.9}/>
                <stop offset="50%" stopColor="#ff8c00" stopOpacity={0.5}/>
                <stop offset="100%" stopColor="#ff8c00" stopOpacity={0.1}/>
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <CartesianGrid strokeDasharray="5 5" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="year" stroke="#fff" tick={{ fill: '#fff', fontSize: tickFontSize, fontWeight: 700 }} />
            <YAxis stroke="#fff" tick={{ fill: '#fff', fontSize: tickFontSize, fontWeight: 700 }} />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              name="Market Value ($B)"
              stroke="#ff8c00"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#marketGradient)"
              filter="url(#glow)"
            />
          </AreaChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "Big Tech Extracts $1.36 BN",
      title2: "Daily From User Data",
      subtitle: "Every single day, billions flow from your data to their profits",
      source: "https://investor.fb.com/financials/",
      chart: (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dailyProfitsData}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fff" stopOpacity={1}/>
                <stop offset="100%" stopColor="#ff8c00" stopOpacity={0.8}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="5 5" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="company" stroke="#fff" tick={{ fill: '#fff', fontSize: tickFontSize, fontWeight: 700 }} />
            <YAxis stroke="#fff" tick={{ fill: '#fff', fontSize: tickFontSize, fontWeight: 700 }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="daily"
              name="Daily Profit ($M)"
              fill="url(#barGradient)"
              stroke="#ff8c00"
              strokeWidth={2}
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "100% Value Extraction,",
      title2: "0% User Compensation",
      subtitle: "The most one-sided economic relationship in history",
      source: "https://www.eff.org/issues/privacy",
      chart: (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={ownershipGapData}>
            <defs>
              <linearGradient id="userGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fff" stopOpacity={0.7}/>
                <stop offset="100%" stopColor="#fff" stopOpacity={0.3}/>
              </linearGradient>
              <linearGradient id="companyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff8c00" stopOpacity={1}/>
                <stop offset="100%" stopColor="#ff6600" stopOpacity={0.8}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="5 5" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="category" stroke="#fff" tick={{ fill: '#fff', fontSize: tickFontSize, fontWeight: 700 }} />
            <YAxis stroke="#fff" tick={{ fill: '#fff', fontSize: tickFontSize, fontWeight: 700 }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="user" stackId="a" fill="url(#userGradient)" name="User Share" radius={[0, 0, 0, 0]} stroke="#fff" strokeWidth={2} />
            <Bar dataKey="company" stackId="a" fill="url(#companyGradient)" name="Company Share" radius={[8, 8, 0, 0]} stroke="#ff8c00" strokeWidth={2} />
          </BarChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "AI + Data Markets",
      title2: "Racing to $4 Trillion Combined",
      subtitle: "Two massive markets converging around one resource: your data",
      source: "https://www.grandviewresearch.com/industry-analysis/artificial-intelligence-ai-market",
      chart: (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={aiDataConvergence}>
            <defs>
              <filter id="lineGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <CartesianGrid strokeDasharray="5 5" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="year" stroke="#fff" tick={{ fill: '#fff', fontSize: tickFontSize, fontWeight: 700 }} />
            <YAxis stroke="#fff" tick={{ fill: '#fff', fontSize: tickFontSize, fontWeight: 700 }} />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="ai"
              name="AI Market ($B)"
              stroke="#ff8c00"
              strokeWidth={4}
              dot={{ r: 6, fill: '#ff8c00', strokeWidth: 2, stroke: '#fff' }}
              filter="url(#lineGlow)"
            />
            <Line
              type="monotone"
              dataKey="data"
              name="Data Market ($B)"
              stroke="#fff"
              strokeWidth={4}
              dot={{ r: 6, fill: '#fff', strokeWidth: 2, stroke: '#ff8c00' }}
              filter="url(#lineGlow)"
            />
          </LineChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "Top Data-Driven Industries:",
      title2: "2024 vs 2030",
      subtitle: "Every industry is racing to monetize data—without sharing profits",
      source: "https://www.idc.com/getdoc.jsp?containerId=prUS48165721",
      chart: (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={industryData}>
            <defs>
              <linearGradient id="current2024" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fff" stopOpacity={0.8}/>
                <stop offset="100%" stopColor="#fff" stopOpacity={0.4}/>
              </linearGradient>
              <linearGradient id="projected2030" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff8c00" stopOpacity={1}/>
                <stop offset="100%" stopColor="#ff6600" stopOpacity={0.7}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="5 5" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="industry" stroke="#fff" tick={{ fill: '#fff', fontSize: tickFontSize, fontWeight: 700 }} />
            <YAxis stroke="#fff" tick={{ fill: '#fff', fontSize: tickFontSize, fontWeight: 700 }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="current" name="2024 ($B)" fill="url(#current2024)" stroke="#fff" strokeWidth={2} radius={[8, 8, 0, 0]} />
            <Bar dataKey="projected2030" name="2030 ($B)" fill="url(#projected2030)" stroke="#ff8c00" strokeWidth={2} radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "Platform Revenue Per User",
      title2: "Growing 17-22% Yearly",
      subtitle: "They're getting richer from your data every single year",
      source: "https://www.statista.com/statistics/251328/facebooks-average-revenue-per-user/",
      chart: (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={arpuGrowthData}>
            <defs>
              <filter id="lineGlow2">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <CartesianGrid strokeDasharray="5 5" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="year" stroke="#fff" tick={{ fill: '#fff', fontSize: tickFontSize, fontWeight: 700 }} />
            <YAxis stroke="#fff" tick={{ fill: '#fff', fontSize: tickFontSize, fontWeight: 700 }} />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="meta"
              name="Meta ARPU ($)"
              stroke="#fff"
              strokeWidth={4}
              dot={{ r: 8, fill: '#fff', strokeWidth: 2, stroke: '#ff8c00' }}
              filter="url(#lineGlow2)"
            />
            <Line
              type="monotone"
              dataKey="google"
              name="Google ARPU ($)"
              stroke="#ff8c00"
              strokeWidth={4}
              dot={{ r: 8, fill: '#ff8c00', strokeWidth: 2, stroke: '#fff' }}
              filter="url(#lineGlow2)"
            />
          </LineChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "Your Data's 10-Year Value:",
      title2: "Up to $20,000",
      subtitle: "Imagine what you could do with that money in your pocket",
      source: "https://www.weforum.org/agenda/2020/01/personal-data-values-worth/",
      chart: (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={tenYearValueData}>
            <defs>
              <linearGradient id="lowGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fff" stopOpacity={0.7}/>
                <stop offset="100%" stopColor="#fff" stopOpacity={0.3}/>
              </linearGradient>
              <linearGradient id="midGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fff" stopOpacity={0.8}/>
                <stop offset="100%" stopColor="#fff" stopOpacity={0.5}/>
              </linearGradient>
              <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff8c00" stopOpacity={1}/>
                <stop offset="50%" stopColor="#ff9900" stopOpacity={0.9}/>
                <stop offset="100%" stopColor="#ff6600" stopOpacity={0.8}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="5 5" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="scenario" stroke="#fff" tick={{ fill: '#fff', fontSize: tickFontSize, fontWeight: 700 }} />
            <YAxis stroke="#fff" tick={{ fill: '#fff', fontSize: tickFontSize, fontWeight: 700 }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" name="10-Year Value ($)" radius={[8, 8, 0, 0]}>
              {tenYearValueData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === 0 ? 'url(#lowGradient)' : index === 1 ? 'url(#midGradient)' : 'url(#actualGradient)'}
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

  // Calculate layout based on device, orientation, and scale
  // PORTRAIT RULE: Max 80% width with 15pt right padding
  const getLayoutValues = () => {
    // Portrait mode - any device in vertical orientation
    // Max 80% of available width with 15pt (15px) right padding built in
    if (isPortrait) {
      const rightPadding = 15; // 15pt padding on right
      const maxWidthPercent = 80; // 80% max width

      // Portrait tablet - 60px/35px titles, 80% max chart width
      if (isTablet) {
        return {
          buttonAreaHeight: 70,
          titleHeight: '16%',
          chartHeight: '52%',
          subtitleHeight: '8%',
          navHeight: '10%',
          titlePadding: '15px 15px 5px 15px',
          chartPadding: '0 15px',
          subtitlePadding: '3px 15px',
          navPadding: '20px',
          titleFontSize: '60px',
          title2FontSize: '35px',
          buttonSize: '34px',
          dotSize: '6px',
          dotActiveWidth: '18px',
          // Portrait-specific width constraints - 80% max
          containerMaxWidth: '100%',
          containerRightPadding: '0',
          chartMaxWidth: '80%',
          isPortraitLayout: true
        };
      }

      // Portrait mobile - 60px/35px titles, 80% max chart width
      if (isMobile) {
        return {
          buttonAreaHeight: 70,
          titleHeight: '16%',
          chartHeight: '55%',
          subtitleHeight: '8%',
          navHeight: '12%',
          titlePadding: '15px 15px 5px 15px',
          chartPadding: '0 12px',
          subtitlePadding: '3px 12px',
          navPadding: '20px',
          titleFontSize: '60px',
          title2FontSize: '35px',
          buttonSize: '32px',
          dotSize: '5px',
          dotActiveWidth: '15px',
          // Portrait mobile - 80% max chart width
          containerMaxWidth: '100%',
          containerRightPadding: '0',
          chartMaxWidth: '80%',
          isPortraitLayout: true
        };
      }

      // Portrait desktop (rare but possible - rotated monitor) - 60px/35px titles, 80% max
      return {
        buttonAreaHeight: 0,
        titleHeight: '20%',
        chartHeight: '52%',
        subtitleHeight: '8%',
        navHeight: '12%',
        titlePadding: '25px 30px 10px 30px',
        chartPadding: '0 30px',
        subtitlePadding: '8px 30px',
        navPadding: '20px',
        titleFontSize: '60px',
        title2FontSize: '35px',
        buttonSize: '42px',
        dotSize: '8px',
        dotActiveWidth: '24px',
        // Portrait desktop - 80% max chart width
        containerMaxWidth: '100%',
        containerRightPadding: '0',
        chartMaxWidth: '80%',
        isPortraitLayout: true
      };
    }

    // LANDSCAPE MODE - full width available
    // Landscape tablet - scaled down from desktop 80pt/40pt
    if (isTablet) {
      return {
        buttonAreaHeight: 80,
        titleHeight: '20%',
        chartHeight: '52%',
        subtitleHeight: '8%',
        navHeight: '12%',
        titlePadding: '20px 20px 8px 20px',
        chartPadding: '0 15px',
        subtitlePadding: '5px 20px',
        navPadding: '20px',
        titleFontSize: '55pt',
        title2FontSize: '30pt',
        buttonSize: '38px',
        dotSize: '7px',
        dotActiveWidth: '20px',
        containerMaxWidth: '100%',
        containerRightPadding: '0',
        chartMaxWidth: '100%',
        isPortraitLayout: false
      };
    }

    // Landscape mobile - scaled down from desktop 80pt/40pt
    if (isMobile) {
      return {
        buttonAreaHeight: 70,
        titleHeight: '18%',
        chartHeight: '55%',
        subtitleHeight: '8%',
        navHeight: '12%',
        titlePadding: '10px 15px 5px 15px',
        chartPadding: '0 8px',
        subtitlePadding: '3px 12px',
        navPadding: '20px',
        titleFontSize: '28pt',
        title2FontSize: '16pt',
        buttonSize: '30px',
        dotSize: '5px',
        dotActiveWidth: '15px',
        containerMaxWidth: '100%',
        containerRightPadding: '0',
        chartMaxWidth: '100%',
        isPortraitLayout: false
      };
    }

    // Desktop landscape (standard)
    // Title sizes: 120pt top line, 80pt second line
    // Max 40px gap between subtitle and selector (20px bottom + 20px top)
    return {
      buttonAreaHeight: 0,
      titleHeight: '22%',
      chartHeight: '58%',
      subtitleHeight: 'auto',
      navHeight: 'auto',
      titlePadding: '30px 50px 10px 50px',
      chartPadding: '0 40px',
      subtitlePadding: '20px 50px 20px 50px',
      navPadding: '20px 50px 20px 50px',
      titleFontSize: '80pt',
      title2FontSize: '50pt',
      buttonSize: '58px',
      dotSize: '11px',
      dotActiveWidth: '35px',
      containerMaxWidth: '100%',
      containerRightPadding: '0',
      chartMaxWidth: '1600px',
      isPortraitLayout: false
    };
  };

  const layout = getLayoutValues();

  // Button styles for navigation
  const navButtonStyle = {
    background: 'rgba(255, 255, 255, 0.15)',
    border: '2px solid rgba(255, 255, 255, 0.4)',
    borderRadius: '50%',
    width: layout.buttonSize,
    height: layout.buttonSize,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s',
    backdropFilter: 'blur(10px)',
    WebkitTapHighlightColor: 'transparent',
    touchAction: 'manipulation',
    userSelect: 'none',
    WebkitUserSelect: 'none'
  };

  const iconSize = isMobile ? 16 : isTablet && isPortrait ? 18 : isTablet ? 20 : 30;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      // Portrait: max 80% width, Landscape: full width
      width: layout.isPortraitLayout ? layout.containerMaxWidth : '100vw',
      maxWidth: layout.isPortraitLayout ? layout.containerMaxWidth : '100vw',
      height: isMobile || isTablet ? `calc(100vh - ${layout.buttonAreaHeight}px)` : '100vh',
      maxHeight: isMobile || isTablet ? `calc(100vh - ${layout.buttonAreaHeight}px)` : '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      background: 'transparent',
      padding: '0',
      // 15pt right padding for portrait mode
      paddingRight: layout.containerRightPadding,
      margin: '0',
      overflow: 'hidden',
      zIndex: 10,
      boxSizing: 'border-box',
      transform: scale !== 1 ? `scale(${scale})` : 'none',
      transformOrigin: 'top left'
    }}>
      {/* Title at top */}
      <div style={{
        height: layout.titleHeight,
        minHeight: layout.titleHeight,
        padding: layout.titlePadding,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1200px', width: '100%' }}>
          <h1 style={{
            fontSize: layout.titleFontSize,
            fontWeight: '900',
            color: '#fff',
            margin: '0',
            textShadow: '0 2px 15px rgba(0,0,0,0.45), 0 4px 30px rgba(0,0,0,0.35)',
            lineHeight: '1.05',
            letterSpacing: '-1px',
            whiteSpace: isMobile || (isTablet && isPortrait) ? 'normal' : 'nowrap',
            overflow: 'hidden'
          }}>
            {currentSlideData.title}
          </h1>
          <h1 style={{
            fontSize: layout.title2FontSize,
            fontWeight: '900',
            color: '#fff',
            margin: '0',
            textShadow: '0 2px 15px rgba(0,0,0,0.45), 0 4px 30px rgba(0,0,0,0.35)',
            lineHeight: '1.1',
            letterSpacing: '-1px',
            whiteSpace: isMobile || (isTablet && isPortrait) ? 'normal' : 'nowrap',
            overflow: 'hidden'
          }}>
            {currentSlideData.title2}
          </h1>
        </div>
      </div>

      {/* Chart - always centered */}
      <div style={{
        height: layout.chartHeight,
        minHeight: layout.chartHeight,
        maxHeight: layout.chartHeight,
        width: '100%',
        padding: layout.chartPadding,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}>
        <div style={{
          width: '100%',
          maxWidth: layout.chartMaxWidth,
          height: '100%'
        }}>
          {currentSlideData.chart}
        </div>
      </div>

      {/* Subtitle */}
      <div style={{
        height: layout.subtitleHeight,
        minHeight: layout.subtitleHeight,
        padding: layout.subtitlePadding,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <div style={{
          background: 'rgba(0, 0, 0, 0.6)',
          padding: '20pt',
          borderRadius: '12px'
        }}>
          <p style={{
            fontSize: isMobile ? '10px' : isTablet && isPortrait ? '11px' : isTablet ? '12px' : 'clamp(14px, 1.5vw, 16px)',
            lineHeight: isMobile ? '13px' : isTablet ? '15px' : '20px',
            color: '#fff',
            margin: '0',
            textShadow: '0 2px 8px rgba(0,0,0,0.9)',
            opacity: 0.95,
            display: 'inline'
          }}>
            {currentSlideData.subtitle}
            {' '}
            <a
              href={currentSlideData.source}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobile ? '16px' : '20px',
                height: isMobile ? '16px' : '20px',
                borderRadius: '50%',
                backgroundColor: '#ff8c00',
                color: '#fff',
                fontSize: isMobile ? '10px' : '12px',
                fontWeight: 'bold',
                textDecoration: 'none',
                verticalAlign: 'middle',
                marginLeft: '4px',
                fontStyle: 'italic'
              }}
              title="View source"
            >
              i
            </a>
          </p>
        </div>
      </div>

      {/* Navigation - onClick only to prevent double-firing in Chrome */}
      <div style={{
        height: layout.navHeight,
        minHeight: layout.navHeight,
        padding: layout.navPadding,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: isMobile ? '10px' : isTablet && isPortrait ? '12px' : isTablet ? '15px' : '25px'
        }}>
          <button
            onClick={goToPrevSlide}
            style={navButtonStyle}
            aria-label="Previous slide"
          >
            <ChevronLeft size={iconSize} color="white" strokeWidth={3} />
          </button>

          <div style={{ display: 'flex', gap: isMobile ? '5px' : isTablet && isPortrait ? '6px' : isTablet ? '7px' : '11px', alignItems: 'center' }}>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentSlide === index ? 'true' : undefined}
                style={{
                  height: layout.dotSize,
                  width: currentSlide === index ? layout.dotActiveWidth : layout.dotSize,
                  borderRadius: '5px',
                  background: currentSlide === index ? '#ff8c00' : 'rgba(255, 255, 255, 0.5)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  WebkitTapHighlightColor: 'transparent',
                  touchAction: 'manipulation'
                }}
              />
            ))}
          </div>

          <button
            onClick={goToNextSlide}
            style={navButtonStyle}
            aria-label="Next slide"
          >
            <ChevronRight size={iconSize} color="white" strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Down arrow - desktop only */}
      {!isMobile && !isTablet && (
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          opacity: 0.7,
          animation: 'bounce 2s infinite'
        }}>
          <ChevronDown size={24} color="#ff8c00" strokeWidth={3} />
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </div>
  );
};

export default DataOwnershipIntro;
