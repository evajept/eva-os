-- Run this in your Supabase SQL Editor (supabase.com -> project -> SQL Editor)

-- Simple key-value store - stores everything
CREATE TABLE IF NOT EXISTS kv_store (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (required by Supabase)
ALTER TABLE kv_store ENABLE ROW LEVEL SECURITY;

-- Allow all operations for now (single-user app, no auth needed yet)
-- You can add auth later when you want login
CREATE POLICY "Allow all" ON kv_store
  FOR ALL
  USING (true)
  WITH CHECK (true);
