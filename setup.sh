#!/bin/bash

# Quick setup script - makes all deployment scripts executable

echo "🔧 Setting up deployment scripts..."
echo ""

cd "$(dirname "$0")"

chmod +x DEPLOY_NOW.sh
chmod +x UPDATE_URLS.sh
chmod +x deploy.sh

echo "✅ All scripts are now executable!"
echo ""
echo "Available commands:"
echo "  ./DEPLOY_NOW.sh      - Deploy to GitHub (run this first)"
echo "  ./UPDATE_URLS.sh     - Update PHP site with Vercel URL (run after Vercel deployment)"
echo ""
