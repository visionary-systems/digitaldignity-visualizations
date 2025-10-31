import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const DataVisualizationStage1 = () => {
  const svgRef = useRef(null);
  const [hoveredData, setHoveredData] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 600;
    const height = 600;
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Clear previous content
    svg.selectAll('*').remove();
    
    // Add subtle radial gradient background
    const defs = svg.append('defs');
    const radialGradient = defs.append('radialGradient')
      .attr('id', 'bgGradient');
    radialGradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#1a1a2e')
      .attr('stop-opacity', 0.8);
    radialGradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#0f0f1e')
      .attr('stop-opacity', 1);
    
    svg.append('rect')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', 'url(#bgGradient)');
    
    // Create glow filter
    const filter = defs.append('filter')
      .attr('id', 'glow');
    filter.append('feGaussianBlur')
      .attr('stdDeviation', '4')
      .attr('result', 'coloredBlur');
    const feMerge = filter.append('feMerge');
    feMerge.append('feMergeNode').attr('in', 'coloredBlur');
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic');
    
    // Data types with icons/symbols and volume data
    const dataPoints = [
      { type: 'Location', color: '#4A90E2', symbol: '📍', angle: 0, volume: 8760, unit: 'points/year' },
      { type: 'Health', color: '#E74C3C', symbol: '❤️', angle: 60, volume: 525600, unit: 'readings/year' },
      { type: 'Social', color: '#9B59B6', symbol: '👥', angle: 120, volume: 2190, unit: 'posts/year' },
      { type: 'Shopping', color: '#F39C12', symbol: '🛒', angle: 180, volume: 730, unit: 'transactions/year' },
      { type: 'Search', color: '#1ABC9C', symbol: '🔍', angle: 240, volume: 4380, unit: 'queries/year' },
      { type: 'Finance', color: '#27AE60', symbol: '💳', angle: 300, volume: 1460, unit: 'transactions/year' }
    ];
    
    // Main group
    const g = svg.append('g');
    
    // Central node (representing the user)
    const centerNode = g.append('circle')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('r', 40)
      .attr('fill', '#4A90E2')
      .attr('filter', 'url(#glow)')
      .attr('opacity', 0.9);
    
    // Pulsing animation for center node
    function pulse() {
      centerNode.transition()
        .duration(2000)
        .attr('r', 45)
        .attr('opacity', 0.7)
        .transition()
        .duration(2000)
        .attr('r', 40)
        .attr('opacity', 0.9)
        .on('end', pulse);
    }
    pulse();
    
    // Add "YOU" label
    g.append('text')
      .attr('x', centerX)
      .attr('y', centerY)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('fill', 'white')
      .attr('font-size', '16px')
      .attr('font-weight', 'bold')
      .attr('pointer-events', 'none')
      .text('YOU');
    
    // Create orbits and data points
    const orbitRadius = 150;
    
    // Draw orbit paths (subtle)
    const orbitPath = g.append('circle')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('r', orbitRadius)
      .attr('fill', 'none')
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 1)
      .attr('stroke-dasharray', '5,5')
      .attr('opacity', 0.1);
    
    // Create pie chart segments in the background to show volume proportions
    const pie = d3.pie()
      .value(d => d.volume)
      .sort(null);
    
    const arc = d3.arc()
      .innerRadius(60)
      .outerRadius(120);
    
    const pieData = pie(dataPoints);
    
    // Add pie segments
    g.selectAll('.pie-segment')
      .data(pieData)
      .enter()
      .append('path')
      .attr('class', 'pie-segment')
      .attr('d', arc)
      .attr('transform', `translate(${centerX},${centerY})`)
      .attr('fill', d => d.data.color)
      .attr('opacity', 0.15)
      .attr('stroke', d => d.data.color)
      .attr('stroke-width', 1);
    
    // Create data point groups
    const dataPointGroups = g.selectAll('.data-point')
      .data(dataPoints)
      .enter()
      .append('g')
      .attr('class', 'data-point')
      .style('cursor', 'pointer');
    
    // Scale for node sizes based on volume
    const sizeScale = d3.scaleSqrt()
      .domain([0, d3.max(dataPoints, d => d.volume)])
      .range([6, 16]);
    
    // Add circles for data points (sized by volume)
    dataPointGroups.append('circle')
      .attr('r', d => sizeScale(d.volume))
      .attr('fill', d => d.color)
      .attr('filter', 'url(#glow)')
      .attr('opacity', 0.9);
    
    // Add small connecting lines from center to data points
    const connections = g.selectAll('.connection')
      .data(dataPoints)
      .enter()
      .append('line')
      .attr('class', 'connection')
      .attr('x1', centerX)
      .attr('y1', centerY)
      .attr('stroke', d => d.color)
      .attr('stroke-width', 1)
      .attr('opacity', 0.2);
    
    // Animate orbiting
    function animate() {
      const duration = 20000; // 20 seconds for full rotation
      
      dataPointGroups.transition()
        .duration(duration)
        .ease(d3.easeLinear)
        .tween('orbit', function(d) {
          const node = d3.select(this);
          return function(t) {
            const angle = (d.angle + t * 360) * Math.PI / 180;
            const x = centerX + orbitRadius * Math.cos(angle);
            const y = centerY + orbitRadius * Math.sin(angle);
            node.attr('transform', `translate(${x},${y})`);
            
            // Update connection lines
            connections.filter(cd => cd.type === d.type)
              .attr('x2', x)
              .attr('y2', y);
          };
        })
        .on('end', function(d) {
          // Update starting angle for continuous rotation
          d.angle = (d.angle + 360) % 360;
          animate();
        });
    }
    
    // Start animation
    animate();
    
    // Add particles emanating from center
    function emitParticle() {
      const angle = Math.random() * Math.PI * 2;
      const particle = g.append('circle')
        .attr('cx', centerX)
        .attr('cy', centerY)
        .attr('r', 2)
        .attr('fill', '#4A90E2')
        .attr('opacity', 0.6);
      
      particle.transition()
        .duration(2000)
        .ease(d3.easeQuadOut)
        .attr('cx', centerX + Math.cos(angle) * 80)
        .attr('cy', centerY + Math.sin(angle) * 80)
        .attr('opacity', 0)
        .remove();
    }
    
    // Emit particles periodically
    const particleInterval = setInterval(emitParticle, 500);
    
    // Hover interactions
    dataPointGroups
      .on('mouseenter', function(event, d) {
        const currentRadius = sizeScale(d.volume);
        d3.select(this).select('circle')
          .transition()
          .duration(200)
          .attr('r', currentRadius + 4)
          .attr('opacity', 1);
        
        setHoveredData(d);
        setSelectedData(d);
      })
      .on('mouseleave', function(event, d) {
        const currentRadius = sizeScale(d.volume);
        d3.select(this).select('circle')
          .transition()
          .duration(200)
          .attr('r', currentRadius)
          .attr('opacity', 0.9);
        
        setHoveredData(null);
      });
    
    // Cleanup
    return () => {
      clearInterval(particleInterval);
    };
  }, []);
  
  // Prepare chart data
  const chartData = [
    { type: 'Location', volume: 8760, color: '#4A90E2', label: '24 points/day' },
    { type: 'Health', volume: 525600, color: '#E74C3C', label: '1,440 readings/day' },
    { type: 'Social', volume: 2190, color: '#9B59B6', label: '6 posts/day' },
    { type: 'Shopping', volume: 730, color: '#F39C12', label: '2 purchases/day' },
    { type: 'Search', volume: 4380, color: '#1ABC9C', label: '12 queries/day' },
    { type: 'Finance', volume: 1460, color: '#27AE60', label: '4 transactions/day' }
  ];
  
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      background: '#0a0a14', 
      padding: '2rem' 
    }}>
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}>
          This is Your Data
        </h2>
        <p style={{ color: '#9ca3af', maxWidth: '28rem' }}>
          Every moment, you generate data across multiple dimensions. 
          Node size and segment width represent the volume of data generated.
        </p>
      </div>
      
      <div style={{ 
        display: 'flex', 
        flexDirection: window.innerWidth < 1024 ? 'column' : 'row', 
        gap: '2rem', 
        alignItems: 'flex-start', 
        maxWidth: '80rem' 
      }}>
        {/* Network Visualization */}
        <div style={{ position: 'relative' }}>
          <svg
            ref={svgRef}
            width={600}
            height={600}
            style={{ filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5))' }}
          />
          
          {hoveredData && (
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(0,0,0,0.8)',
              backdropFilter: 'blur(8px)',
              color: 'white',
              padding: '0.75rem 1rem',
              borderRadius: '0.5rem',
              border: '1px solid #374151'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>{hoveredData.symbol}</span>
                <div>
                  <div style={{ fontWeight: 'bold' }}>{hoveredData.type} Data</div>
                  <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                    {hoveredData.volume.toLocaleString()} {hoveredData.unit}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Chart */}
        <div style={{
          width: window.innerWidth < 1024 ? '100%' : '500px',
          background: 'rgba(17,24,39,0.5)',
          border: '1px solid #1f2937',
          backdropFilter: 'blur(8px)',
          borderRadius: '0.5rem',
          padding: '1.5rem'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
              Annual Data Generation
            </h3>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
              Average data points generated per year by category
            </p>
          </div>
          
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis 
                dataKey="type" 
                stroke="#888"
                tick={{ fill: '#888' }}
              />
              <YAxis 
                stroke="#888"
                tick={{ fill: '#888' }}
                tickFormatter={(value) => {
                  if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
                  return value;
                }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1a1a', 
                  border: '1px solid #333',
                  borderRadius: '8px',
                  color: '#fff'
                }}
                formatter={(value, name, props) => [
                  `${value.toLocaleString()} points/year (${props.payload.label})`,
                  props.payload.type
                ]}
              />
              <Bar dataKey="volume" radius={[8, 8, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          
          <div style={{ marginTop: '1.5rem' }}>
            <div style={{ fontSize: '0.875rem', color: '#9ca3af', fontWeight: '600', marginBottom: '0.5rem' }}>
              Key Insights:
            </div>
            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>
              <div>• Health data generates the most volume (heart rate, steps, sleep)</div>
              <div>• Location tracked every hour = 8,760 points annually</div>
              <div>• Even "low-volume" categories accumulate hundreds of data points</div>
              <div style={{ color: '#60a5fa', paddingTop: '0.5rem' }}>
                → Total: <strong>543,120</strong> data points per year
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ 
        marginTop: '2rem', 
        textAlign: 'center', 
        color: '#6b7280', 
        fontSize: '0.875rem', 
        maxWidth: '42rem' 
      }}>
        <p>The spinning visualization shows data volume proportionally:</p>
        <p style={{ marginTop: '0.25rem' }}>• Larger orbiting nodes = more data generated</p>
        <p>• Wider pie segments = higher volume category</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>Hover over nodes to see exact volumes</p>
      </div>
    </div>
  );
};

export default DataVisualizationStage1;
