# 从 Internet Archive 抓东启介 Ameba 博客（已删除）的存档：正文 HTML 存到 tools/ameblo-raw，文中图片存到 assets/img/blog
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

Write-Host '查询存档目录...'
$caps = @()
foreach ($q in @('ameblo.jp/keisuke-higashi-we/entry-*', 's.ameblo.jp/keisuke-higashi-we/entry-*')) {
  $j = Get-Json ("https://web.archive.org/cdx/search/cdx?url=$q&output=json&fl=timestamp,original,statuscode&limit=20000")
  if ($j.Count -gt 1) { $caps += $j[1..($j.Count - 1)] }
}
$best = @{}
foreach ($c in $caps) {
  if ($c[2] -ne '200') { continue }
  if ($c[1] -notmatch 'entry-(\d+)\.html') { continue }
  $id = $Matches[1]
  if (-not $best.ContainsKey($id) -and $c[1] -notmatch '^https?://s\.ameblo') { $best[$id] = $c }
}
foreach ($c in $caps) {
  if ($c[2] -ne '200' -or $c[1] -notmatch 'entry-(\d+)\.html') { continue }
  if (-not $best.ContainsKey($Matches[1])) { $best[$Matches[1]] = $c }
}
Write-Host ("存档里找到 {0} 篇" -f $best.Count)

$n = 0; $fail = @()
foreach ($id in $best.Keys) {
  $n++
  $dest = Join-Path $rawDir "$id.html"
  if ((Test-Path $dest) -and ((Get-Item $dest).Length -gt 5000)) { continue }
  $c = $best[$id]
  Write-Host ("[{0}/{1}] 正文 {2}" -f $n, $best.Count, $id)
  if (-not (Save-Url ("https://web.archive.org/web/{0}id_/{1}" -f $c[0], $c[1]) $dest)) { $fail += $id }
}

Write-Host '下载文中图片...'
$imgs = @{}
foreach ($f in Get-ChildItem $rawDir -Filter *.html) {
  $t = [IO.File]::ReadAllText($f.FullName)
  foreach ($m in [regex]::Matches($t, 'https?://stat\.ameba\.jp/user_images/(\d{8})/\d+/keisuke-higashi-we/[^"''\s<>?]+\.(?:jpg|jpeg|png|gif)')) {
    $imgs[$m.Value -replace '^http:', 'https:'] = $m.Groups[1].Value
  }
}
$k = 0; $ifail = 0
foreach ($u in $imgs.Keys) {
  $k++
  $plain = $u -replace '^https:', 'http:'
  $ext = [IO.Path]::GetExtension($plain).ToLower(); if ($ext -eq '.jpeg') { $ext = '.jpg' }
  $dest = Join-Path $imgDir ((Hash16 $plain) + $ext)
  if ((Test-Path $dest) -and ((Get-Item $dest).Length -gt 500)) { continue }
  $ok = $false
  foreach ($v in @($plain, ($plain + '?caw=800'))) {
    if (Save-Url ("https://web.archive.org/web/{0}id_/{1}" -f $imgs[$u], $v) $dest) { $ok = $true; break }
  }
  if (-not $ok) { $ifail++ }
  if ($k % 20 -eq 0) { Write-Host ("  图片 {0}/{1}" -f $k, $imgs.Count) }
}

Write-Host '抓历代页头...'
$hdrSrc = @('stat100.ameba.jp/p_skin/w_officialskin/img/header/keisuke-higashi-we.jpg', 'stat100.ameba.jp/spskin/header/talent/k/keisuke-higashi-we.jpg')
foreach ($css in @('usrcss.ameblo.jp/skin/templates/54/ea/header_10043850494.css', 'usrcss.ameblo.jp/skin/templates/54/ea/10043850494.css')) {
  $cj = Get-Json ("https://web.archive.org/cdx/search/cdx?url=$css&output=json&fl=timestamp,statuscode,digest&collapse=digest")
  if ($cj.Count -gt 1) {
    foreach ($c in $cj[1..($cj.Count - 1)]) {
      if ($c[1] -ne '200') { continue }
      try {
        $t = (Invoke-WebRequest -Uri ("https://web.archive.org/web/{0}id_/http://{1}" -f $c[0], $css) -Headers $ua -TimeoutSec 60 -UseBasicParsing).Content
        foreach ($m in [regex]::Matches($t, 'url\(\s*["'']?https?://([^"''\)\s]+\.(?:jpg|jpeg|png|gif))')) {
          $v = $m.Groups[1].Value
          if ($v -match 'keisuke|header' -and $hdrSrc -notcontains $v) { $hdrSrc += $v }
        }
      } catch {}
    }
  }
}
$hdrN = 0
foreach ($h in $hdrSrc) {
  $tag = if ($h -match 'spskin') { 'sp' } elseif ($h -match 'w_officialskin') { 'pc' } else { 'x' + (Hash16 $h).Substring(0, 6) }
  $ext = [IO.Path]::GetExtension($h).ToLower(); if ($ext -eq '.jpeg') { $ext = '.jpg' }
  $j = Get-Json ("https://web.archive.org/cdx/search/cdx?url=$h&output=json&fl=timestamp,statuscode,digest&collapse=digest")
  if ($j.Count -lt 2) { continue }
  foreach ($c in $j[1..($j.Count - 1)]) {
    if ($c[1] -ne '200') { continue }
    $dest = Join-Path $imgDir ("header-{0}-{1}{2}" -f $tag, $c[0], $ext)
    if ((Test-Path $dest) -and ((Get-Item $dest).Length -gt 500)) { continue }
    if (Save-Url ("https://web.archive.org/web/{0}id_/http://{1}" -f $c[0], $h) $dest) { $hdrN++ }
  }
}
Write-Host ("页头新下载 {0} 张" -f $hdrN)

Write-Host ("完成：正文 {0} 篇（失败 {1}），图片 {2} 张（存档里没有 {3} 张）" -f $best.Count, $fail.Count, $imgs.Count, $ifail)
