# Vercel Deployment Guide for Portfolio

## Prerequisites
- GitHub account with repository: `https://github.com/owaais008-hub/portfolio.git`
- Vercel account: `owaais008@gmail.com`
- MongoDB Atlas account (for production database)

## Step 1: Prepare MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (if not already created)
3. Create a database user with username and password
4. Whitelist all IP addresses (0.0.0.0/0) for Vercel
5. Get your MongoDB connection string (it should look like):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

## Step 2: Deploy Backend to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your GitHub repository: `owaais008-hub/portfolio`
4. Configure the project:
   - **Framework Preset**: Other
   - **Root Directory**: `portfolio/backend`
   - **Build Command**: (leave empty)
   - **Output Directory**: (leave empty)
   - **Install Command**: `npm install`

5. Add Environment Variables:
   - Click "Environment Variables"
   - Add the following:
     ```
     MONGODB_URI = your_mongodb_atlas_connection_string
     NODE_ENV = production
     PORT = 5000
     ```

6. Click "Deploy"
7. Once deployed, copy your backend URL (e.g., `https://your-backend.vercel.app`)

## Step 3: Deploy Frontend to Vercel

1. In Vercel Dashboard, click "Add New" → "Project" again
2. Import the same GitHub repository: `owaais008-hub/portfolio`
3. Configure the project:
   - **Framework Preset**: Vite
   - **Root Directory**: `portfolio/frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. Add Environment Variables:
   - Click "Environment Variables"
   - Add the following:
     ```
     VITE_API_URL = https://your-backend.vercel.app/api
     ```
   - Replace `your-backend.vercel.app` with your actual backend URL from Step 2

5. Click "Deploy"

## Step 4: Update Backend CORS Settings (if needed)

If you get CORS errors, you may need to update the backend to allow your frontend domain:

1. The backend already has CORS enabled with `app.use(cors())`
2. For production, you might want to restrict it to your frontend domain only
3. This can be done later if needed

## Step 5: Test Your Deployment

1. Visit your frontend URL (e.g., `https://your-portfolio.vercel.app`)
2. Test all features:
   - Navigation
   - Projects loading from backend
   - Skills loading from backend
   - Contact form (EmailJS)
   - All animations and interactions

## Step 6: Custom Domain (Optional)

1. In Vercel Dashboard, go to your frontend project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to configure DNS

## Troubleshooting

### Backend Issues
- Check Vercel logs: Dashboard → Your Backend Project → Deployments → Click on deployment → View Function Logs
- Verify MongoDB connection string is correct
- Ensure MongoDB Atlas allows connections from all IPs (0.0.0.0/0)

### Frontend Issues
- Check browser console for errors
- Verify `VITE_API_URL` environment variable is set correctly
- Make sure backend URL ends with `/api`

### CORS Errors
- Verify backend has `cors()` middleware enabled
- Check that frontend is making requests to the correct backend URL

## Important Notes

1. **Environment Variables**: Make sure all environment variables are set in Vercel dashboard
2. **MongoDB**: Use MongoDB Atlas for production (not localhost)
3. **API URL**: Frontend must use the deployed backend URL, not localhost
4. **Separate Deployments**: Backend and frontend are deployed as separate projects on Vercel
5. **Auto-Deploy**: Once set up, pushing to GitHub will automatically trigger new deployments

## Quick Commands for Local Testing Before Deploy

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

## Your Credentials
- **GitHub**: https://github.com/owaais008-hub/portfolio.git
- **Vercel Email**: owaais008@gmail.com
- **Vercel Password**: owaais008-3751

---

**Need Help?** 
- Vercel Documentation: https://vercel.com/docs
- MongoDB Atlas Documentation: https://docs.atlas.mongodb.com/
