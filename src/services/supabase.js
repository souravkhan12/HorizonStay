import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gjjxhgpbfyinydnnlahx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqanhoZ3BiZnlpbnlkbm5sYWh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwNDc1NzIsImV4cCI6MjA1MzYyMzU3Mn0.uFYWAhDAVbqLhHOi21kAmcX9WUm0Artz-xc4qmLUFII";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
