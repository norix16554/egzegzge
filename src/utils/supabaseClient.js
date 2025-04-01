// src/utils/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wjoabaxvhhyopjqncmkn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqb2FiYXh2aGh5b3BqcW5jbWtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1MzIxNjYsImV4cCI6MjA1OTEwODE2Nn0.yBQQVSbGtJ8GAJ_9VZABatvnzlcQmRZzpEriE9boSuA'

export const supabase = createClient(supabaseUrl, supabaseKey)
