# 🚀 DEPLOYMENT MASTER PLAN

## Overview
This guide will deploy your React visualizations to Vercel and integrate them with your PHP website.

**Time Required:** 10-15 minutes  
**Prerequisites:** GitHub account, Vercel account (free)

---

## 📁 FILES CREATED FOR YOU

I've created these helper files in your project:

| File | Purpose |
|------|---------|
| `setup.sh` | Makes all scripts executable (run this first) |
| `DEPLOY_NOW.sh` | Deploys code to GitHub |
| `UPDATE_URLS.sh` | Updates PHP site with Vercel URL |
| `START_HERE.md` | Quick 5-step guide |
| `URL_REFERENCE.md` | All available URLs and routes |
| This file | Master instructions |

---

## 🎯 THE DEPLOYMENT PROCESS

### Phase 1: Setup (30 seconds)
```bash
cd /Users/terramater/Desktop/digitaldignity-visualizations
chmod +x setup.sh
./setup.sh
```

This makes all deployment scripts executable.

---

### Phase 2: Deploy to GitHub (1 minute)
```bash
./DEPLOY_NOW.sh
```

**What this does:**
- ✅ Checks for changes
- ✅ Commits all files
- ✅ Pushes to GitHub
- ✅ Prepares for Vercel deployment

**Expected Output:**
```
✅ SUCCESS! Code pushed to GitHub
📍 NEXT STEPS: Deploy to Vercel...
```

---

### Phase 3: Deploy to Vercel (5 minutes)

1. **Go to Vercel:**
   ```
   https://vercel.com/new
   ```

2. **Sign in** with GitHub (if not already)

3. **Import Repository:**
   - Search for: `digitaldignity-visualizations`
   - Find: `visionary-systems/digitaldignity-visualizations`
   - Click **"Import"**

4. **Configure (all auto-detected):**
   - Framework: Create React App ✅
   - Root Directory: `./` ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `build` ✅
   - Install Command: `npm install` ✅

5. **Click "Deploy"**

6. **Wait 2-3 minutes** for build

7. **Get Your URL:**
   - After build completes, copy the URL
   - Format: `digitaldignity-visualizations.vercel.app`
   - Or: `digitaldignity-visualizations-[hash].vercel.app`

---

### Phase 4: Test Vercel Deployment (2 minutes)

Visit these URLs (replace YOUR-URL with your actual URL):

```
https://YOUR-URL.vercel.app/
https://YOUR-URL.vercel.app/stage1
https://YOUR-URL.vercel.app/stage2
https://YOUR-URL.vercel.app/embed/chart  ← IMPORTANT for embedding
```

**Verify:**
- ✅ Home page loads with 2 cards
- ✅ Stage 1 shows network + bar chart
- ✅ Stage 2 shows data flow animation
- ✅ Embed route shows just the chart

---

### Phase 5: Update PHP Site (1 minute)

```bash
./UPDATE_URLS.sh YOUR-URL.vercel.app
```

**Example:**
```bash
./UPDATE_URLS.sh digitaldignity-visualizations.vercel.app
```

**What this does:**
- ✅ Updates `/modules/primer-1.php` with your Vercel URL
- ✅ Updates `/assets/js/modules/primer-1.js` with your Vercel URL
- ✅ Creates backups of original files
- ✅ Shows you which files were modified

**Expected Output:**
```
✅ ALL FILES UPDATED!
Files modified:
  ✓ /Users/terramater/Desktop/digitaldignity/modules/primer-1.php
  ✓ /Users/terramater/Desktop/digitaldignity/assets/js/modules/primer-1.js
```

---

### Phase 6: Upload to Hostinger (3 minutes)

Upload these **2 files** to your Hostinger website:

1. **`modules/primer-1.php`**
2. **`assets/js/modules/primer-1.js`**

**Methods:**
- **Option A:** Hostinger File Manager
  - Login to Hostinger
  - Go to File Manager
  - Navigate to `public_html` (or your site root)
  - Upload to `modules/` and `assets/js/modules/`

- **Option B:** FTP Client (FileZilla, Cyberduck)
  - Connect to your Hostinger FTP
  - Upload files to correct directories

---

### Phase 7: Test Integration (2 minutes)

1. **Visit your Digital Dignity website**
2. **Navigate to Primer section**
3. **Verify:**
   - ✅ Slide 1 shows embedded interactive chart
   - ✅ Slide 2 shows network visualization
   - ✅ Slide 3 shows monetization flow
   - ✅ Slide 4 shows abuse scenario
   - ✅ Slide 5 shows Digital Dignity solution
   - ✅ Survey button visible (right side)
   - ✅ Pagination dots work
   - ✅ Keyboard arrows work

---

## ✅ COMPLETION CHECKLIST

### Deployment
- [ ] Ran `setup.sh`
- [ ] Ran `DEPLOY_NOW.sh` successfully
- [ ] Imported project on Vercel
- [ ] Deployment completed (green checkmark)
- [ ] Copied Vercel URL

### Testing
- [ ] Tested home page (/)
- [ ] Tested stage1 route
- [ ] Tested stage2 route
- [ ] Tested embed/chart route ← **Critical for Slide 1**

### Integration
- [ ] Ran `UPDATE_URLS.sh` with Vercel URL
- [ ] Uploaded `primer-1.php` to Hostinger
- [ ] Uploaded `primer-1.js` to Hostinger
- [ ] Cleared browser cache
- [ ] Tested PHP site Primer section

### Verification
- [ ] Slide 1 shows embedded chart (not placeholder)
- [ ] All 5 slides display correctly
- [ ] Animations work smoothly
- [ ] No console errors in browser
- [ ] Mobile responsive

---

## 🔄 FUTURE UPDATES

When you make changes to visualizations:

```bash
cd /Users/terramater/Desktop/digitaldignity-visualizations
./DEPLOY_NOW.sh
```

Vercel will automatically detect the push and redeploy. No need to update PHP files again!

---

## 🆘 TROUBLESHOOTING

### "Permission denied" error
```bash
chmod +x setup.sh DEPLOY_NOW.sh UPDATE_URLS.sh
```

### Vercel build fails
- Check Vercel build logs
- Verify `package.json` has all dependencies
- Try `npm install` locally first

### Chart doesn't show in Slide 1
- Verify Vercel URL in `primer-1.php` line 18
- Check browser console for errors
- Test: `https://YOUR-URL.vercel.app/embed/chart` directly

### Upload to Hostinger fails
- Check file permissions
- Verify directory paths exist
- Try File Manager instead of FTP (or vice versa)

---

## 📞 QUICK COMMANDS

```bash
# Setup (run once)
cd /Users/terramater/Desktop/digitaldignity-visualizations
chmod +x setup.sh && ./setup.sh

# Deploy to GitHub
./DEPLOY_NOW.sh

# After getting Vercel URL, update PHP site
./UPDATE_URLS.sh digitaldignity-visualizations.vercel.app
```

---

## 🎉 SUCCESS!

When everything is working, you'll have:

✅ React visualizations live on Vercel  
✅ Embedded chart in Primer Slide 1  
✅ All 5 primer slides working perfectly  
✅ Fast, responsive, interactive experience  
✅ Easy updates via single command

**Your visualization URL:**
```
https://YOUR-URL.vercel.app
```

**Share it with the world!** 🌍

---

## 📚 ADDITIONAL RESOURCES

- `START_HERE.md` - Quick 5-step guide
- `URL_REFERENCE.md` - All available routes
- `DEPLOYMENT.md` - Detailed deployment guide
- `EMBEDDING.md` - Advanced embedding options
- `COMPLETE_DEPLOYMENT_GUIDE.md` - Full troubleshooting

---

**Ready to deploy?** Start with:
```bash
./setup.sh
```
