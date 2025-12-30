# Intro Module Slideshow - Deployment Guide

**Date:** November 14, 2024  
**Status:** Ready for Deployment  
**Component:** DataOwnershipIntro.jsx  
**Deployment Target:** Vercel (digitaldignity-visualizations)

---

## Summary of Changes ✅

### What Was Modified
1. **Title padding** - Reduced bottom spacing from 20px to 10px
2. **Subtitle padding** - Reduced top spacing from 10px to 5px for closer chart alignment

### What Was Already Correct (No Changes Needed)
1. ✅ Navigation has 100px bottom padding
2. ✅ Scroll down icon is present at bottom with animation
3. ✅ Source links with info icons are on all 9 slides
4. ✅ Title has 150px top padding to avoid nav overlap

---

## Quick Deployment Steps

### Option 1: Automatic Deploy (Recommended)
```bash
# Navigate to project
cd /Users/terramater/Desktop/digitaldignity-visualizations

# Stage changes
git add src/components/DataOwnershipIntro.jsx

# Commit with message
git commit -m "fix: adjust intro slideshow spacing for better layout"

# Push to trigger Vercel auto-deploy
git push origin main
```

**Vercel will automatically:**
- Detect the push to main branch
- Start build process
- Deploy to production
- Update live URL: https://digitaldignity-visualizations.vercel.app/data-ownership-intro

### Option 2: Manual Vercel Deploy
```bash
cd /Users/terramater/Desktop/digitaldignity-visualizations
vercel --prod
```

---

## Testing After Deployment

### 1. Test Standalone Component
Visit: `https://digitaldignity-visualizations.vercel.app/data-ownership-intro`

**Check:**
- [ ] Title has proper spacing from top (150px)
- [ ] Subtitle is close to chart
- [ ] All 9 slides load and display correctly
- [ ] Navigation arrows work (prev/next)
- [ ] Slide indicators work
- [ ] Source links are clickable
- [ ] Scroll icon is visible and animated
- [ ] Responsive on mobile/tablet

### 2. Test Embedded in Main Site
Visit: `https://digitaldignity.org` (or your live URL)

**Check:**
- [ ] Intro module loads correctly
- [ ] Charts display in iframe
- [ ] No overlap with site navigation
- [ ] Animation sequence works
- [ ] Mobile/tablet behavior is correct
- [ ] Continue button appears on mobile

---

## File Structure Reference

### Modified Files
```
digitaldignity-visualizations/
└── src/
    └── components/
        └── DataOwnershipIntro.jsx  ← MODIFIED
```

### Related Files (No Changes)
```
digitaldignity-visualizations/
├── src/
│   ├── App.jsx                     ← Routes component
│   └── App.css                     ← Styles
└── public/
    └── index.html                  ← HTML wrapper

digitaldignity/
├── modules/
│   └── intro-module.php            ← Embeds Vercel component
├── assets/
│   ├── css/modules/
│   │   └── intro-module.css        ← Container styles
│   └── js/modules/
│       └── intro-module.js         ← Animation logic
```

---

## Component Details

### DataOwnershipIntro.jsx
**Purpose:** Intro slideshow with 9 market data charts  
**Route:** `/data-ownership-intro`  
**Embedded in:** intro-module.php (digitaldignity site)  
**Charts:** Recharts library (Area, Bar, Line)  
**Slides:** 9 total, covering data economy statistics

### Layout Structure
```
┌─────────────────────────────────────┐
│  Title (150px top padding)          │
├─────────────────────────────────────┤
│  Chart (60vh height)                │
├─────────────────────────────────────┤
│  Subtitle (5px from chart) ← NEW    │
│  Source Link (info icon)            │
├─────────────────────────────────────┤
│  Navigation (100px bottom padding)  │
│  ◀ ●●●●●●●●● ▶                      │
├─────────────────────────────────────┤
│  Scroll Icon (20px bottom)          │
│  "Scroll to continue" ↓             │
└─────────────────────────────────────┘
```

---

## Rollback Procedure (If Needed)

### If something goes wrong:

1. **Revert Git Commit**
```bash
cd /Users/terramater/Desktop/digitaldignity-visualizations
git revert HEAD
git push origin main
```

2. **Or Restore from Backup**
```bash
# Backup location:
/Users/terramater/Desktop/digitaldignity-visualizations/backups/20241114_intro_slideshow_adjustments/

# If you saved a backup:
cp backups/20241114_intro_slideshow_adjustments/DataOwnershipIntro.jsx.backup src/components/DataOwnershipIntro.jsx
git add src/components/DataOwnershipIntro.jsx
git commit -m "revert: restore previous intro slideshow"
git push origin main
```

---

## Vercel Dashboard

**Access:** https://vercel.com/dashboard  
**Project:** digitaldignity-visualizations  
**Branch:** main (auto-deploys)

**Monitor:**
- Build logs
- Deployment status
- Performance metrics
- Error reports

---

## Environment Details

### Production URLs
- **Vercel:** https://digitaldignity-visualizations.vercel.app
- **Component:** https://digitaldignity-visualizations.vercel.app/data-ownership-intro
- **Main Site:** https://digitaldignity.org

### Local Testing (Before Deploy)
```bash
cd /Users/terramater/Desktop/digitaldignity-visualizations
npm start
# Visit: http://localhost:3000/data-ownership-intro
```

---

## Post-Deployment Actions

### After Successful Deploy
1. ✅ Test component on Vercel URL
2. ✅ Test embedded in main site
3. ✅ Verify mobile/tablet responsive
4. ✅ Update project documentation
5. ✅ Mark CHANGES_LOG as deployed
6. ✅ Close any related issues/tickets

### Update Project Knowledge
Add note to project docs:
- Date of deployment
- Changes made
- Any issues encountered
- Performance improvements

---

## Contact & Support

### If Issues Occur
1. Check Vercel build logs
2. Check browser console for errors
3. Verify iframe src URL in intro-module.php
4. Test component standalone first
5. Check mobile device compatibility

### Vercel Support
- Docs: https://vercel.com/docs
- Status: https://vercel-status.com
- Support: dashboard → Help

---

## This is the Way 🛡️

**Pre-Deployment Checklist:**
- [x] Changes made and tested locally
- [x] Backup created
- [x] Documentation updated
- [x] Git commit message ready
- [x] Rollback procedure documented

**Ready to Deploy!** ✅

---

## Next Steps

1. **Commit and push changes** (see commands above)
2. **Wait for Vercel auto-deploy** (1-2 minutes)
3. **Test on Vercel URL** (standalone)
4. **Test on main site** (embedded)
5. **Mark as complete** in project docs

**Estimated Time:** 5-10 minutes total
