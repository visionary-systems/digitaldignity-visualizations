# 🏠 HOSTINGER vs VERCEL DEPLOYMENT

## Two Ways to Deploy Your Visualizations

---

## Option A: Vercel (Recommended) ⭐

### Pros ✅
- **No server configuration needed** - Works out of the box
- **Automatic builds** - Push to GitHub, auto-deploys
- **Global CDN** - Fast loading worldwide
- **Free SSL/HTTPS** - Automatic security
- **Easy updates** - Just `git push`
- **No manual builds** - Vercel builds for you
- **Better for React** - Designed for modern JavaScript apps
- **Separate from main site** - Won't affect your PHP site

### Cons ❌
- Requires GitHub connection
- Separate domain (unless you add custom domain)
- One extra step in workflow

### Deployment Time
**First time:** 10 minutes  
**Updates:** 1 minute (`./DEPLOY_NOW.sh`)

---

## Option B: Hostinger (Manual)

### Pros ✅
- **Same domain** as your main site
- **No extra services** needed
- **Full control** over files

### Cons ❌
- **Requires building manually** every time (`npm run build`)
- **Need .htaccess** for routing to work
- **No automatic deploys** - Manual upload each time
- **Slower updates** - Build + upload + configure
- **Same server** as PHP site (performance consideration)
- **Manual SSL** configuration needed

### Deployment Time
**First time:** 15-20 minutes  
**Updates:** 5-10 minutes (build + upload)

---

## 📋 HOSTINGER DEPLOYMENT GUIDE

If you want to upload to Hostinger instead of Vercel:

### Step 1: Build the Production Version

```bash
cd /Users/terramater/Desktop/digitaldignity-visualizations
npm run build
```

This creates a `build` folder with optimized files.

### Step 2: Prepare for Upload

The `build` folder contains:
```
build/
  ├── index.html
  ├── static/
  │   ├── css/
  │   ├── js/
  │   └── media/
  └── (other files)
```

### Step 3: Upload to Hostinger

**Option 1: File Manager (Easier)**
1. Login to Hostinger
2. Go to File Manager
3. Navigate to `public_html`
4. Create a folder: `viz` (or any name)
5. Upload ALL contents of `build` folder to `public_html/viz/`
6. Upload `.htaccess-for-hostinger` (rename to `.htaccess`)

**Option 2: FTP (Faster)**
1. Connect via FTP (FileZilla, Cyberduck)
2. Navigate to `public_html/viz/`
3. Upload ALL contents of `build` folder
4. Upload `.htaccess-for-hostinger` (rename to `.htaccess`)

### Step 4: Configure .htaccess

Make sure `.htaccess` exists in the same directory as `index.html`:

```
public_html/viz/
  ├── .htaccess          ← IMPORTANT!
  ├── index.html
  └── static/
```

### Step 5: Update Your PHP Site URLs

Instead of Vercel URL, use:
```
https://yoursite.com/viz/
```

**Update these files:**

**File 1: `modules/primer-1.php`** (Line ~18)
```html
<iframe src="https://yoursite.com/viz/embed/chart"...>
```

**File 2: `assets/js/modules/primer-1.js`** (Lines ~386 & ~428)
```javascript
const baseUrl = 'https://yoursite.com/viz';
```

### Step 6: Test Your URLs

Visit:
- `https://yoursite.com/viz/`
- `https://yoursite.com/viz/stage1`
- `https://yoursite.com/viz/stage2`
- `https://yoursite.com/viz/embed/chart` ← For Slide 1

---

## 🔄 FUTURE UPDATES

### With Vercel:
```bash
./DEPLOY_NOW.sh
# Done! Vercel auto-deploys in 2 minutes
```

### With Hostinger:
```bash
npm run build
# Then manually upload entire build folder again
# Takes 5-10 minutes
```

---

## 🤔 WHICH SHOULD YOU CHOOSE?

### Choose Vercel if:
- ✅ You want the easiest workflow
- ✅ You're okay with a separate domain
- ✅ You want automatic deployments
- ✅ You value speed and CDN performance
- ✅ You want to focus on development, not deployment

### Choose Hostinger if:
- ✅ You need everything on the same domain
- ✅ You don't want to use GitHub/Vercel
- ✅ You prefer full control
- ✅ You don't mind manual builds/uploads

---

## 💡 MY RECOMMENDATION

**Use Vercel** because:
1. It's specifically designed for React apps
2. Updates are 10x faster
3. Better performance (global CDN)
4. No manual building
5. Free SSL included
6. You can always add a custom domain later (viz.digitaldignity.org)

**But if you strongly prefer Hostinger**, the guide above will work!

---

## 🧪 TESTING LOCALLY (Both Options)

Whether you choose Vercel or Hostinger, test locally first:

```bash
cd /Users/terramater/Desktop/digitaldignity-visualizations
npm install  # First time only
npm start    # Starts localhost:3000
```

Test all routes:
- http://localhost:3000/
- http://localhost:3000/stage1
- http://localhost:3000/stage2
- http://localhost:3000/embed/chart

Press `Ctrl+C` to stop.

---

## 📊 COMPARISON TABLE

| Feature | Vercel | Hostinger |
|---------|--------|-----------|
| Setup Time | 10 min | 20 min |
| Update Time | 1 min | 10 min |
| Routing | Auto | Manual (.htaccess) |
| SSL | Auto | Manual |
| CDN | Global | Single server |
| Domain | Separate | Same |
| Deployment | Auto (git push) | Manual (upload) |
| Build | Auto | Manual |
| Best For | Modern apps | Traditional sites |

---

## 🎯 QUICK START FOR BOTH

### For Vercel:
```bash
chmod +x setup.sh && ./setup.sh
./DEPLOY_NOW.sh
# Then go to vercel.com/new
```

### For Hostinger:
```bash
npm run build
# Upload 'build' folder contents to public_html/viz/
# Upload .htaccess-for-hostinger (rename to .htaccess)
```

---

**Choose your path and let me know if you need help with either!** 🚀
