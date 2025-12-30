# 🔗 EMBEDDING CHEAT SHEET

Quick copy-paste code snippets for embedding your visualizations.

**Your Vercel URL:** `https://YOUR-PROJECT.vercel.app`
(Replace with actual URL after deployment)

---

## 📍 Method 1: Simple Link

```html
<a href="https://YOUR-PROJECT.vercel.app/stage1" 
   target="_blank" 
   class="viz-link">
  Explore Interactive Data Visualization →
</a>
```

**CSS for link:**
```css
.viz-link {
  display: inline-block;
  padding: 12px 24px;
  background: #f15a29;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.3s;
}

.viz-link:hover {
  background: #d14821;
  transform: translateY(-2px);
}
```

---

## 🖼️ Method 2: Iframe Embed (Recommended)

### Full Width
```html
<div class="viz-container">
  <iframe 
    src="https://YOUR-PROJECT.vercel.app/stage1" 
    width="100%" 
    height="800px"
    frameborder="0"
    loading="lazy"
    title="Annual Data Footprint">
  </iframe>
</div>
```

### Responsive Container
```html
<div class="viz-responsive">
  <iframe 
    src="https://YOUR-PROJECT.vercel.app/stage1"
    frameborder="0"
    loading="lazy"
    title="Annual Data Footprint">
  </iframe>
</div>

<style>
.viz-responsive {
  position: relative;
  width: 100%;
  padding-bottom: 75%; /* 4:3 Aspect Ratio */
  overflow: hidden;
}

.viz-responsive iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
```

---

## 🎭 Method 3: Modal Popup

```html
<!-- Trigger Button -->
<button onclick="openVizModal('stage1')" class="open-viz-btn">
  📊 View Data Visualization
</button>

<!-- Modal Script -->
<script>
function openVizModal(stage) {
  // Create modal overlay
  const modal = document.createElement('div');
  modal.className = 'viz-modal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.95);
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  `;
  
  // Create modal content
  modal.innerHTML = `
    <div style="position: relative; width: 100%; height: 100%; max-width: 1400px; max-height: 900px;">
      <button onclick="this.parentElement.parentElement.remove()" 
              style="position: absolute; top: 10px; right: 10px; 
                     background: #f15a29; color: white; border: none; 
                     padding: 10px 20px; cursor: pointer; border-radius: 6px; 
                     font-weight: 600; z-index: 100000; font-size: 14px;">
        ✕ Close
      </button>
      <iframe src="https://YOUR-PROJECT.vercel.app/${stage}" 
              style="width: 100%; height: 100%; border: none; border-radius: 8px;">
      </iframe>
    </div>
  `;
  
  // Add to page
  document.body.appendChild(modal);
  
  // Close on overlay click
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.remove();
    }
  });
}
</script>

<style>
.open-viz-btn {
  padding: 12px 24px;
  background: #f15a29;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
}

.open-viz-btn:hover {
  background: #d14821;
  transform: translateY(-2px);
}
</style>
```

---

## 🎯 Method 4: Inline Preview + Full View

```html
<!-- Teaser/Preview -->
<div class="viz-preview">
  <h3>Your Annual Data Footprint</h3>
  <p>Every year, you generate 543,120 data points across health, location, social media, and more.</p>
  
  <!-- Static image preview -->
  <img src="path/to/preview-screenshot.jpg" 
       alt="Data visualization preview"
       style="width: 100%; border-radius: 8px; margin: 20px 0;">
  
  <!-- Link to full interactive -->
  <a href="https://YOUR-PROJECT.vercel.app/stage1" 
     target="_blank" 
     class="view-full-btn">
    View Interactive Visualization →
  </a>
</div>
```

---

## 📱 Method 5: PHP Include (For Your Primer Module)

In your PHP file:
```php
<?php
// Define the Vercel base URL
$vercel_base = 'https://YOUR-PROJECT.vercel.app';

// Determine which visualization to show
$viz_stage = isset($_GET['viz']) ? $_GET['viz'] : 'stage1';
?>

<!-- Embed based on parameter -->
<div class="primer-1__viz-embed">
  <iframe 
    src="<?php echo $vercel_base . '/' . $viz_stage; ?>" 
    width="100%" 
    height="700px"
    frameborder="0"
    loading="lazy">
  </iframe>
</div>

<!-- Navigation between vizzes -->
<div class="viz-nav">
  <a href="?viz=stage1">Stage 1: Data Footprint</a>
  <a href="?viz=stage2">Stage 2: Data Flow</a>
</div>
```

---

## 🎨 Method 6: Card Grid with Multiple Vizzes

```html
<div class="viz-grid">
  
  <div class="viz-card">
    <h4>📊 Annual Data Footprint</h4>
    <p>543,120 data points per year</p>
    <a href="https://YOUR-PROJECT.vercel.app/stage1" target="_blank">
      Explore →
    </a>
  </div>
  
  <div class="viz-card">
    <h4>🌐 Data Flow Network</h4>
    <p>From device to platform</p>
    <a href="https://YOUR-PROJECT.vercel.app/stage2" target="_blank">
      Explore →
    </a>
  </div>
  
</div>

<style>
.viz-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin: 40px 0;
}

.viz-card {
  background: rgba(17, 24, 39, 0.5);
  border: 1px solid #1f2937;
  border-radius: 8px;
  padding: 24px;
  transition: all 0.3s;
}

.viz-card:hover {
  transform: translateY(-4px);
  border-color: #f15a29;
}

.viz-card h4 {
  color: #f15a29;
  margin-bottom: 8px;
}

.viz-card p {
  color: #9ca3af;
  margin-bottom: 16px;
  font-size: 14px;
}

.viz-card a {
  display: inline-block;
  color: #f15a29;
  text-decoration: none;
  font-weight: 600;
}
</style>
```

---

## 🔧 Pro Tips

### Responsive Iframe Height
```javascript
// Adjust iframe height based on content
<script>
window.addEventListener('message', function(e) {
  if (e.data.height) {
    document.getElementById('viz-iframe').style.height = e.data.height + 'px';
  }
});
</script>
```

### Loading Spinner
```html
<div class="viz-loader" id="vizLoader">
  <div class="spinner"></div>
  Loading visualization...
</div>

<iframe 
  src="https://YOUR-PROJECT.vercel.app/stage1"
  onload="document.getElementById('vizLoader').style.display='none'">
</iframe>

<style>
.viz-loader {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  color: #9ca3af;
}

.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid #374151;
  border-top-color: #f15a29;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 12px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
```

---

## 📋 Quick Reference

| Method | Best For | Mobile-Friendly | Load Time |
|--------|----------|-----------------|-----------|
| Link | Simple integration | ✅ Yes | Instant |
| Iframe | Full embedding | ✅ Yes | Fast |
| Modal | On-demand viewing | ✅ Yes | On-click |
| PHP Include | Dynamic content | ✅ Yes | Fast |

---

## 🎯 URLs Available

After deployment, you'll have these URLs:

```
https://YOUR-PROJECT.vercel.app/          → Home page
https://YOUR-PROJECT.vercel.app/stage1    → Annual Data Footprint
https://YOUR-PROJECT.vercel.app/stage2    → Data Flow Network
```

Each URL can be embedded separately!

---

**Need custom styling or integration?** The iframe method gives you full control over the container while keeping the visualization intact.
