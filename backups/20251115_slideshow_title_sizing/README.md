# Backup: Slideshow Title Sizing
**Date:** November 15, 2025  
**Created by:** Claude (following "This is the way")

## Purpose
Adjusting the slideshow (React component) title sizing to user specifications:
- **Top line: 80pt** (was 90pt)
- **Second line: 60pt**
- **Both lines: 70pt line height** (was 1.1)

## Changes Made

### DataOwnershipIntro.jsx

**Before:**
```jsx
fontSize: 'clamp(36px, 6vw, 90px)'
lineHeight: '1.1'
```

**After:**
```jsx
// Top line
fontSize: 'clamp(32px, 5.5vw, 80px)'
lineHeight: '70pt'

// Second line
fontSize: 'clamp(24px, 4vw, 60px)' // unchanged
lineHeight: '70pt' // changed from 1.1
```

## Files Modified
- ✅ `/src/components/DataOwnershipIntro.jsx` - Title sizing and line height

## Deployment Required
This is a React component in the Vercel-hosted app, so deployment is needed:

```bash
cd /Users/terramater/Desktop/digitaldignity-visualizations
npm run build
vercel --prod
```

## Recovery Command
```bash
cp /Users/terramater/Desktop/digitaldignity-visualizations/backups/20251115_slideshow_title_sizing/DataOwnershipIntro.jsx /Users/terramater/Desktop/digitaldignity-visualizations/src/components/
```

## Testing Checklist
- [ ] Desktop: Top line displays at 80px
- [ ] Desktop: Second line displays at 60px
- [ ] Both lines: 70pt line height applied
- [ ] Mobile/Tablet: Responsive scaling works (32px-80px / 24px-60px)
- [ ] Titles remain readable and well-spaced

---
**This is the way.** ✨
