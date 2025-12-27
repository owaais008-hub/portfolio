# 🚀 Vercel Deployment Checklist

## ✅ Pre-Deployment Completed
- [x] GitHub repository configured: https://github.com/owaais008-hub/portfolio.git
- [x] Code pushed to GitHub
- [x] Vercel account logged in: owaais008@gmail.com
- [x] Repository visible in Vercel import page

---

## 📋 Step-by-Step Deployment Instructions

### PART 1: Deploy Backend First

#### Step 1: Import Backend Project
1. ✅ You're already on: https://vercel.com/new
2. Click on **"Import"** button next to `owaais008-hub/portfolio` repository
3. Wait for the configuration page to load

#### Step 2: Configure Backend Settings
On the configuration page, set the following:

**Project Name:**
```
portfolio-backend
```

**Framework Preset:**
```
Other
```

**Root Directory:**
```
portfolio/backend
```
⚠️ Click "Edit" next to Root Directory and select `portfolio/backend`

**Build Settings:**
- Build Command: (leave empty)
- Output Directory: (leave empty)
- Install Command: `npm install`

#### Step 3: Add Backend Environment Variables
Click on **"Environment Variables"** section and add these:

| Name | Value |
|------|-------|
| `MONGODB_URI` | `mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority` |
| `NODE_ENV` | `production` |
| `PORT` | `5000` |

⚠️ **IMPORTANT:** You need to create a MongoDB Atlas account first if you don't have one!

**MongoDB Atlas Setup (if needed):**
1. Go to: https://www.mongodb.com/cloud/atlas
2. Sign up or log in
3. Create a new FREE cluster
4. Create a database user (username + password)
5. Network Access → Add IP Address → Allow Access from Anywhere (0.0.0.0/0)
6. Get your connection string from: Connect → Connect your application
7. Replace `<username>`, `<password>`, and database name in the connection string

#### Step 4: Deploy Backend
1. Click **"Deploy"** button
2. Wait for deployment to complete (2-5 minutes)
3. **COPY YOUR BACKEND URL** (e.g., `https://portfolio-backend-xxx.vercel.app`)
4. Test it by visiting: `https://your-backend-url.vercel.app/api/projects`

---

### PART 2: Deploy Frontend

#### Step 5: Import Frontend Project
1. Go back to: https://vercel.com/new
2. Click **"Import"** button next to `owaais008-hub/portfolio` repository again
3. Wait for the configuration page to load

#### Step 6: Configure Frontend Settings
On the configuration page, set the following:

**Project Name:**
```
portfolio-frontend
```

**Framework Preset:**
```
Vite
```

**Root Directory:**
```
portfolio/frontend
```
⚠️ Click "Edit" next to Root Directory and select `portfolio/frontend`

**Build Settings:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

#### Step 7: Add Frontend Environment Variables
Click on **"Environment Variables"** section and add:

| Name | Value |
|------|-------|
| `VITE_API_URL` | `https://your-backend-url.vercel.app/api` |

⚠️ **IMPORTANT:** Replace `your-backend-url.vercel.app` with the actual backend URL from Step 4!

#### Step 8: Deploy Frontend
1. Click **"Deploy"** button
2. Wait for deployment to complete (2-5 minutes)
3. **COPY YOUR FRONTEND URL** (e.g., `https://portfolio-frontend-xxx.vercel.app`)
4. Visit your live portfolio! 🎉

---

## 🧪 Testing Your Deployment

### Test Backend:
1. Visit: `https://your-backend-url.vercel.app/`
   - Should show: `{"message":"Welcome to the Portfolio API"}`
2. Visit: `https://your-backend-url.vercel.app/api/projects`
   - Should show: Array of projects (might be empty initially)
3. Visit: `https://your-backend-url.vercel.app/api/skills`
   - Should show: Array of skills (might be empty initially)

### Test Frontend:
1. Visit: `https://your-frontend-url.vercel.app/`
   - Should load your portfolio
2. Check browser console (F12) for any errors
3. Test navigation between sections
4. Test contact form
5. Verify all animations work

---

## 🔧 Troubleshooting

### Backend Issues:

**Problem:** "Cannot connect to database"
- **Solution:** Check MongoDB Atlas connection string
- Verify username/password are correct
- Ensure IP whitelist includes 0.0.0.0/0

**Problem:** "Function timeout"
- **Solution:** Check Vercel function logs
- Go to: Dashboard → Backend Project → Deployments → Click deployment → View Function Logs

### Frontend Issues:

**Problem:** "Failed to fetch" or CORS errors
- **Solution:** Verify `VITE_API_URL` is set correctly
- Make sure it ends with `/api`
- Check backend CORS is enabled (it already is in your code)

**Problem:** Blank page
- **Solution:** Check browser console (F12)
- Verify build completed successfully
- Check Vercel deployment logs

### Environment Variable Issues:

**Problem:** Environment variables not working
- **Solution:** After adding/changing environment variables:
  1. Go to Deployments tab
  2. Click "..." menu on latest deployment
  3. Click "Redeploy"

---

## 📱 Optional: Custom Domain

After successful deployment, you can add a custom domain:

1. Go to your frontend project in Vercel
2. Click **"Settings"** → **"Domains"**
3. Add your domain
4. Follow DNS configuration instructions

---

## 🎯 Quick Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub Repo:** https://github.com/owaais008-hub/portfolio.git
- **MongoDB Atlas:** https://www.mongodb.com/cloud/atlas
- **Vercel Docs:** https://vercel.com/docs

---

## 📝 Your Deployment URLs (Fill these in after deployment)

**Backend URL:**
```
https://_____________________________.vercel.app
```

**Frontend URL:**
```
https://_____________________________.vercel.app
```

**MongoDB Connection String:**
```
mongodb+srv://_____:_____@cluster0._____.mongodb.net/portfolio
```

---

## 🆘 Need Help?

If you encounter any issues:
1. Check Vercel deployment logs
2. Check browser console (F12)
3. Verify all environment variables are set correctly
4. Make sure MongoDB Atlas is configured properly

**Common Commands for Local Testing:**
```bash
# Test backend locally
cd portfolio/backend
npm install
npm start

# Test frontend locally  
cd portfolio/frontend
npm install
npm run dev
```

---

**Good Luck! 🚀**
