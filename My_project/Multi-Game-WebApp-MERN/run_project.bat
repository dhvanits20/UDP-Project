@echo off
title ENDGAME Multi-Game WebApp Runner
color 0A

echo ===================================================
echo     STARTING ENDGAME MULTI-GAME WEBAPP (MERN)
echo ===================================================
echo.

:: Ensure current working directory is this folder
cd /d "%~dp0"

:: 1. Launch Backend in its dedicated window
echo [*] Launching Backend Server on port 5000...
start "ENDGAME Backend (Port 5000)" "%~dp0backend\run_backend.bat"

:: 2. Launch Frontend in its dedicated window
echo [*] Launching Frontend Dev Server on port 5173...
start "ENDGAME Frontend (Port 5173)" "%~dp0frontend\run_frontend.bat"

echo.
echo ===================================================
echo   SERVICES LAUNCHED!
echo ===================================================
echo   - Backend API:   http://localhost:5000
echo   - Frontend App:  http://localhost:5173
echo.
echo   Opening http://localhost:5173 in your default browser...
timeout /t 3 >nul
start http://localhost:5173
