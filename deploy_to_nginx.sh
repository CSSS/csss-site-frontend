#!/bin/bash

echo "Checking out the build branch..."

# store current branch (e.g., "main") in current_branch
current_branch=$(git branch --show-current)

git checkout build

branch=$(git branch --show-current)
if [ $branch != "build" ]; then
	exit 1
fi

# get latest updates then list the file tree
git pull origin build
git ls-files

# default static files path for nginx
deploy_path='/var/www/html'

# wait for user input before proceeding
while true; do
	echo "Proceed and deploy to $deploy_path? (This cannot be undone.)"
	echo "(Y)es, (n)o, (o)ther path?"
	read choice

	if [ $choice = "Y" ]; then
		break
	elif [ $choice = "n" ]; then
		exit 0
	elif [ $choice = "o" ]; then
		echo "What is the other path?"
		read deploy_path
	else
		echo "Not sure what you mean..."
	fi
done

echo "Removing build/ and node_modules/..."
# we don't want to deploy the build and node_modules files
rm -Rf build node_modules

echo "Removing contents of $deploy_path..."
sudo rm -Rf $deploy_path/*

echo "Copying new files to $deploy_path..."
sudo cp -Rf . $deploy_path
sudo rm $deploy_path/.gitignore

permissions='u=rwx,go=rx'
user='www-data'
group='www-data'

# wait for user input before proceeding
while true; do
	echo "Permissions for $deploy_path will be set to $permissions for $user:$group."
	echo "(C)ontinue, set (p)ermissions, (u)ser, (g)roup?"
	read choice

	if [ $choice = "C" ]; then
		break
	elif [ $choice = "p" ]; then
		echo "What permissions?"
		read permissions
	elif [ $choice = "u" ]; then
		echo "What user?"
		read user
	elif [ $choice = "g" ]; then
		echo "What group?"
		read group
	else
		echo "Not sure what you mean..."
	fi
done

echo "Setting permissions and ownership..."
sudo chown -R $user:$group $deploy_path
sudo chmod -R $permissions $deploy_path

git checkout $current_branch

echo "Finished! Check for yourself at $deploy_path."
