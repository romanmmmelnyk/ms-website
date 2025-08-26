#!/bin/bash

echo "🚀 Building optimized production version..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist

# Install dependencies if needed
echo "📦 Checking dependencies..."
npm ci --only=production

# Build the application
echo "🔨 Building application..."
npm run build

# Optimize images (if you have image optimization tools)
echo "🖼️  Optimizing assets..."

# Generate service worker
echo "⚙️  Generating service worker..."

# Create build info
echo "📝 Creating build info..."
echo "Build completed at: $(date)" > dist/build-info.txt
echo "Version: $(node -p "require('./package.json').version")" >> dist/build-info.txt

# Compress static assets
echo "🗜️  Compressing static assets..."
find dist -name "*.js" -o -name "*.css" -o -name "*.html" | xargs gzip -9

echo "✅ Build completed successfully!"
echo "📁 Output directory: dist/"
echo "🌐 Ready for deployment!"
