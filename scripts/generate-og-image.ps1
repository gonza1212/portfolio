Add-Type -AssemblyName System.Drawing

$root = $PSScriptRoot
$logoWebp = Join-Path $root "..\public\logo.webp"
$logoPng = Join-Path $env:TEMP "rotative-logo-tmp.png"
$outPath = Join-Path $root "..\public\og-image.png"

# Convert webp -> png via sharp (PowerShell 5.1 can't load webp reliably)
& node (Join-Path $root "convert-logo.mjs") $logoWebp $logoPng
if ($LASTEXITCODE -ne 0) { throw "logo conversion failed" }

$width = 1200
$height = 630

$bmp = New-Object System.Drawing.Bitmap $width, $height
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

# Background gradient
$rect = New-Object System.Drawing.Rectangle 0, 0, $width, $height
$bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    $rect,
    [System.Drawing.Color]::FromArgb(28, 29, 32),
    [System.Drawing.Color]::FromArgb(10, 10, 10),
    135
)
$g.FillRectangle($bgBrush, $rect)
$bgBrush.Dispose()

# Logo (top-left, 120x120, padded)
$logo = [System.Drawing.Image]::FromFile($logoPng)
$logoRect = New-Object System.Drawing.Rectangle 80, 80, 120, 120
$g.DrawImage($logo, $logoRect)
$logo.Dispose()

# Title "Rotative"
$titleFont = New-Object System.Drawing.Font("Segoe UI", 96, [System.Drawing.FontStyle]::Bold)
$titleBrush = [System.Drawing.Brushes]::White
$g.DrawString("Rotative", $titleFont, $titleBrush, 80, 250)
$titleFont.Dispose()

# Tagline
$tagFont = New-Object System.Drawing.Font("Segoe UI", 32, [System.Drawing.FontStyle]::Regular)
$tagBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(156, 154, 150))
$g.DrawString("Software empresarial a medida", $tagFont, $tagBrush, 80, 380)
$tagFont.Dispose()

# Argentina accent
$argFont = New-Object System.Drawing.Font("Segoe UI", 28, [System.Drawing.FontStyle]::Bold)
$argBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(249, 115, 22))
$argText = [char]0x2014 + " Argentina"
$g.DrawString($argText, $argFont, $argBrush, 80, 470)
$argFont.Dispose()

# Bottom orange bar
$barBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(249, 115, 22))
$g.FillRectangle($barBrush, 0, ($height - 12), $width, 12)
$barBrush.Dispose()

$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$g.Dispose()

Remove-Item $logoPng -Force -ErrorAction SilentlyContinue

Write-Host "Generated: $outPath"
$fi = Get-Item $outPath
Write-Host ("Size: {0} bytes" -f $fi.Length)
