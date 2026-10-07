@echo off
title ENDGAME Frontend (Port 5173)
color 0D
cd /d "%~dp0"
echo ==================================================
echo        ENDGAME FRONTEND DEV SERVER (PORT 5173)
echo ==================================================
echo.
npm run dev
echo.
echo [!] Frontend process stopped.
pause
