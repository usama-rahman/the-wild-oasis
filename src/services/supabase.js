import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hjfwemjrfkoshkcztevr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqZndlbWpyZmtvc2hrY3p0ZXZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyODc4MTgsImV4cCI6MjAyMzg2MzgxOH0.SAuTXcmn_ZB2UFTpfowWZLApF2Wz7W0lGMiGQk-NDO4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
