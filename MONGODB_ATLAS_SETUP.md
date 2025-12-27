# 🍃 MongoDB Atlas Setup Guide

## Quick Setup for Portfolio Backend

### Step 1: Create MongoDB Atlas Account

1. Go to: **https://www.mongodb.com/cloud/atlas**
2. Click **"Try Free"** or **"Sign In"**
3. Sign up with:
   - Email: `owaais008@gmail.com` (or your preferred email)
   - Or use Google Sign-In for faster setup

### Step 2: Create a New Cluster

1. After login, click **"Build a Database"**
2. Choose **FREE** tier (M0 Sandbox)
   - Provider: **AWS** (recommended)
   - Region: Choose closest to your location (e.g., Mumbai, Singapore)
3. Cluster Name: `portfolio-cluster` (or keep default)
4. Click **"Create"**
5. Wait 1-3 minutes for cluster creation

### Step 3: Create Database User

1. You'll see "Security Quickstart"
2. Under **"How would you like to authenticate your connection?"**
   - Choose **"Username and Password"**
   - Username: `portfoliouser`
   - Password: Click **"Autogenerate Secure Password"** (or create your own)
   - **⚠️ IMPORTANT: Copy and save this password!**
3. Click **"Create User"**

### Step 4: Configure Network Access

1. Under **"Where would you like to connect from?"**
2. Choose **"My Local Environment"**
3. Click **"Add My Current IP Address"**
4. **IMPORTANT for Vercel:** Also add:
   - Click **"Add IP Address"**
   - IP Address: `0.0.0.0/0`
   - Description: `Allow all (Vercel)`
   - Click **"Add Entry"**
5. Click **"Finish and Close"**

### Step 5: Get Connection String

1. Click **"Connect"** button on your cluster
2. Choose **"Connect your application"**
3. Driver: **Node.js**
4. Version: **5.5 or later**
5. Copy the connection string:
   ```
   mongodb+srv://portfoliouser:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

### Step 6: Prepare Connection String for Vercel

1. Replace `<password>` with your actual password
2. Add database name after `.net/`:
   ```
   mongodb+srv://portfoliouser:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

**Example:**
```
mongodb+srv://portfoliouser:MySecurePass123@cluster0.abc123.mongodb.net/portfolio?retryWrites=true&w=majority
```

### Step 7: Test Connection (Optional)

You can test the connection locally before deploying:

1. Create a file `portfolio/backend/.env` with:
   ```
   MONGODB_URI=mongodb+srv://portfoliouser:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
   NODE_ENV=development
   PORT=5000
   ```

2. Run backend:
   ```bash
   cd portfolio/backend
   npm install
   npm start
   ```

3. If you see "Connected to MongoDB" - Success! ✅

---

## 📋 Your MongoDB Credentials (Fill in after setup)

**Cluster Name:**
```
_____________________________
```

**Database User:**
```
Username: portfoliouser
Password: _____________________________
```

**Connection String:**
```
mongodb+srv://portfoliouser:_____@cluster0._____.mongodb.net/portfolio?retryWrites=true&w=majority
```

---

## 🔧 Troubleshooting

### Problem: "Authentication failed"
**Solution:**
- Verify username and password are correct
- Password should NOT contain special characters like `@`, `#`, `/`
- If it does, URL-encode them or generate a new password

### Problem: "Network timeout"
**Solution:**
- Check Network Access settings
- Make sure `0.0.0.0/0` is added
- Wait a few minutes for changes to propagate

### Problem: "Database not found"
**Solution:**
- MongoDB will create the database automatically when first data is inserted
- Make sure database name is in the connection string: `.mongodb.net/portfolio?`

---

## 🎯 Next Steps

After completing MongoDB setup:

1. ✅ Copy your connection string
2. ✅ Go back to Vercel deployment
3. ✅ Add `MONGODB_URI` environment variable with your connection string
4. ✅ Deploy backend
5. ✅ Test API endpoints

---

## 📚 Useful MongoDB Atlas Features

### View Your Data:
1. Go to **"Browse Collections"** in your cluster
2. You'll see `portfolio` database with:
   - `projects` collection
   - `skills` collection

### Add Sample Data:
You can add sample data using the seed script:
```bash
cd portfolio/backend
node seed.js
```

### Monitor Usage:
- Go to **"Metrics"** tab to see database usage
- Free tier includes: 512 MB storage

---

## 🔐 Security Best Practices

1. **Never commit `.env` file** to GitHub (already in .gitignore)
2. **Use strong passwords** for database users
3. **Rotate passwords** periodically
4. **Monitor access logs** in Atlas dashboard
5. **Use IP whitelist** when possible (but Vercel needs 0.0.0.0/0)

---

## 💡 Tips

- **Free tier is enough** for portfolio projects
- **Cluster sleeps** after inactivity - first request might be slow
- **Backup:** Atlas provides automated backups on paid tiers
- **Upgrade:** You can upgrade to paid tier anytime for better performance

---

**MongoDB Atlas Dashboard:** https://cloud.mongodb.com/

Good luck! 🚀
