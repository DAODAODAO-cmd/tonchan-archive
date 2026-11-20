# 把站里用到的外链图片下载到 assets/img/ext/（已下载的会跳过，可以重复运行）
$ErrorActionPreference = 'Continue'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root
New-Item -ItemType Directory -Force -Path 'assets/img/ext' | Out-Null
$lines = Get-Content -Encoding UTF8 'tools/image-manifest.tsv' | Where-Object { $_ -match "`t" }
$failed = @(); $i = 0; $ok = 0; $skip = 0
$ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36'
foreach ($line in $lines) {
  $i++
  $parts = $line -split "`t"; $url = $parts[0]; $dest = $parts[1]
  if ((Test-Path $dest) -and ((Get-Item $dest).Length -gt 500)) { $skip++; continue }
  $u = [Uri]$url
  $h = $u.Host -replace '^(img\d*|cdn[-\w]*|static|images?)\.', 'www.'
  $ref = $u.Scheme + '://' + $h + '/'
  if ($u.Host -match 'hdslb\.com$') { $ref = 'https://www.bilibili.com/' }
  & curl.exe -s -L --max-time 40 -A $ua -e $ref -o $dest $url 2>$null
  if ((Test-Path $dest) -and ((Get-Item $dest).Length -gt 500)) { $ok++; continue }
  $done = $false
  foreach ($try in 1..2) {
    try {
      Invoke-WebRequest -Uri $url -OutFile $dest -UserAgent $ua -Headers @{ Referer = $ref } -TimeoutSec 30 -UseBasicParsing
      if ((Get-Item $dest).Length -gt 500) { $done = $true; break }
    } catch { Start-Sleep -Milliseconds 500 }
  }
  if ($done) { $ok++ } else { if (Test-Path $dest) { Remove-Item $dest }; $failed += $url }
  Write-Progress -Activity '下载图片' -Status "$i / $($lines.Count)" -PercentComplete ($i * 100 / $lines.Count)
}
$failed | Set-Content -Encoding UTF8 'tools/image-failed.txt'
Write-Host ""
Write-Host "完成：新下载 $ok 张，已存在跳过 $skip 张，失败 $($failed.Count) 张（失败列表在 tools/image-failed.txt）"
Read-Host '按回车关闭'
