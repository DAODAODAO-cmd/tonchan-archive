@echo off
chcp 65001 >nul
cd /d "%~dp0.."
echo 下载新图片（只下载，不提交、不推送）...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0download-images.ps1"
echo.
echo 下载完了。没下载成功的图片记在 tools\image-failed.txt。
pause
