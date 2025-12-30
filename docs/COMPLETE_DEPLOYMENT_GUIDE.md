# 🚀 COMPLETE DEPLOYMENT GUIDE

## What I Fixed

### ✅ Fixed Issues:
1. **Stage1 Component** - Removed shadcn/ui Card components (not in your dependencies)
2. **Used inline styles** instead of Tailwind classes for better compatibility
3. **Fixed emoji encoding** - Proper UTF-8 emojis
4. **Created embeddable chart** with transparent background for Slide 1

---

## 🎯 DEPLOYMENT STEPS (Choose Method A or B)

### Method A: Using the Deploy Script (EASIEST)

```bash
# 1. Open Terminal
# 2. Make script executable
chmod +x /Users/terramater/Desktop/digitaldignity-visualizations/deploy.sh

# 3. Run the script
/Users/terramater/Desktop/digitaldignity-visualizations/deploy.sh
```

The script will:
- ✅ Check for changes
- ✅ Commit everything
- ✅ Push to GitHub
- ✅ Trigger Vercel auto-deploy

---

### Method B: Manual Deployment

```bash
# 1. Navigate to project
cd /Users/terramater/Desktop/digitaldignity-visualizations

# 2. Check status
git status

# 3. Stage all changes
git add .

# 4. Commit
git commit -m "Fix: Updated Stage1 component and added embeddable chart"

# 5. Push to GitHub (triggers Vercel auto-deploy)
git push origin main
```

---

## 🌐 GET YOUR VERCEL URL

### Option 1: Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Find your `digitaldignity-visualizations` project
3. Click on it
4. Copy the URL (e.g., `https://digitaldignity-visualizations.vercel.app`)

### Option 2: Vercel CLI
```bash
cd /Users/terramater/Desktop/digitaldignity-visualizations
vercel --prod
```

Your URL will be displayed at the end.

---

## 📝 UPDATE THE PRIMER MODULE

Once you have your Vercel URL, update **TWO FILES**:

### File 1: `/modules/primer-1.php` (Line ~18)

**FIND THIS:**
```html
<iframe 
  src="https://your-vercel-url.vercel.app/embed/chart"
```

**REPLACE WITH YOUR ACTUAL URL:**
```html
<iframe 
  src="https://digitaldignity-visualizations.vercel.app/embed/chart"
```

### File 2: `/assets/js/modules/primer-1.js` (Line ~386 and ~428)

**FIND THIS:**
```javascript
const baseUrl = 'https://your-project.vercel.app'; // TODO: Update this!
```

**REPLACE WITH YOUR ACTUAL URL:**
```javascript
const baseUrl = 'https://digitaldignity-visualizations.vercel.app';
```

---

## 🧪 TESTING YOUR DEPLOYMENT

### Test 1: Embeddable Chart
Visit: `https://YOUR-VERCEL-URL.vercel.app/embed/chart`

**Should see:**
- ✅ Bar chart with 6 categories
- ✅ Transparent background
- ✅ Responsive design
- ✅ Interactive tooltips

### Test 2: Stage1 (Full Page)
Visit: `https://YOUR-VERCEL-URL.vercel.app/stage1`

**Should see:**
- ✅ Spinning network visualization (left)
- ✅ Bar chart (right)
- ✅ All animations working
- ✅ Hover effects functional

### Test 3: Stage2 (Data Flow)
Visit: `https://YOUR-VERCEL-URL.vercel.app/stage2`

**Should see:**
- ✅ Network flow animation
- ✅ Data flowing through nodes

### Test 4: Home Page
Visit: `https://YOUR-VERCEL-URL.vercel.app/`

**Should see:**
- ✅ Two cards linking to Stage1 and Stage2
- ✅ About section

---

## 🔗 AVAILABLE ROUTES

After deployment, these URLs will work:

| Route | Purpose | Use For |
|-------|---------|---------|
| `/` | Home page | Navigation/index |
| `/stage1` | Full data footprint viz | Standalone view |
| `/stage2` | Data flow network | Standalone view |
| `/embed/chart` | **Just the chart** | **Embed in Slide 1** |

---

## 📋 FINAL CHECKLIST

### Deployment:
- [ ] Ran deploy script OR manually pushed to GitHub
- [ ] Checked Vercel dashboard for successful build
- [ ] Got Vercel URL (write it here: __________________)
- [ ] All 4 routes work (/, /stage1, /stage2, /embed/chart)

### Integration:
- [ ] Updated `primer-1.php` with Vercel URL
- [ ] Updated `primer-1.js` with Vercel URL (2 places)
- [ ] Uploaded updated files to Hostinger
- [ ] Tested Slide 1 shows embedded chart
- [ ] All 5 slides show correct body text

### Functionality:
- [ ] Survey button visible (always)
- [ ] "See Your Data Economy" button appears after survey
- [ ] All slide visualizations animate correctly
- [ ] Pagination dots work
- [ ] Keyboard navigation works (arrow keys)

---

## 🐛 TROUBLESHOOTING

### Issue: "Module not found" error in Vercel build

**Solution:** Check `package.json` includes:
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "d3": "^7.8.5",
    "recharts": "^2.10.3"
  }
}
```

If missing, run:
```bash
cd /Users/terramater/Desktop/digitaldignity-visualizations
npm install
git add package.json package-lock.json
git commit -m "Update dependencies"
git push
```

---

### Issue: Embeddable chart shows white background

**Cause:** Browser doesn't support transparent iframes

**Solution:** The chart component already has `background: transparent`. If still showing white, add this to the iframe in `primer-1.php`:
```html
<iframe 
  src="..."
  allowtransparency="true"
  style="border: none; background: transparent;">
</iframe>
```

---

### Issue: Slide 1 shows "your-vercel-url.vercel.app" text

**Cause:** You haven't updated the URL in `primer-1.php` yet

**Solution:** Follow "UPDATE THE PRIMER MODULE" section above

---

### Issue: Vercel says "No framework detected"

**Solution:** Your project should have these files:
- ✅ `package.json` (tells Vercel it's a Node project)
- ✅ `public/index.html` (React entry point)
- ✅ `src/index.jsx` (React root)

Vercel auto-detects Create React App. Make sure these exist.

---

## 📞 QUICK REFERENCE

### Deploy Command:
```bash
cd /Users/terramater/Desktop/digitaldignity-visualizations && git add . && git commit -m "Update" && git push
```

### Check Deployment:
https://vercel.com/dashboard

### Test Embed:
```
https://YOUR-URL.vercel.app/embed/chart
```

### Update Primer:
1. Edit `/modules/primer-1.php` line 18
2. Edit `/assets/js/modules/primer-1.js` lines 386 & 428
3. Upload to Hostinger

---

## 🎉 SUCCESS CRITERIA

You'll know everything is working when:

1. ✅ Vercel shows "Deployment Ready" (green)
2. ✅ All 4 routes load without errors
3. ✅ Embedded chart appears in Slide 1 of primer
4. ✅ All slide body text shows correctly
5. ✅ Button logic works (survey → shows button)
6. ✅ Animations work in all slides
7. ✅ No console errors in browser

---

**Ready to deploy! Start with Method A (the script) for easiest deployment.** 🚀
