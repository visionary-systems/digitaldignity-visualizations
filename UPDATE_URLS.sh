#!/bin/bash

# ============================================
# UPDATE DIGITAL DIGNITY SITE WITH VERCEL URL
# Usage: ./UPDATE_URLS.sh your-vercel-url.vercel.app
# ============================================

if [ -z "$1" ]; then
    echo "❌ Error: Please provide your Vercel URL"
    echo ""
    echo "Usage: ./UPDATE_URLS.sh your-vercel-url.vercel.app"
    echo ""
    echo "Example:"
    echo "  ./UPDATE_URLS.sh digitaldignity-visualizations.vercel.app"
    exit 1
fi

VERCEL_URL="$1"
PHP_SITE_PATH="/Users/terramater/Desktop/digitaldignity"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo "🔗 UPDATING DIGITAL DIGNITY SITE"
echo "================================="
echo ""
echo -e "${BLUE}Vercel URL:${NC} https://$VERCEL_URL"
echo ""

# Check if PHP site exists
if [ ! -d "$PHP_SITE_PATH" ]; then
    echo -e "${RED}❌ Error: PHP site not found at $PHP_SITE_PATH${NC}"
    exit 1
fi

# Backup files before updating
echo -e "${BLUE}📦 Creating backups...${NC}"
BACKUP_DIR="$PHP_SITE_PATH/backups/$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"
cp "$PHP_SITE_PATH/modules/primer-1.php" "$BACKUP_DIR/"
cp "$PHP_SITE_PATH/assets/js/modules/primer-1.js" "$BACKUP_DIR/"
echo -e "${GREEN}✓ Backups created in: $BACKUP_DIR${NC}"
echo ""

# Update primer-1.php (the iframe URL)
echo -e "${BLUE}📝 Updating primer-1.php...${NC}"
sed -i '' "s|https://YOUR-ACTUAL-VERCEL-URL.vercel.app|https://$VERCEL_URL|g" "$PHP_SITE_PATH/modules/primer-1.php"
sed -i '' "s|https://your-vercel-url.vercel.app|https://$VERCEL_URL|g" "$PHP_SITE_PATH/modules/primer-1.php"
echo -e "${GREEN}✓ primer-1.php updated${NC}"

# Update primer-1.js (the modal URLs)
echo -e "${BLUE}📝 Updating primer-1.js...${NC}"
sed -i '' "s|https://your-project.vercel.app|https://$VERCEL_URL|g" "$PHP_SITE_PATH/assets/js/modules/primer-1.js"
echo -e "${GREEN}✓ primer-1.js updated${NC}"

echo ""
echo "================================="
echo -e "${GREEN}✅ ALL FILES UPDATED!${NC}"
echo "================================="
echo ""
echo "Files modified:"
echo "  ✓ $PHP_SITE_PATH/modules/primer-1.php"
echo "  ✓ $PHP_SITE_PATH/assets/js/modules/primer-1.js"
echo ""
echo "Backups saved to:"
echo "  → $BACKUP_DIR"
echo ""
echo -e "${YELLOW}📤 NEXT STEPS:${NC}"
echo "1. Upload these files to Hostinger:"
echo "   → modules/primer-1.php"
echo "   → assets/js/modules/primer-1.js"
echo ""
echo "2. Test your site:"
echo "   → Open your Digital Dignity website"
echo "   → Navigate to the Primer slideshow"
echo "   → Slide 1 should show the embedded chart"
echo ""
echo "3. Verify the embedded chart URL:"
echo "   → https://$VERCEL_URL/embed/chart"
echo ""
