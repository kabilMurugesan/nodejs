#!/bin/bash
cd /var/www/nodejs
sudo pm2 start index.js --name "nodejs"