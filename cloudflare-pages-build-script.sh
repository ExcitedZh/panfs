#!/bin/bash

# Install dependencies
npm install

# Build the project
npm run build

# Move build output to a 'public' directory for Cloudflare Pages
mkdir public
mv dist/* public/
