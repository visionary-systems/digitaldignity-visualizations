import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Bar, BarChart, Line, LineChart, Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const DataOwnershipIntro = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 600);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Custom Tooltip Component - Minimal white style
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-lg p-3 shadow-lg">
          <p className="font-bold text-white mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm text-white/90">
              <span className="font-semibold">{entry.name}:</span> {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Data sets
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
      chart: (
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={marketGrowthData}>
            <defs>
              <linearGradient id="marketGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#fff" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#fff" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="year" stroke="#fff" tick={{ fill: '#fff', fontSize: 13, fontWeight: 600 }} />
            <YAxis stroke="#fff" tick={{ fill: '#fff', fontSize: 13, fontWeight: 600 }} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="value" name="Market Value ($B)" stroke="#fff" strokeWidth={2} fillOpacity={1} fill="url(#marketGradient)" />
          </AreaChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "Your Data Generates $700-2,000/Year. You Get: $0",
      subtitle: "Tech giants monetize your data while you receive nothing",
      chart: (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={userValueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="platform" stroke="#fff" tick={{ fill: '#fff', fontSize: 13, fontWeight: 600 }} />
            <YAxis stroke="#fff" tick={{ fill: '#fff', fontSize: 13, fontWeight: 600 }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" name="Annual Value ($)" radius={[8, 8, 0, 0]}>
              {userValueData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={index === userValueData.length - 1 ? '#fff' : `rgba(255, 255, 255, ${0.3 + index * 0.15})`} 
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
      chart: (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={dailyProfitsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="company" stroke="#fff" tick={{ fill: '#fff', fontSize: 13, fontWeight: 600 }} />
            <YAxis stroke="#fff" tick={{ fill: '#fff', fontSize: 13, fontWeight: 600 }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="daily" name="Daily Profit ($M)" fill="rgba(255,255,255,0.5)" stroke="#fff" strokeWidth={2} radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "100% Value Extraction, 0% User Compensation",
      subtitle: "The most one-sided economic relationship in history",
      chart: (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={ownershipGapData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="category" stroke="#fff" tick={{ fill: '#fff', fontSize: 13, fontWeight: 600 }} />
            <YAxis stroke="#fff" tick={{ fill: '#fff', fontSize: 13, fontWeight: 600 }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="user" stackId="a" fill="rgba(255,255,255,0.4)" name="User Share" radius={[0, 0, 0, 0]} />
            <Bar dataKey="company" stackId="a" fill="rgba(255,255,255,0.8)" name="Company Share" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "AI + Data Markets Racing to $4 Trillion Combined",
      subtitle: "Two massive markets converging around one resource: your data",
      chart: (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={aiDataConvergence}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="year" stroke="#fff" tick={{ fill: '#fff', fontSize: 13, fontWeight: 600 }} />
            <YAxis stroke="#fff" tick={{ fill: '#fff', fontSize: 13, fontWeight: 600 }} />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="ai" 
              name="AI Market ($B)"
              stroke="#fff" 
              strokeWidth={3} 
              strokeDasharray="5 5" 
              dot={{ r: 6, fill: '#fff', strokeWidth: 2, stroke: 'transparent' }} 
            />
            <Line 
              type="monotone" 
              dataKey="data" 
              name="Data Market ($B)"
              stroke="rgba(255,255,255,0.6)" 
              strokeWidth={3} 
              dot={{ r: 6, fill: 'rgba(255,255,255,0.6)', strokeWidth: 2, stroke: 'transparent' }} 
            />
          </LineChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "Top Data-Driven Industries: 2024 vs 2030",
      subtitle: "Every industry is racing to monetize data—without sharing profits",
      chart: (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={industryData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="industry" stroke="#fff" tick={{ fill: '#fff', fontSize: 13, fontWeight: 600 }} />
            <YAxis stroke="#fff" tick={{ fill: '#fff', fontSize: 13, fontWeight: 600 }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="current" name="2024 ($B)" fill="rgba(255,255,255,0.4)" stroke="rgba(255,255,255,0.6)" strokeWidth={1} radius={[8, 8, 0, 0]} />
            <Bar dataKey="projected2030" name="2030 ($B)" fill="rgba(255,255,255,0.6)" stroke="#fff" strokeWidth={2} radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "76% Want Data Ownership. 89% See No Benefits.",
      subtitle: "The disconnect between what people want and what they receive",
      chart: (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={awarenessData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="metric" stroke="#fff" tick={{ fill: '#fff', fontSize: 13, fontWeight: 600 }} />
            <YAxis domain={[0, 100]} stroke="#fff" tick={{ fill: '#fff', fontSize: 13, fontWeight: 600 }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="percent" name="Percentage" radius={[8, 8, 0, 0]}>
              {awarenessData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.percent > 50 ? 'rgba(255,255,255,0.6)' : '#fff'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "Platform Revenue Per User Growing 17-22% Yearly",
      subtitle: "They're getting richer from your data every single year",
      chart: (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={arpuGrowthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="year" stroke="#fff" tick={{ fill: '#fff', fontSize: 13, fontWeight: 600 }} />
            <YAxis stroke="#fff" tick={{ fill: '#fff', fontSize: 13, fontWeight: 600 }} />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="meta" name="Meta ARPU ($)" stroke="rgba(255,255,255,0.6)" strokeWidth={3} dot={{ r: 7, fill: 'rgba(255,255,255,0.6)', strokeWidth: 2, stroke: 'transparent' }} />
            <Line type="monotone" dataKey="google" name="Google ARPU ($)" stroke="#fff" strokeWidth={3} dot={{ r: 7, fill: '#fff', strokeWidth: 2, stroke: 'transparent' }} />
          </LineChart>
        </ResponsiveContainer>
      )
    },
    {
      title: "Your Data's 10-Year Value: Up to $20,000",
      subtitle: "Imagine what you could do with that money in your pocket",
      chart: (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={tenYearValueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="scenario" stroke="#fff" tick={{ fill: '#fff', fontSize: 13, fontWeight: 600 }} />
            <YAxis stroke="#fff" tick={{ fill: '#fff', fontSize: 13, fontWeight: 600 }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" name="10-Year Value ($)" radius={[8, 8, 0, 0]}>
              {tenYearValueData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={index === 0 ? 'rgba(255,255,255,0.4)' : index === 1 ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.8)'} 
                  stroke="#fff" 
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-transparent p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Content Card */}
        <div 
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-2xl border border-white/10 transition-transform duration-300"
          style={{ transform: animate ? 'scale(0.98)' : 'scale(1)' }}
        >
          {/* Title */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-3 leading-tight">
            {currentSlideData.title}
          </h2>
          
          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-white/80 mb-6 font-medium">
            {currentSlideData.subtitle}
          </p>

          {/* Chart */}
          <div className="mb-4">
            {currentSlideData.chart}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center mt-6 gap-6">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full w-14 h-14 flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft size={28} strokeWidth={3} color="white" />
          </button>

          {/* Indicators */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'w-10 bg-white' 
                    : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full w-14 h-14 flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight size={28} strokeWidth={3} color="white" />
          </button>
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4 text-white/80 text-base font-semibold">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
};

export default DataOwnershipIntro;