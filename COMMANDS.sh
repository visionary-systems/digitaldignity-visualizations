#!/bin/bash

# COPY AND PASTE THESE COMMANDS ONE BY ONE

echo "═══════════════════════════════════════════════════════"
echo "  DIGITAL DIGNITY - DEPLOYMENT COMMANDS"
echo "═══════════════════════════════════════════════════════"
echo ""
echo "Copy and paste these commands one at a time:"
echo ""

# Command 1
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "1. Navigate to visualizations project:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "cd /Users/terramater/Desktop/digitaldignity-visualizations"
echo ""

# Command 2
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "2. Make deploy script executable:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "chmod +x deploy.sh"
echo ""

# Command 3
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "3. Run deployment:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "./deploy.sh"
echo ""

echo "═══════════════════════════════════════════════════════"
echo ""
echo "OR if you prefer manual deployment:"
echo ""
echo "cd /Users/terramater/Desktop/digitaldignity-visualizations"
echo "git add ."
echo "git commit -m \"Fix Stage1 and add embeddable chart\""
echo "git push origin main"
echo ""
echo "═══════════════════════════════════════════════════════"
echo ""
echo "After successful deployment:"
echo ""
echo "1. Get your Vercel URL from: https://vercel.com/dashboard"
echo "2. Update /modules/primer-1.php (line 18)"
echo "3. Update /assets/js/modules/primer-1.js (lines 386 & 428)"
echo "4. Upload both files to Hostinger"
echo "5. Test on your live site!"
echo ""
echo "═══════════════════════════════════════════════════════"
