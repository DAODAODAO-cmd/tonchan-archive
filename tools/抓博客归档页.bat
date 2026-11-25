@echo off
chcp 65001 >nul
cd /d "%~dp0.."
echo 只抓 Ameba 博客的月份归档页，时间会比较久，别关窗口...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0fetch-ameblo-pages.ps1"
echo.
echo 抓完了，回去告诉 Claude 就行。
pause
