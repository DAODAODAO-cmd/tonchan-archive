@echo off
chcp 65001 >nul
cd /d "%~dp0.."
echo [1/3] 下载新图片...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0download-images.ps1"

set "GIT=git"
where git >nul 2>nul
if errorlevel 1 (
  for /d %%D in ("%LOCALAPPDATA%\GitHubDesktop\app-*") do if exist "%%D\resources\app\git\cmd\git.exe" set "GIT=%%D\resources\app\git\cmd\git.exe"
)

echo [2/3] 提交新图片...
"%GIT%" add assets/img/ext assets/img/blog
"%GIT%" -c user.name=CJYP1 -c user.email=liyiren@mccsingapore.com.sg commit -q -m "补下载的图片"

echo [3/3] 推送到 GitHub...
"%GIT%" push
if errorlevel 1 (
  echo.
  echo 推送没成功，请打开 GitHub Desktop 点 Push origin。
) else (
  echo.
  echo 推送完成。
)
pause
