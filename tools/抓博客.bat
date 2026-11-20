@echo off
chcp 65001 >nul
cd /d "%~dp0.."
echo 抓 Ameba 博客存档，时间会比较久，别关窗口...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0fetch-ameblo.ps1"
echo.
echo 抓完了，回去告诉 Claude 就行。
pause
