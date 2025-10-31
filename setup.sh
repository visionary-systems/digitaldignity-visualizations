#!/bin/bash

# Digital Dignity Visualizations - Quick Setup Script
# This script helps you get started with local development

echo "🎯 Digital Dignity Visualizations - Quick Setup"
echo "================================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed!"
    echo "📥 Please install Node.js from: https://nodejs.org"
    echo ""
    exit 1
else
    echo "✅ Node.js found: $(node --version)"
fi

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "❌ npm is not installed!"
    echo "📥 Please install npm (comes with Node.js)"
    echo ""
    exit 1
else
    echo "✅ npm found: $(npm --version)"
fi

echo ""
echo "📦 Installing dependencies..."
echo "This may take a few minutes..."
echo ""

# Install dependencies
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🚀 You can now run:"
    echo "   npm start     - Start development server"
    echo "   npm run build - Build for production"
    echo ""
    echo "📚 Next steps:"
    echo "1. Run 'npm start' to test locally"
    echo "2. Read DEPLOYMENT.md for Vercel deployment"
    echo "3. Read EMBEDDING.md for embedding options"
    echo ""
else
    echo ""
    echo "❌ Installation failed!"
    echo "Please check the error messages above."
    echo ""
    exit 1
fi
