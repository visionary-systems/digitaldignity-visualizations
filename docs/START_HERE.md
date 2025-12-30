# 🎯 QUICK DEPLOYMENT GUIDE

## What You'll Do (5 Steps - Takes ~10 minutes)

### ✅ STEP 1: Deploy React App to GitHub
```bash
cd /Users/terramater/Desktop/digitaldignity-visualizations
chmod +x DEPLOY_NOW.sh
./DEPLOY_NOW.sh
```

**Expected result:** Code pushed to GitHub ✓

---

### ✅ STEP 2: Connect to Vercel & Deploy

1. **Go to Vercel:**
   - Visit: https://vercel.com/new
   - Sign in with GitHub (if not already)

2. **Import Your Repository:**
   - Find: `visionary-systems/digitaldignity-visualizations`
   - Click "Import"

3. **Deploy:**
   - Framework: Create React App (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Click **"Deploy"**

4. **Wait ~2-3 minutes** for build to complete

---

### ✅ STEP 3: Get Your Vercel URL

After deployment completes, you'll see:
- **Success screen** with your URL
- Format: `digitaldignity-visualizations.vercel.app`
- Or: `digitaldignity-visualizations-[hash].vercel.app`

**Copy this URL!** You'll need it for the next step.

---

### ✅ STEP 4: Update PHP Site with Vercel URL

```bash
cd /Users/terramater/Desktop/digitaldignity-visualizations
chmod +x UPDATE_URLS.sh
./UPDATE_URLS.sh YOUR-VERCEL-URL.vercel.app
```

Replace `YOUR-VERCEL-URL.vercel.app` with your actual URL from Step 3.

**Example:**
```bash
./UPDATE_URLS.sh digitaldignity-visualizations.vercel.app
```

**This script will:**
- ✅ Update `modules/primer-1.php` with your Vercel URL
- ✅ Update `assets/js/modules/primer-1.js` with your Vercel URL
- ✅ Create backups of original files
- ✅ Show you which files were updated

---

### ✅ STEP 5: Upload to Hostinger

Upload these **2 updated files** to your Hostinger site:

1. **`/modules/primer-1.php`**
   - Contains the iframe with your Vercel URL

2. **`/assets/js/modules/primer-1.js`**
   - Contains the modal/popup Vercel URLs

**Upload via:**
- Hostinger File Manager, OR
- FTP client (FileZilla, Cyberduck, etc.)

---

## 🧪 TESTING

### Test 1: Vercel Deployment
Visit these URLs (replace with your actual URL):

- ✅ `https://YOUR-URL.vercel.app/` → Home page
- ✅ `https://YOUR-URL.vercel.app/stage1` → Full data viz
- ✅ `https://YOUR-URL.vercel.app/stage2` → Network flow
- ✅ `https://YOUR-URL.vercel.app/embed/chart` → **Embeddable chart**

### Test 2: PHP Site Integration
1. Visit your Digital Dignity website
2. Navigate to the Primer section
3. Slide 1 should show the embedded interactive chart
4. All 5 slides should display correctly

---

## 📋 TROUBLESHOOTING

### "Permission denied" when running scripts
```bash
chmod +x DEPLOY_NOW.sh UPDATE_URLS.sh
```

### Vercel build fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Try running `npm install` locally first

### Chart doesn't appear in Slide 1
- Verify Vercel URL was updated correctly in `primer-1.php`
- Check browser console for errors
- Confirm URL works: `https://YOUR-URL.vercel.app/embed/chart`

### Can't find files on Hostinger
- Log into Hostinger → File Manager
- Navigate to `public_html` (or your site root)
- Look for `modules/` and `assets/js/modules/`

---

## ✅ SUCCESS CHECKLIST

- [ ] Ran `DEPLOY_NOW.sh` (code pushed to GitHub)
- [ ] Imported project on Vercel
- [ ] Deployment completed successfully
- [ ] Got Vercel URL (wrote it down)
- [ ] Ran `UPDATE_URLS.sh` with Vercel URL
- [ ] Uploaded 2 files to Hostinger
- [ ] Tested all 4 Vercel routes
- [ ] Verified embedded chart shows in Slide 1
- [ ] All 5 primer slides work correctly

---

## 🎉 YOU'RE DONE!

Your interactive visualizations are now:
- ✅ Live on Vercel
- ✅ Embedded in your PHP site
- ✅ Ready to share with the world

**Share your work:**
- Direct link: `https://YOUR-URL.vercel.app`
- Embedded: On your Digital Dignity website

---

## 🔄 FUTURE UPDATES

When you make changes to visualizations:

```bash
cd /Users/terramater/Desktop/digitaldignity-visualizations
./DEPLOY_NOW.sh
```

Vercel will automatically redeploy. No need to update PHP files again!

---

**Need help?** Check the detailed guides:
- `DEPLOYMENT.md` - Full deployment instructions
- `COMPLETE_DEPLOYMENT_GUIDE.md` - Troubleshooting
- `EMBEDDING.md` - Advanced embedding options
