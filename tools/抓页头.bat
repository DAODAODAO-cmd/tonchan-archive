@echo off
chcp 65001 >nul
cd /d "%~dp0.."
echo 只下载博客的历代页头，几分钟就好...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0fetch-ameblo-headers.ps1"
echo.
echo 下载完了，回去告诉 Claude 就行。
pause
