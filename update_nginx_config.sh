#!/bin/bash

# script can only run if /home/csss-site/csss-site-frontend exists
# (this script is for the CSSS servers)
cd /home/csss-site/csss-site-frontend
if [ $? -ne 0 ]; then
	exit 1
fi

nginx_config="/etc/nginx"

while true; do
	echo "Copying config to sites-available and sites-enabled in $nginx_config."
	echo "(P)roceed, (c)ancel, (o)ther path?"
	read choice

	if [ $choice = "P" ]; then
		break
	elif [ $choice = "c" ]; then
		exit 0
	elif [ $choice = "o" ]; then
		echo "What is the other path? (No trailing slash.)"
		read nginx_config
	else
		echo "Not sure what you mean..."
	fi
done

echo "Copying nginx config..."
sudo cp config/nginx.conf $nginx_config/sites-available/csss-site-frontend

echo "Validating config..."
sudo nginx -t

# don't proceed if config test fails
if [ $? -ne 0 ]; then
	exit 1
fi

echo "Enabling site and restarting nginx..."
ln -s $nginx_config/sites-available/csss-site-frontend $nginx_config/sites-enabled
sudo systemctl restart nginx

echo "Finished!"
