import React, { useEffect, useRef, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

/**
 * Embeddable Data Chart - Transparent background version for embedding in primer
 * Just the visualization with no surrounding UI
 */
const EmbedDataChart = () => {
  const [hoveredData, setHoveredData] = useState(null);
  
  // Prepare chart data
  const chartData = [
    { type: 'Health', volume: 525600, color: '#E74C3C', label: '1,440 readings/day', icon: '❤️' },
    { type: 'Location', volume: 8760, color: '#4A90E2', label: '24 points/day', icon: '📍' },
    { type: 'Search', volume: 4380, color: '#1ABC9C', label: '12 queries/day', icon: '🔍' },
    { type: 'Social', volume: 2190, color: '#9B59B6', label: '6 posts/day', icon: '👥' },
    { type: 'Finance', volume: 1460, color: '#27AE60', label: '4 transactions/day', icon: '💳' },
    { type: 'Shopping', volume: 730, color: '#F39C12', label: '2 purchases/day', icon: '🛒' }
  ];
  
  return (
    <div style={{ 
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent', // Transparent background
      padding: '20px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '800px',
        background: 'transparent'
      }}>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.3} />
            <XAxis 
              dataKey="type" 
              stroke="#888"
              tick={{ fill: '#ccc', fontSize: 14, fontWeight: 600 }}
            />
            <YAxis 
              stroke="#888"
              tick={{ fill: '#ccc', fontSize: 12 }}
              tickFormatter={(value) => {
                if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
                return value;
              }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.9)', 
                border: '1px solid #333',
                borderRadius: '8px',
                color: '#fff',
                backdropFilter: 'blur(10px)'
              }}
              formatter={(value, name, props) => [
                `${value.toLocaleString()} points/year`,
                props.payload.icon + ' ' + props.payload.type
              ]}
            />
            <Bar 
              dataKey="volume" 
              radius={[8, 8, 0, 0]}
              onMouseEnter={(data) => setHoveredData(data)}
              onMouseLeave={() => setHoveredData(null)}
            >
              {chartData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                  opacity={hoveredData && hoveredData.type === entry.type ? 1 : 0.85}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        
        {/* Key insights below chart */}
        <div style={{ 
          marginTop: '20px',
          textAlign: 'center',
          fontSize: '14px',
          color: '#aaa',
          fontStyle: 'italic',
          fontFamily: 'Inter, sans-serif'
        }}>
          Total: <strong style={{ color: '#60a5fa' }}>543,120</strong> data points per year
        </div>
      </div>
    </div>
  );
};

export default EmbedDataChart;
