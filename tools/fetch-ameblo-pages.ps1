# 只抓 Ameba 博客的月份归档页和分页（里面有单篇没存档的文章正文）
$ErrorActionPreference = 'Continue'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$root = Split-Path -Parent $PSScriptRoot
$rawDir = Join-Path $root 'tools\ameblo-raw'
$imgDir = Join-Path $root 'assets\img\blog'
New-Item -ItemType Directory -Force -Path $rawDir, $imgDir | Out-Null
$ua = @{ 'User-Agent' = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }

function Get-Json($u) {
  for ($i = 0; $i -lt 3; $i++) {
    try { return Invoke-RestMethod -Uri $u -Headers $ua -TimeoutSec 120 } catch { Start-Sleep -Seconds 5 }
  }
  return @()
}
function Save-Url($u, $dest) {
  for ($i = 0; $i -lt 3; $i++) {
    try {
      Invoke-WebRequest -Uri $u -Headers $ua -OutFile $dest -TimeoutSec 60 -UseBasicParsing
      if ((Test-Path $dest) -and ((Get-Item $dest).Length -gt 500)) { return $true }
    } catch { Start-Sleep -Seconds 3 }
  }
  if (Test-Path $dest) { Remove-Item $dest }
  return $false
}
function Hash16($s) {
  $sha = [System.Security.Cryptography.SHA1]::Create()
  $b = $sha.ComputeHash([Text.Encoding]::UTF8.GetBytes($s))
  return (-join ($b | ForEach-Object { $_.ToString('x2') })).Substring(0, 16)
}
function Good($dest) {
  if (-not (Test-Path $dest)) { return $false }
  $t = [IO.File]::ReadAllText($dest)
  if ($t -match 'entry-\d+\.html' -and $t -match 'keisuke-higashi-we') { return $true }
  Remove-Item $dest; return $false
}

Write-Host '抓月份归档页（单篇没存档的文章，正文常在这些页里）...'
$pageDir = Join-Path $root 'tools\ameblo-pages'
New-Item -ItemType Directory -Force -Path $pageDir | Out-Null
$months = @()
for ($y = 2013; $y -le 2018; $y++) { for ($m = 1; $m -le 12; $m++) { $ym = '{0}{1:D2}' -f $y, $m; if ($ym -ge '201312' -and $ym -le '201808') { $months += $ym } } }
foreach ($ym in $months) {
  for ($p = 1; $p -le 32; $p++) {
    $dest = Join-Path $pageDir ("archive-{0}-{1}.html" -f $ym, $p)
    if ((Test-Path $dest) -and ((Get-Item $dest).Length -gt 5000)) { continue }
    $name = if ($p -gt 1) { "archive$p-$ym.html" } else { "archive-$ym.html" }
    $ok = $false
    foreach ($h in @('http://ameblo.jp', 'https://ameblo.jp')) {
      if ((Save-Url ("https://web.archive.org/web/2020id_/{0}/keisuke-higashi-we/{1}" -f $h, $name) $dest) -and (Good $dest)) { $ok = $true; break }
    }
    Write-Host ("  {0} 第{1}页 {2}" -f $ym, $p, $(if ($ok) { 'OK' } else { '无' }))
    if (-not $ok) { break }
  }
}
Write-Host '抓分页 page-1..60...'
for ($p = 1; $p -le 60; $p++) {
  Write-Host ("  page-{0}" -f $p)
  $dest = Join-Path $pageDir ("page-{0}.html" -f $p)
  if ((Test-Path $dest) -and ((Get-Item $dest).Length -gt 5000)) { continue }
  foreach ($h in @('http://ameblo.jp', 'https://ameblo.jp')) {
    if ((Save-Url ("https://web.archive.org/web/2020id_/{0}/keisuke-higashi-we/page-{1}.html" -f $h, $p) $dest) -and (Good $dest)) { break }
  }
}
Write-Host ("完成：归档页 {0} 个" -f (Get-ChildItem $pageDir -Filter *.html).Count)
