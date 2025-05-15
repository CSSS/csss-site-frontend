#!/bin/bash

cd /home/csss-site/csss-site-frontend
if [ $? -ne 0 ]; then
	echo "----"
	echo "This script is meant only for CSSS servers."
	exit 1
fi

echo "Copying config..."
sudo cp /home/csss-site/csss-site-frontend/config/nginx.conf /etc/nginx/sites-available/csss-site-frontend

# don't proceed if test fails
echo "Validating config..."
sudo nginx -t
if [ $? -ne 0 ]; then
	exit 1
fi

echo "Enabling site..."
ln -s /etc/nginx/sites-available/csss-site-frontend /etc/nginx/sites-enabled

echo "Restarting nginx..."
sudo systemctl restart nginx

echo "Finished!"
