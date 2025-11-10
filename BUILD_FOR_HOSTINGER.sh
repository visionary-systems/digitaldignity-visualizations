#!/bin/bash

# ============================================
# BUILD FOR HOSTINGER
# Creates production build ready for upload
# ============================================

echo "🏗️  BUILDING FOR HOSTINGER DEPLOYMENT"
echo "======================================="
echo ""

cd "$(dirname "$0")"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Check for node_modules
if [ ! -d node_modules ]; then
    echo -e "${YELLOW}📦 Installing dependencies first...${NC}"
    npm install
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ npm install failed${NC}"
        exit 1
    fi
    echo ""
fi

# Build production version
echo -e "${BLUE}🔨 Building production version...${NC}"
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅ BUILD COMPLETE!${NC}"
    echo "======================================="
    echo ""
    echo "📁 Built files are in: ./build/"
    echo ""
    echo "📤 NEXT STEPS:"
    echo ""
    echo "1. Copy .htaccess to build folder:"
    echo "   cp .htaccess-for-hostinger build/.htaccess"
    echo ""
    echo "2. Upload to Hostinger:"
    echo "   → Login to Hostinger File Manager"
    echo "   → Go to public_html"
    echo "   → Create folder: viz"
    echo "   → Upload ALL contents of 'build' folder to viz/"
    echo ""
    echo "3. Your visualizations will be at:"
    echo "   https://yoursite.com/viz/"
    echo "   https://yoursite.com/viz/stage1"
    echo "   https://yoursite.com/viz/stage2"
    echo "   https://yoursite.com/viz/embed/chart"
    echo ""
    echo "4. Update PHP site URLs:"
    echo "   → Edit modules/primer-1.php"
    echo "   → Change iframe src to: https://yoursite.com/viz/embed/chart"
    echo "   → Edit assets/js/modules/primer-1.js"
    echo "   → Change baseUrl to: https://yoursite.com/viz"
    echo ""
    echo "======================================="
    
    # Copy .htaccess
    if [ -f .htaccess-for-hostinger ]; then
        cp .htaccess-for-hostinger build/.htaccess
        echo -e "${GREEN}✓ .htaccess copied to build folder${NC}"
    fi
    
    # Show build folder size
    BUILD_SIZE=$(du -sh build | cut -f1)
    echo ""
    echo "Build folder size: $BUILD_SIZE"
    echo ""
else
    echo -e "${RED}❌ Build failed${NC}"
    echo "Check the error messages above"
    exit 1
fi
