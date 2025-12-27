# Quick Deploy Script - Push to GitHub

Write-Host "🚀 Starting deployment process..." -ForegroundColor Cyan

# Check if we're in the right directory
$currentDir = Get-Location
Write-Host "📁 Current directory: $currentDir" -ForegroundColor Yellow

# Navigate to portfolio directory
Set-Location "c:\Users\AFZAL COMPUTERS\OneDrive\Documents\owais\Portfolio\portfolio"

# Check git status
Write-Host "`n📊 Checking git status..." -ForegroundColor Cyan
git status

# Add all changes
Write-Host "`n➕ Adding all changes..." -ForegroundColor Cyan
git add .

# Commit changes
$commitMessage = Read-Host "`n💬 Enter commit message (or press Enter for default)"
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "Update portfolio - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
}

Write-Host "`n💾 Committing changes..." -ForegroundColor Cyan
git commit -m "$commitMessage"

# Push to GitHub
Write-Host "`n🔄 Pushing to GitHub..." -ForegroundColor Cyan
git push origin main

Write-Host "`n✅ Successfully pushed to GitHub!" -ForegroundColor Green
Write-Host "`n📝 Next steps:" -ForegroundColor Yellow
Write-Host "1. Go to https://vercel.com/dashboard" -ForegroundColor White
Write-Host "2. Import your repository: https://github.com/owaais008-hub/portfolio.git" -ForegroundColor White
Write-Host "3. Follow the VERCEL_DEPLOYMENT_GUIDE.md for detailed instructions" -ForegroundColor White

# Return to original directory
Set-Location $currentDir
