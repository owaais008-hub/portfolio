# 🚀 GitHub Pages पर Deploy करने के Steps

## Method 1: GitHub UI से (सबसे आसान) ⭐

### Step 1: GitHub Repository Settings में जाएं
1. https://github.com/owaais008-hub/portfolio पर जाएं
2. **Settings** tab पर क्लिक करें (repository के top पर)
3. Left sidebar में **Pages** पर क्लिक करें

### Step 2: GitHub Pages Enable करें
1. **Source** dropdown में **"GitHub Actions"** select करें
2. अगर GitHub Actions option नहीं दिख रहा, तो:
   - **Source** में **"Deploy from a branch"** select करें
   - **Branch** में **"main"** select करें
   - **Folder** में **"/ (root)"** select करें
   - **Save** करें

### Step 3: GitHub Actions Workflow Enable करें
1. **Actions** tab पर जाएं
2. अगर workflow disabled है, तो **"I understand my workflows, go ahead and enable them"** पर क्लिक करें
3. Workflow automatically run होगा

### Step 4: Wait करें
- 2-3 मिनट wait करें
- **Actions** tab में deployment status check करें
- Success होने पर **Settings → Pages** में आपको URL मिलेगा

**Your Live URL**: `https://owaais008-hub.github.io/portfolio/`

---

## Method 2: Manual Build और Push (अगर Method 1 काम न करे)

### Commands:
```bash
# Frontend folder में जाएं
cd frontend

# Dependencies install करें
npm install

# Build करें
npm run build

# gh-pages branch बनाएं और push करें
cd dist
git init
git add .
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin https://github.com/owaais008-hub/portfolio.git
git push -u origin gh-pages --force
```

फिर GitHub Settings → Pages में **gh-pages branch** select करें।

---

## ⚠️ Important Notes:

1. **Base Path**: GitHub Pages के लिए base path `/portfolio/` है
2. **URL Format**: `https://owaais008-hub.github.io/portfolio/`
3. **Custom Domain**: Settings → Pages में custom domain add कर सकते हैं

---

## ✅ Quick Check:
- Repository: https://github.com/owaais008-hub/portfolio
- After deployment: https://owaais008-hub.github.io/portfolio/

**अगर कोई problem हो तो बताएं!** 🚀

