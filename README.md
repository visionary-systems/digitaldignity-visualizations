# Digital Dignity Visualizations

Interactive data visualizations for the Digital Dignity movement, demonstrating the scale and flow of personal data.

## 🎯 Live Visualizations

- **Annual Data Footprint**: Visual breakdown of 543,120 data points generated per year
- **Data Flow Network**: Interactive network showing data journey from device to platform

## 🚀 Quick Start - Local Development

1. **Install Dependencies**
   ```bash
   cd digitaldignity-visualizations
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm start
   ```
   Opens at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📦 Deploy to Vercel (Free)

### Method 1: GitHub + Vercel (Recommended)

1. **Create GitHub Repository**
   ```bash
   cd digitaldignity-visualizations
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/visionary-systems/digitaldignity-visualizations.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects React settings
   - Click "Deploy"
   - Done! Get URL like: `digitaldignity-visualizations.vercel.app`

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login and Deploy**
   ```bash
   cd digitaldignity-visualizations
   vercel login
   vercel
   ```

## 🔗 Embedding in Your Main Site

### Option A: Iframe Embed
```html
<!-- On your Hostinger site -->
<iframe 
  src="https://your-project.vercel.app/stage1" 
  width="100%" 
  height="800px"
  frameborder="0"
  loading="lazy"
  title="Annual Data Footprint">
</iframe>
```

### Option B: Link to Full Page
```html
<a href="https://your-project.vercel.app/stage1" target="_blank" class="viz-link">
  View Interactive Visualization →
</a>
```

### Option C: Modal/Overlay
```html
<button onclick="openVizModal('stage1')">Explore Data Footprint</button>

<script>
function openVizModal(stage) {
  const modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.9);z-index:9999;display:flex;align-items:center;justify-content:center;';
  modal.innerHTML = `
    <div style="position:relative;width:95%;height:95%;max-width:1400px;">
      <button onclick="this.parentElement.parentElement.remove()" style="position:absolute;top:1rem;right:1rem;background:#f15a29;color:white;border:none;padding:0.5rem 1rem;cursor:pointer;border-radius:0.5rem;z-index:10000;">Close</button>
      <iframe src="https://your-project.vercel.app/${stage}" style="width:100%;height:100%;border:none;border-radius:0.5rem;"></iframe>
    </div>
  `;
  document.body.appendChild(modal);
}
</script>
```

## 🎨 Available Routes

- `/` - Home page with visualization index
- `/stage1` - Annual Data Footprint (543K data points)
- `/stage2` - Data Flow Network (device → platform)

## 📁 Project Structure

```
digitaldignity-visualizations/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── DataVisualizationStage1.jsx
│   │   ├── DataVisualizationStage2.jsx
│   │   └── Navigation.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.jsx
├── package.json
├── vercel.json
└── README.md
```

## 🛠 Tech Stack

- **React 18** - UI framework
- **React Router 6** - Client-side routing
- **D3.js** - Data visualization
- **Recharts** - Chart library
- **Vercel** - Hosting & deployment

## 🔄 Adding New Visualizations

1. **Create Component**
   ```bash
   # Create new file: src/components/DataVisualizationStage3.jsx
   ```

2. **Add Route**
   ```javascript
   // In src/App.jsx
   import DataVisualizationStage3 from './components/DataVisualizationStage3';
   
   // Add to Routes
   <Route path="/stage3" element={<DataVisualizationStage3 />} />
   ```

3. **Update Navigation**
   ```javascript
   // In src/components/Navigation.jsx
   <Link to="/stage3">New Visualization</Link>
   ```

4. **Deploy**
   ```bash
   git add .
   git commit -m "Add stage 3 visualization"
   git push
   # Vercel auto-deploys!
   ```

## 🌐 Custom Domain (Optional)

1. Go to Vercel project settings
2. Click "Domains"
3. Add custom domain (e.g., `viz.digitaldignity.org`)
4. Update DNS records as instructed
5. SSL certificate auto-generated

## 📊 Vercel Free Tier Limits

- ✅ Unlimited personal projects
- ✅ 100GB bandwidth per month
- ✅ Automatic HTTPS
- ✅ Automatic CI/CD from GitHub
- ✅ Instant deployments
- ✅ Preview deployments for PRs

Perfect for this use case!

## 🆘 Troubleshooting

**Issue**: Blank page after deployment
- **Fix**: Check vercel.json is present for proper routing

**Issue**: 404 on routes
- **Fix**: Ensure vercel.json has rewrites configuration

**Issue**: Charts not rendering
- **Fix**: Check browser console for errors, ensure d3/recharts installed

## 📝 License

Part of the Digital Dignity movement - advocating for personal data as user-owned intellectual property.

## 🤝 Contributing

To add new visualizations or improve existing ones:
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

## 📧 Contact

GitHub: [@visionary-systems](https://github.com/visionary-systems)

---

**Built with ❤️ for the Digital Dignity movement**
