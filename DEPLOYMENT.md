# Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Go to Vercel**: Visit [https://vercel.com](https://vercel.com)
2. **Sign up/Login**: Use your GitHub account to sign in
3. **Import Project**: 
   - Click "Add New Project"
   - Select your repository: `owaais008-hub/portfolio`
   - Choose the **frontend** folder as the root directory
4. **Configure Project**:
   - Framework Preset: **Vite**
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. **Deploy**: Click "Deploy"
6. **Your site will be live** at: `https://your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Navigate to frontend directory
cd frontend

# Deploy
vercel

# Follow the prompts to link your project
```

## 🌐 Deploy to Netlify

1. **Go to Netlify**: Visit [https://netlify.com](https://netlify.com)
2. **Sign up/Login**: Use your GitHub account
3. **Import Project**: 
   - Click "Add new site" → "Import an existing project"
   - Select your repository: `owaais008-hub/portfolio`
4. **Configure Build Settings**:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `frontend/dist`
5. **Deploy**: Click "Deploy site"

## 📦 Build Locally Before Deploying

```bash
cd frontend
npm install
npm run build
```

The built files will be in the `frontend/dist` directory.

## 🔧 Environment Variables (if needed)

If you need environment variables:
- **Vercel**: Go to Project Settings → Environment Variables
- **Netlify**: Go to Site Settings → Build & Deploy → Environment Variables

## 📝 Notes

- The frontend is configured to work with the backend API
- Make sure your backend is also deployed (can use Railway, Render, or Heroku)
- Update API endpoints in `frontend/src/services/api.ts` if needed

