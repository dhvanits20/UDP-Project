@echo off
title ENDGAME Multi-Game WebApp Runner
color 0A

echo ===================================================
echo     STARTING ENDGAME MULTI-GAME WEBAPP (MERN)
echo ===================================================
echo.

:: Set working directory to the folder containing this script
cd /d "%~dp0"

:: 1. Check MongoDB Windows Service
echo [*] Checking MongoDB Windows Service...
sc query MongoDB | find "STATE" | find "RUNNING" >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [OK] MongoDB service is active.
) else (
    echo [*] Attempting to start MongoDB service...
    net start MongoDB >nul 2>&1
    if %ERRORLEVEL% EQU 0 (
        echo [OK] MongoDB service started successfully.
    ) else (
        echo [INFO] MongoDB service already active or running as standalone process.
    )
)
echo.

:: 2. Launch Backend in a dedicated window
echo [*] Launching Backend Server (Node.js/Express)...
start "ENDGAME Backend (Port 5000)" cmd /k "cd /d "%~dp0backend" && title ENDGAME Backend (Port 5000) ^& echo ======================================== ^& echo   ENDGAME BACKEND API (PORT 5000) ^& echo ======================================== ^& node server.js"

:: 3. Launch Frontend in a dedicated window
echo [*] Launching Frontend Server (React/Vite)...
start "ENDGAME Frontend (Port 5173)" cmd /k "cd /d "%~dp0frontend" && title ENDGAME Frontend (Port 5173) ^& echo ======================================== ^& echo   ENDGAME FRONTEND APP (PORT 5173) ^& echo ======================================== ^& npm run dev"

echo.
echo ===================================================
echo   SERVICES LAUNCHED!
echo ===================================================
echo   - Backend API:   http://localhost:5000
echo   - Frontend App:  http://localhost:5173
echo.
echo   Both servers are running in separate terminal windows.
echo   To stop a server, close its respective window or press Ctrl+C.
echo.
echo   Opening http://localhost:5173 in your default browser...
timeout /t 3 >nul
start http://localhost:5173
