# 🚀 DEPLOYMENT GUIDE - Step by Step

## ✅ Prerequisites
- GitHub account (you have: visionary-systems)
- Vercel account (free) - sign up at vercel.com

---

## 📝 STEP 1: Install Dependencies

Open Terminal in the project folder and run:

```bash
cd /Users/terramater/Desktop/digitaldignity-visualizations
npm install
```

This will install all required packages (React, D3, Recharts, etc.)

**Expected output:** You'll see a progress bar and "added XXX packages"

---

## 🧪 STEP 2: Test Locally (Optional but Recommended)

```bash
npm start
```

This opens `http://localhost:3000` in your browser.
- You should see the home page
- Click "Annual Data Footprint" and "Data Flow Network" to test
- Press `Ctrl+C` to stop the server when done

---

## 📦 STEP 3: Create GitHub Repository

### Option A: Using GitHub Website (Easier)

1. Go to https://github.com/new
2. Repository name: `digitaldignity-visualizations`
3. Description: "Interactive data visualizations for Digital Dignity"
4. Keep it **Public** (required for free Vercel)
5. DON'T initialize with README (we already have one)
6. Click "Create repository"

### Option B: Using Terminal

```bash
# Navigate to project folder
cd /Users/terramater/Desktop/digitaldignity-visualizations

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Digital Dignity visualizations"

# Set main branch
git branch -M main

# Add remote (replace with YOUR GitHub username if different)
git remote add origin https://github.com/visionary-systems/digitaldignity-visualizations.git

# Push to GitHub
git push -u origin main
```

**Expected output:** Files uploading, "Branch 'main' set up to track..."

---

## 🌐 STEP 4: Deploy to Vercel

### Option A: Using Vercel Website (Recommended for First Time)

1. **Sign up/Login to Vercel**
   - Go to https://vercel.com
   - Click "Sign Up" (or "Login")
   - Choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub

2. **Import Your Project**
   - Click "Add New" → "Project"
   - Find `digitaldignity-visualizations` in the list
   - Click "Import"

3. **Configure Project** (Most settings auto-detected)
   - Framework Preset: Create React App (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `build` (auto-filled)
   - Install Command: `npm install` (auto-filled)
   - ✅ Click "Deploy"

4. **Wait for Deployment** (~2-3 minutes)
   - You'll see a progress screen
   - Vercel builds your app
   - When done, you get a URL!

5. **Get Your URL**
   - Format: `digitaldignity-visualizations.vercel.app`
   - Or similar with random suffix
   - Click the URL to view your live site!

### Option B: Using Vercel CLI (Advanced)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login
# Follow prompts to authenticate

# Deploy (from project folder)
cd /Users/terramater/Desktop/digitaldignity-visualizations
vercel

# Follow prompts:
# - Setup and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - What's your project's name? digitaldignity-visualizations
# - In which directory? ./ (press enter)
# - Want to override settings? N

# Deploy to production
vercel --prod
```

---

## 🎉 STEP 5: Verify Deployment

Visit your Vercel URL and test:

1. **Home page** loads with two visualization cards
2. **Stage 1** (`/stage1`) shows the annual data footprint chart
3. **Stage 2** (`/stage2`) shows the network flow animation
4. **Navigation** works between pages

---

## 🔗 STEP 6: Embed in Your Hostinger Site

Now that it's live, add to your PHP site:

```html
<!-- In your primer-1.php or wherever you want the full interactive version -->

<!-- Simple Link -->
<a href="https://YOUR-URL.vercel.app/stage1" target="_blank" class="explore-full">
  Explore Full Interactive Version →
</a>

<!-- Or Iframe Embed -->
<div class="viz-embed">
  <iframe 
    src="https://YOUR-URL.vercel.app/stage1" 
    width="100%" 
    height="800px"
    frameborder="0"
    loading="lazy"
    title="Annual Data Footprint Visualization">
  </iframe>
</div>
```

Replace `YOUR-URL` with your actual Vercel URL!

---

## 🔄 Future Updates

When you want to add new visualizations or make changes:

```bash
# Make changes to files
# Then:
git add .
git commit -m "Description of changes"
git push

# Vercel automatically re-deploys!
# No need to manually redeploy
```

---

## 🎨 Custom Domain (Optional)

Want `viz.digitaldignity.org` instead of `.vercel.app`?

1. Go to Vercel dashboard
2. Select your project
3. Click "Settings" → "Domains"
4. Add custom domain
5. Follow DNS instructions
6. Wait for DNS propagation (15min - 24hr)
7. Vercel auto-generates SSL certificate

---

## 📊 Monitor Your Site

- **Analytics**: Vercel dashboard shows visits, performance
- **Builds**: See all deployments and preview old versions
- **Logs**: Check if anything goes wrong

---

## ❓ Troubleshooting

**"npm: command not found"**
- Install Node.js from nodejs.org
- Restart terminal

**"Permission denied" on git push**
- Check GitHub credentials
- May need personal access token

**Vercel build fails**
- Check build logs in Vercel dashboard
- Ensure all dependencies in package.json
- Try local build first: `npm run build`

**404 on routes**
- Ensure vercel.json exists (it does!)
- Check Vercel rewrites configuration

**Charts don't show**
- Check browser console for errors
- Verify D3/Recharts installed: `npm list d3 recharts`

---

## 🆘 Need Help?

1. Check Vercel docs: https://vercel.com/docs
2. React Router docs: https://reactrouter.com
3. Check this project's README.md
4. GitHub Issues on your repo

---

## ✅ Success Checklist

- [ ] Project installed (`npm install` completed)
- [ ] Tested locally (`npm start` works)
- [ ] GitHub repo created and pushed
- [ ] Vercel account created
- [ ] Project deployed to Vercel
- [ ] All routes working (`/`, `/stage1`, `/stage2`)
- [ ] URL saved for embedding
- [ ] Embedded in Hostinger site (if desired)

---

**🎊 Congratulations! Your visualizations are now live!**

Share your Vercel URL with the world!
