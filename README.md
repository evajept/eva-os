# Evalynn OS

Personal life operating system - Body module (Habits, Metrics, Protocol, Health Officer).

## Quick Deploy (10 minutes)

### Step 1: Create GitHub repo
1. Go to github.com/new
2. Name: `evalynn-os`
3. Public or Private (your choice)
4. Don't initialize with README (we'll push our files)

### Step 2: Create Supabase project
1. Go to supabase.com and sign in
2. Click "New Project"
3. Name: `evalynn-os`
4. Set a database password (save it somewhere)
5. Region: Singapore (closest to Bangkok)
6. Wait for project to spin up (~1 minute)

### Step 3: Create the database table
1. In Supabase, go to SQL Editor
2. Paste the contents of `supabase-setup.sql`
3. Click "Run"
4. You should see "Success" - the kv_store table is created

### Step 4: Get your Supabase keys
1. In Supabase, go to Settings -> API
2. Copy the "Project URL" (looks like https://xxxxx.supabase.co)
3. Copy the "anon/public" key (starts with eyJhbGci...)
4. Save both - you'll need them for Vercel

### Step 5: Push code to GitHub
```bash
cd evalynn-os
git init
git add .
git commit -m "Initial deploy"
git remote add origin https://github.com/evajept/evalynn-os.git
git branch -M main
git push -u origin main
```

### Step 6: Deploy to Vercel
1. Go to vercel.com
2. Click "Import Project" -> Import from GitHub
3. Select the evalynn-os repo
4. Framework: Vite
5. Add Environment Variables:
   - `VITE_SUPABASE_URL` = your Project URL from step 4
   - `VITE_SUPABASE_ANON_KEY` = your anon key from step 4
6. Click "Deploy"
7. Wait ~1 minute. Your app is live!

### Step 7: Access your app
Your app will be at: `evalynn-os.vercel.app` (or similar)

## Local Development

```bash
# Install dependencies
npm install

# Create .env.local with your Supabase keys
echo "VITE_SUPABASE_URL=https://xxxxx.supabase.co" > .env.local
echo "VITE_SUPABASE_ANON_KEY=eyJhbGci..." >> .env.local

# Run dev server
npm run dev
```

Without Supabase keys, the app falls back to localStorage (works fine for dev).

## Updating the app

Every time you want to update:
```bash
git add .
git commit -m "what you changed"
git push
```
Vercel auto-deploys on every push. Live in ~30 seconds.

## Architecture

- `src/App.jsx` - Main app with all components
- `src/storage.js` - Supabase/localStorage abstraction layer
- `src/main.jsx` - React entry point

Data is stored in a simple key-value table. Same keys as the artifact version:
- `habits2_YYYY-MM` - monthly habit data
- `metrics_v1` - blood markers, body measurements, conditions
