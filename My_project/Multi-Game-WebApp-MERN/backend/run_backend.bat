@echo off
title ENDGAME Backend (Port 5000)
color 0B
cd /d "%~dp0"
echo ==================================================
echo         ENDGAME BACKEND API (PORT 5000)
echo ==================================================
echo.
node server.js
echo.
echo [!] Backend process stopped.
pause
