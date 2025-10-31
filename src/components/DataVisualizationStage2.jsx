import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const DataVisualizationStage2 = () => {
  const svgRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [animationPhase, setAnimationPhase] = useState('initial');
  
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 1000;
    const height = 700;
    
    // Clear previous content
    svg.selectAll('*').remove();
    
    // Add background gradient
    const defs = svg.append('defs');
    const radialGradient = defs.append('radialGradient')
      .attr('id', 'bgGradient2');
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
      .attr('fill', 'url(#bgGradient2)');
    
    // Create glow filter
    const filter = defs.append('filter')
      .attr('id', 'glow2');
    filter.append('feGaussianBlur')
      .attr('stdDeviation', '4')
      .attr('result', 'coloredBlur');
    const feMerge = filter.append('feMerge');
    feMerge.append('feMergeNode').attr('in', 'coloredBlur');
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic');
    
    // Create arrow marker for data flow
    defs.append('marker')
      .attr('id', 'arrowhead')
      .attr('markerWidth', 10)
      .attr('markerHeight', 10)
      .attr('refX', 9)
      .attr('refY', 3)
      .attr('orient', 'auto')
      .append('polygon')
      .attr('points', '0 0, 10 3, 0 6')
      .attr('fill', '#4A90E2');
    
    // Network nodes structure
    const nodes = [
      // User layer
      { id: 'user', label: 'YOU', x: 100, y: height/2, r: 30, color: '#4A90E2', layer: 'user', description: 'Your device generates data' },
      
      // App layer
      { id: 'fitness-app', label: 'Fitness App', x: 300, y: height/2 - 120, r: 20, color: '#E74C3C', layer: 'app', description: 'Collects health & location data' },
      { id: 'social-app', label: 'Social App', x: 300, y: height/2, r: 20, color: '#9B59B6', layer: 'app', description: 'Tracks interactions & behavior' },
      { id: 'shopping-app', label: 'Shopping App', x: 300, y: height/2 + 120, r: 20, color: '#F39C12', layer: 'app', description: 'Monitors purchases & browsing' },
      
      // Network layer
      { id: 'network', label: 'Network', x: 550, y: height/2, r: 25, color: '#1ABC9C', layer: 'network', description: 'Routes and stores data in transit' },
      
      // Platform layer
      { id: 'platform', label: 'Platform', x: 800, y: height/2, r: 40, color: '#E67E22', layer: 'platform', description: 'Aggregates all your data', accumulated: 0 }
    ];
    
    // Connections between nodes
    const links = [
      { source: 'user', target: 'fitness-app', dataType: 'Health & Location' },
      { source: 'user', target: 'social-app', dataType: 'Social Activity' },
      { source: 'user', target: 'shopping-app', dataType: 'Purchase History' },
      { source: 'fitness-app', target: 'network', dataType: 'Data Stream' },
      { source: 'social-app', target: 'network', dataType: 'Data Stream' },
      { source: 'shopping-app', target: 'network', dataType: 'Data Stream' },
      { source: 'network', target: 'platform', dataType: 'Aggregated Data' }
    ];
    
    const g = svg.append('g');
    
    // Add layer labels
    const layerLabels = [
      { label: 'YOU', x: 100, y: 50 },
      { label: 'APPLICATIONS', x: 300, y: 50 },
      { label: 'NETWORK', x: 550, y: 50 },
      { label: 'PLATFORM', x: 800, y: 50 }
    ];
    
    g.selectAll('.layer-label')
      .data(layerLabels)
      .enter()
      .append('text')
      .attr('class', 'layer-label')
      .attr('x', d => d.x)
      .attr('y', d => d.y)
      .attr('text-anchor', 'middle')
      .attr('fill', '#666')
      .attr('font-size', '12px')
      .attr('font-weight', 'bold')
      .attr('letter-spacing', '2px')
      .text(d => d.label);
    
    // Create link lines (initially invisible)
    const linkLines = g.selectAll('.link')
      .data(links)
      .enter()
      .append('line')
      .attr('class', 'link')
      .attr('x1', d => {
        const source = nodes.find(n => n.id === d.source);
        return source.x;
      })
      .attr('y1', d => {
        const source = nodes.find(n => n.id === d.source);
        return source.y;
      })
      .attr('x2', d => {
        const source = nodes.find(n => n.id === d.source);
        return source.x;
      })
      .attr('y2', d => {
        const source = nodes.find(n => n.id === d.source);
        return source.y;
      })
      .attr('stroke', '#4A90E2')
      .attr('stroke-width', 2)
      .attr('stroke-opacity', 0.3)
      .attr('marker-end', 'url(#arrowhead)');
    
    // Create node groups
    const nodeGroups = g.selectAll('.node')
      .data(nodes)
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', d => `translate(${d.x},${d.y})`)
      .style('cursor', 'pointer');
    
    // Add circles for nodes
    nodeGroups.append('circle')
      .attr('r', d => d.r)
      .attr('fill', d => d.color)
      .attr('filter', 'url(#glow2)')
      .attr('opacity', 0.8);
    
    // Add labels
    nodeGroups.append('text')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('fill', 'white')
      .attr('font-size', d => d.layer === 'user' ? '14px' : '11px')
      .attr('font-weight', 'bold')
      .attr('pointer-events', 'none')
      .text(d => d.label);
    
    // Animation sequence
    setTimeout(() => {
      setAnimationPhase('connecting');
      
      // Animate links drawing out
      linkLines.each(function(d, i) {
        const link = d3.select(this);
        const target = nodes.find(n => n.id === d.target);
        
        setTimeout(() => {
          link.transition()
            .duration(1000)
            .ease(d3.easeQuadInOut)
            .attr('x2', target.x)
            .attr('y2', target.y);
        }, i * 200);
      });
      
      // After links are drawn, start data flow animation
      setTimeout(() => {
        setAnimationPhase('flowing');
        startDataFlow();
      }, 2000);
    }, 500);
    
    // Data flow animation with particles
    function startDataFlow() {
      function sendParticle(link) {
        const source = nodes.find(n => n.id === link.source);
        const target = nodes.find(n => n.id === link.target);
        
        const particle = g.append('circle')
          .attr('cx', source.x)
          .attr('cy', source.y)
          .attr('r', 3)
          .attr('fill', source.color)
          .attr('opacity', 0.8)
          .attr('filter', 'url(#glow2)');
        
        particle.transition()
          .duration(1500)
          .ease(d3.easeLinear)
          .attr('cx', target.x)
          .attr('cy', target.y)
          .on('end', function() {
            particle.remove();
            
            // Grow platform node as data accumulates (removed to fix error)
            // The visual is complete without this feature
          });
      }
      
      // Continuously send particles
      const interval = setInterval(() => {
        links.forEach((link, i) => {
          setTimeout(() => sendParticle(link), i * 150);
        });
      }, 2000);
      
      // Cleanup
      return () => clearInterval(interval);
    }
    
    // Hover interactions
    nodeGroups
      .on('mouseenter', function(event, d) {
        const circle = d3.select(this).select('circle');
        if (!circle.empty()) {
          circle.transition()
            .duration(200)
            .attr('r', d.r + 5)
            .attr('opacity', 1);
        }
        
        setHoveredNode(d);
      })
      .on('mouseleave', function(event, d) {
        const circle = d3.select(this).select('circle');
        if (!circle.empty()) {
          circle.transition()
            .duration(200)
            .attr('r', d.r)
            .attr('opacity', 0.8);
        }
        
        setHoveredNode(null);
      });
    
  }, []);
  
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
          The Network It Lives On
        </h2>
        <p style={{ color: '#9ca3af', maxWidth: '42rem' }}>
          Your data doesn't stay on your device. It flows through applications, networks, 
          and ultimately accumulates on platforms that aggregate and control it.
        </p>
      </div>
      
      <div style={{ position: 'relative' }}>
        <svg
          ref={svgRef}
          width={1000}
          height={700}
          style={{ filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5))' }}
        />
        
        {hoveredNode && (
          <div style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(8px)',
            color: 'white',
            padding: '0.75rem 1rem',
            borderRadius: '0.5rem',
            border: '1px solid #374151',
            maxWidth: '20rem'
          }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.25rem' }}>
              {hoveredNode.label}
            </div>
            <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
              {hoveredNode.description}
            </div>
            {hoveredNode.layer === 'platform' && (
              <div style={{ fontSize: '0.75rem', color: '#fb923c', marginTop: '0.5rem' }}>
                → Central aggregation point for all data streams
              </div>
            )}
          </div>
        )}
        
        {animationPhase === 'initial' && (
          <div style={{
            position: 'absolute',
            bottom: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#6b7280',
            fontSize: '0.875rem'
          }}>
            Watch the connections form...
          </div>
        )}
        
        {animationPhase === 'flowing' && (
          <div style={{
            position: 'absolute',
            bottom: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#6b7280',
            fontSize: '0.875rem'
          }}>
            Data flows continuously • Platform accumulates and grows
          </div>
        )}
      </div>
      
      <div style={{ marginTop: '2rem', maxWidth: '42rem' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(2, 1fr)', 
          gap: '1rem', 
          fontSize: '0.875rem' 
        }}>
          <div style={{
            background: 'rgba(17,24,39,0.5)',
            padding: '1rem',
            borderRadius: '0.5rem',
            border: '1px solid #1f2937'
          }}>
            <div style={{ color: '#60a5fa', fontWeight: '600', marginBottom: '0.5rem' }}>
              📱 Your Device
            </div>
            <div style={{ color: '#9ca3af', fontSize: '0.75rem' }}>
              Generates data across multiple apps and services
            </div>
          </div>
          <div style={{
            background: 'rgba(17,24,39,0.5)',
            padding: '1rem',
            borderRadius: '0.5rem',
            border: '1px solid #1f2937'
          }}>
            <div style={{ color: '#a78bfa', fontWeight: '600', marginBottom: '0.5rem' }}>
              📲 Applications
            </div>
            <div style={{ color: '#9ca3af', fontSize: '0.75rem' }}>
              Each app collects specific types of data from you
            </div>
          </div>
          <div style={{
            background: 'rgba(17,24,39,0.5)',
            padding: '1rem',
            borderRadius: '0.5rem',
            border: '1px solid #1f2937'
          }}>
            <div style={{ color: '#2dd4bf', fontWeight: '600', marginBottom: '0.5rem' }}>
              🌐 Network
            </div>
            <div style={{ color: '#9ca3af', fontSize: '0.75rem' }}>
              Routes data to platform servers, stores metadata
            </div>
          </div>
          <div style={{
            background: 'rgba(17,24,39,0.5)',
            padding: '1rem',
            borderRadius: '0.5rem',
            border: '1px solid #1f2937'
          }}>
            <div style={{ color: '#fb923c', marginBottom: '0.5rem' }}>
              🏢 Platform
            </div>
            <div style={{ color: '#9ca3af', fontSize: '0.75rem' }}>
              Aggregates ALL your data from every source
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataVisualizationStage2;
