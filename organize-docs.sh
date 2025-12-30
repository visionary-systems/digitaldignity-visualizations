#!/bin/bash
# Digital Dignity Visualizations - Documentation Organization Script

# Create destination directory
mkdir -p docs

# Move all markdown documentation files (except README.md)
for f in COMPLETE*.md DEPLOYMENT*.md EMBEDDING*.md HOSTING*.md MASTER*.md \
         READY*.md START*.md SUMMARY*.md URL*.md WHAT*.md README_*.md; do
    [ -e "$f" ] && mv "$f" docs/ 2>/dev/null
done

echo "Documentation organized!"
echo "Files kept in root: README.md, vercel.json, package.json"
echo ""
echo "Check docs/ for organized documentation"
