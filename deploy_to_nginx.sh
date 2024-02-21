#!/bin/bash

cd /home/csss-site/csss-site-frontend
if [ $? != 0 ]; then
	echo "----"
	echo "This script is meant only for CSSS servers."
	exit 1
fi

# store current branch (e.g., "main") in current_branch
echo "Checking out the build branch..."
current_branch=$(git branch --show-current)
git checkout build

# don't proceed if couldn't checkout build branch
branch=$(git branch --show-current)
if [ $branch != "build" ]; then
	exit 1
fi

# get latest updates then list the file tree
git pull origin build

echo "----"
git ls-files
echo "----"

echo "Clearing /var/www/html..."
rm -Rf /var/www/html/*

# selectively copy build files to /var/www/html
echo "Copying files to /var/www/html..."
rsync \
	--verbose \
	--recursive \
	--exclude="build/" \
	--exclude="node_modules/" \
	--exclude=".*" \
	/home/csss-site/csss-site-frontend/* \
	/var/www/html

git checkout $current_branch

echo "Finished!"
