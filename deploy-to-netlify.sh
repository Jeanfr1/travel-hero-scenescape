#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if the build was successful
if [ $? -ne 0 ]; then
  echo "Build failed. Please fix the errors and try again."
  exit 1
fi

echo "Build successful!"
echo ""
echo "To deploy to Netlify, you can use one of the following methods:"
echo ""
echo "1. Netlify CLI (recommended):"
echo "   - Install Netlify CLI: npm install -g netlify-cli"
echo "   - Login to Netlify: netlify login"
echo "   - Initialize a new site: netlify init"
echo "   - Deploy the site: netlify deploy --prod"
echo ""
echo "2. Netlify UI:"
echo "   - Go to https://app.netlify.com/"
echo "   - Drag and drop the 'dist' folder to the Netlify UI"
echo ""
echo "3. Connect to GitHub:"
echo "   - Push your changes to GitHub"
echo "   - Go to https://app.netlify.com/"
echo "   - Click 'New site from Git'"
echo "   - Select your repository"
echo "   - Set build command to: npm run build"
echo "   - Set publish directory to: dist"
echo "   - Click 'Deploy site'"
echo ""
echo "Your site is now ready to be deployed to Netlify!"
