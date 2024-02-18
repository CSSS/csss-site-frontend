#!/bin/bash

# NOTE: if cannot cd, assumes already in the correct directory
cd /home/csss-site/csss-site-frontend 2> /dev/null

echo "Making all recipes..."
make all

# do not continue if make fails
if [ $? -ne 0 ]; then
	exit $?
fi

deploy_path='/var/www/html'

while true; do
	echo "Proceed and deploy to $deploy_path? (This cannot be undone.)"
	echo "(Y)es, (n)o, (o)ther path?"
	read choice

	if [ "$choice" = "Y" ]; then
		break
	elif [ "$choice" = "n" ]; then
		exit 1
	elif [ "$choice" = "o" ]; then
		echo "What is the other path?"
		read deploy_path
	else
		echo "Not sure what you mean..."
	fi
done

echo "Deploying to $deploy_path..."

echo "rm -Rf $deploy_path/*"
sudo rm -Rf $deploy_path/*

echo "cp -Rf build/* $deploy_path"
sudo cp -Rf build/* $deploy_path

echo "Finished! Check for yourself at $deploy_path."
