#!/bin/bash

# Digital Dignity Visualizations - Vercel Deployment Script
# This script will commit changes and push to GitHub for automatic Vercel deployment

echo "🚀 Digital Dignity Visualizations - Deployment Script"
echo "=================================================="
echo ""

# Navigate to the project directory
cd /Users/terramater/Desktop/digitaldignity-visualizations

# Check if we're in a git repository
if [ ! -d .git ]; then
    echo "❌ Error: Not a git repository. Initializing..."
    git init
    git branch -M main
fi

# Check for changes
echo "📋 Checking for changes..."
if [ -n "$(git status --porcelain)" ]; then
    echo "✓ Changes detected"
    
    # Show what will be committed
    echo ""
    echo "Files to be committed:"
    git status --short
    echo ""
    
    # Stage all changes
    echo "📦 Staging changes..."
    git add .
    
    # Commit with timestamp
    TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
    echo "💾 Committing changes..."
    git commit -m "Update: Fixed Stage1 component and added embeddable chart - $TIMESTAMP"
    
    # Check if remote exists
    if git remote | grep -q 'origin'; then
        echo "✓ Remote 'origin' exists"
        
        # Push to GitHub
        echo "⬆️  Pushing to GitHub..."
        git push origin main
        
        if [ $? -eq 0 ]; then
            echo ""
            echo "✅ SUCCESS! Changes pushed to GitHub"
            echo ""
            echo "🎯 Next Steps:"
            echo "1. Vercel will automatically detect the push and start deploying"
            echo "2. Check your Vercel dashboard: https://vercel.com/dashboard"
            echo "3. Wait 2-3 minutes for deployment to complete"
            echo "4. Get your deployment URL from Vercel"
            echo "5. Update the iframe URL in /modules/primer-1.php"
            echo ""
            echo "Your embeddable chart will be at:"
            echo "https://YOUR-VERCEL-URL.vercel.app/embed/chart"
            echo ""
        else
            echo "❌ Error pushing to GitHub. Please check your credentials."
        fi
    else
        echo "⚠️  No remote repository configured."
        echo ""
        echo "To configure GitHub remote:"
        echo "1. Create a repository on GitHub"
        echo "2. Run: git remote add origin https://github.com/YOUR-USERNAME/digitaldignity-visualizations.git"
        echo "3. Run this script again"
    fi
else
    echo "ℹ️  No changes to commit"
    echo ""
    echo "If you've already pushed to GitHub:"
    echo "1. Check Vercel dashboard for deployment status"
    echo "2. Your URL should be: https://digitaldignity-visualizations.vercel.app"
    echo "   (or similar)"
fi

echo ""
echo "=================================================="
