# 🌐 VERCEL URL REFERENCE

## Your Deployment URLs

After deploying to Vercel, you'll have these URLs available:

Replace `YOUR-URL.vercel.app` with your actual Vercel URL.

---

## 📍 AVAILABLE ROUTES

### 1. Home Page
```
https://YOUR-URL.vercel.app/
```
**Purpose:** Navigation hub with links to both visualizations  
**Contains:** Two cards linking to Stage 1 and Stage 2  
**Use for:** Landing page, sharing main link

---

### 2. Stage 1 - Annual Data Footprint
```
https://YOUR-URL.vercel.app/stage1
```
**Purpose:** Full-page interactive data footprint visualization  
**Contains:** Spinning network (left) + bar chart (right)  
**Use for:** Standalone detailed view, presentations

---

### 3. Stage 2 - Data Flow Network
```
https://YOUR-URL.vercel.app/stage2
```
**Purpose:** Full-page network flow animation  
**Contains:** Animated data flow through devices → apps → platform  
**Use for:** Demonstrating data pipeline, education

---

### 4. Embeddable Chart (IMPORTANT!)
```
https://YOUR-URL.vercel.app/embed/chart
```
**Purpose:** Lightweight chart for embedding in Slide 1  
**Contains:** Just the bar chart, transparent background  
**Use for:** **Embedding in primer-1.php Slide 1**

---

## 📊 EMBEDDING INSTRUCTIONS

### For Slide 1 of Primer Module

**File:** `/modules/primer-1.php` (Line ~18)

```html
<iframe 
  src="https://YOUR-URL.vercel.app/embed/chart" 
  width="100%" 
  height="400"
  frameborder="0"
  style="border: none; background: transparent;"
  title="Annual Data Chart">
</iframe>
```

### For Modal/Popup (Optional)

**File:** `/assets/js/modules/primer-1.js` (Lines ~386 & ~428)

```javascript
const baseUrl = 'https://YOUR-URL.vercel.app';
```

---

## 🔗 URL PATTERNS

### Development (Local)
```
http://localhost:3000/
http://localhost:3000/stage1
http://localhost:3000/stage2
http://localhost:3000/embed/chart
```

### Production (Vercel)
```
https://digitaldignity-visualizations.vercel.app/
https://digitaldignity-visualizations.vercel.app/stage1
https://digitaldignity-visualizations.vercel.app/stage2
https://digitaldignity-visualizations.vercel.app/embed/chart
```

### Custom Domain (Future)
```
https://viz.digitaldignity.org/
https://viz.digitaldignity.org/stage1
https://viz.digitaldignity.org/stage2
https://viz.digitaldignity.org/embed/chart
```

---

## 🎯 TESTING CHECKLIST

After deployment, test each URL:

- [ ] **Home (/)** - Cards load, links work
- [ ] **Stage 1** - Network spins, chart renders, hover effects work
- [ ] **Stage 2** - Network flows, animations smooth
- [ ] **Embed** - Chart loads, transparent background, responsive

---

## 📱 SHARING

### For Social Media
Use the home page:
```
https://YOUR-URL.vercel.app/
```

### For Presentations
Use specific stages:
```
Stage 1: https://YOUR-URL.vercel.app/stage1
Stage 2: https://YOUR-URL.vercel.app/stage2
```

### For Embedding in Websites
Use the embed route:
```
https://YOUR-URL.vercel.app/embed/chart
```

---

## 🔄 URL UPDATES

If you change your Vercel deployment URL, update these files:

1. `/modules/primer-1.php` (iframe src)
2. `/assets/js/modules/primer-1.js` (baseUrl in 2 places)

**Easy way:**
```bash
./UPDATE_URLS.sh new-url.vercel.app
```

---

## 📝 NOTES

- All routes work immediately after deployment
- No additional configuration needed
- URLs are permanent (won't change unless you redeploy)
- Custom domains can be added in Vercel dashboard
- SSL/HTTPS is automatic with Vercel

---

**Current Status:** Not yet deployed  
**Next Step:** Run `./DEPLOY_NOW.sh` then deploy on Vercel
