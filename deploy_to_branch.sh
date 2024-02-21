#!/bin/bash

echo "Installing packages..."
npm ci

echo "Building frontend..."
npm run build

echo "Adding to build branch..."
current_branch=$(git branch --show-current)
git checkout build -- build
git commit -m "Updates"
git push origin build
git checkout $current_branch
