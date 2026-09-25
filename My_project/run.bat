@echo off
echo Starting Multi-Game WebApp...

echo Starting Backend...
start cmd /k "cd Multi-Game-WebApp-MERN\backend && npm install && node server.js"

echo Starting Frontend...
start cmd /k "cd Multi-Game-WebApp-MERN\frontend && npm install && npm run dev"

echo Both servers are starting!
