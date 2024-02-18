#!/bin/bash

echo "-- Updating csss-site-frontend configurations."

cd /home/csss-site/csss-site-frontend

echo "Updating nginx config..."
cp /home/csss-site/csss-site-frontend/config/nginx.conf /etc/nginx/sites-available/csss-site-frontend
sudo nginx -t
sudo systemctl restart nginx
