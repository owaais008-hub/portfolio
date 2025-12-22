# 🚀 Quick Deployment Guide

## Option 1: Vercel (सबसे आसान - Recommended) ⭐

### Steps:
1. **Vercel पर जाएं**: https://vercel.com
2. **GitHub से Sign In करें**
3. **"Add New Project"** पर क्लिक करें
4. **Repository select करें**: `owaais008-hub/portfolio`
5. **Settings configure करें**:
   - **Root Directory**: `frontend` 
   - **Framework Preset**: Vite (auto-detect होगा)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. **"Deploy"** पर क्लिक करें

✅ **2-3 मिनट में आपकी website live हो जाएगी!**

**URL**: `https://portfolio-xxx.vercel.app` (या custom domain)

---

## Option 2: GitHub Pages (Free)

### Steps:
1. **GitHub repository पर जाएं**: https://github.com/owaais008-hub/portfolio
2. **Settings** tab पर जाएं
3. **Pages** section में जाएं (left sidebar में)
4. **Source** में **"GitHub Actions"** select करें
5. **Save** करें
6. **Actions** tab पर जाएं - workflow automatically run होगा
7. **कुछ मिनट wait करें** - deployment complete होने पर:
   - **Settings → Pages** में आपको URL मिलेगा
   - URL: `https://owaais008-hub.github.io/portfolio/`

⚠️ **Note**: GitHub Pages के लिए base path `/portfolio/` है, इसलिए URL में `/portfolio/` जरूरी है।

---

## Option 3: Netlify

1. **Netlify पर जाएं**: https://netlify.com
2. **GitHub से Sign In करें**
3. **"Add new site" → "Import an existing project"**
4. **Repository select करें**: `owaais008-hub/portfolio`
5. **Build settings**:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `frontend/dist`
6. **Deploy site** पर क्लिक करें

---

## 🎯 सबसे तेज़ तरीका (Vercel):

```bash
# Vercel CLI install करें (optional)
npm i -g vercel

# Frontend folder में जाएं
cd frontend

# Deploy करें
vercel
```

---

## ✅ Deployment के बाद:

1. ✅ Website live होगी
2. ✅ Automatic HTTPS
3. ✅ Custom domain add कर सकते हैं
4. ✅ Future updates automatically deploy होंगे

**अगर कोई problem हो तो बताएं!** 🚀

