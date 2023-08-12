
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://twkvnpqgnpqoebqmbbhj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3a3ZucHFnbnBxb2VicW1iYmhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3MzQ2MDcsImV4cCI6MTk5ODMxMDYwN30.8SEZFZmiXL1QfVDDw6kDwhNlwSefxGRUOWO2iB2mnWY'
export const supabase  = createClient(supabaseUrl, supabaseKey)

