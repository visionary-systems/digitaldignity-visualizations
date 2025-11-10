#!/bin/bash

# ============================================
# Digital Dignity Visualizations
# ONE-COMMAND DEPLOYMENT SCRIPT
# ============================================

echo "🚀 DEPLOYING DIGITAL DIGNITY VISUALIZATIONS"
echo "============================================="
echo ""

# Navigate to project directory
cd "$(dirname "$0")"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if git is initialized
if [ ! -d .git ]; then
    echo -e "${RED}❌ Error: Git not initialized${NC}"
    exit 1
fi

# Check for node_modules
if [ ! -d node_modules ]; then
    echo -e "${YELLOW}📦 Installing dependencies...${NC}"
    npm install
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ npm install failed${NC}"
        exit 1
    fi
    echo -e "${GREEN}✅ Dependencies installed${NC}"
    echo ""
fi

# Check for changes
echo -e "${BLUE}📋 Checking for changes...${NC}"
if [ -n "$(git status --porcelain)" ]; then
    echo -e "${GREEN}✓ Changes detected${NC}"
    echo ""
    
    # Show what will be committed
    echo "Files to be committed:"
    git status --short
    echo ""
    
    # Stage all changes
    echo -e "${BLUE}📦 Staging changes...${NC}"
    git add .
    
    # Commit with timestamp
    TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
    echo -e "${BLUE}💾 Committing changes...${NC}"
    git commit -m "Deploy: Updated visualizations - $TIMESTAMP"
    
    # Push to GitHub
    echo -e "${BLUE}⬆️  Pushing to GitHub...${NC}"
    git push origin main
    
    if [ $? -eq 0 ]; then
        echo ""
        echo -e "${GREEN}✅ SUCCESS! Code pushed to GitHub${NC}"
    else
        echo -e "${RED}❌ Error pushing to GitHub${NC}"
        exit 1
    fi
else
    echo -e "${YELLOW}ℹ️  No changes to commit${NC}"
    echo -e "${BLUE}⬆️  Pushing to ensure sync...${NC}"
    git push origin main
fi

echo ""
echo "============================================="
echo -e "${GREEN}📍 NEXT STEPS:${NC}"
echo "============================================="
echo ""
echo "1️⃣  Deploy to Vercel:"
echo "   → Go to: https://vercel.com/new"
echo "   → Import: visionary-systems/digitaldignity-visualizations"
echo "   → Click 'Deploy' (accept all defaults)"
echo ""
echo "2️⃣  Get your Vercel URL:"
echo "   → After deployment completes (~2 mins)"
echo "   → Copy the URL (e.g., digitaldignity-visualizations.vercel.app)"
echo ""
echo "3️⃣  Test these URLs:"
echo "   → https://YOUR-URL.vercel.app/"
echo "   → https://YOUR-URL.vercel.app/stage1"
echo "   → https://YOUR-URL.vercel.app/stage2"
echo "   → https://YOUR-URL.vercel.app/embed/chart"
echo ""
echo "4️⃣  Update your PHP site:"
echo "   → Run: ./UPDATE_URLS.sh YOUR-URL.vercel.app"
echo "   → This will update all files with your Vercel URL"
echo ""
echo "============================================="
echo ""
