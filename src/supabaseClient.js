import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zxqmiacbaepqfszcjgvk.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4cW1pYWNiYWVwcWZzemNqZ3ZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3NDA0NDIsImV4cCI6MjA2MzMxNjQ0Mn0.UGYTMEIFeIk-hXazC_8uZKOChDBF8sAbzp8Avi9Vi64'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)