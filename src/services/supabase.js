import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vlrqgzgvlhdeuhilzjgk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZscnFnemd2bGhkZXVoaWx6amdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxMDkwNTAsImV4cCI6MjA4NTY4NTA1MH0.JIIQPWn7f8JtX1cK7Ste9S1bxkSC6NZc09hNp8BUCiQ";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
