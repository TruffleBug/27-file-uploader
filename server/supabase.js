// const { createClient } = require('@supabase/supabase-js');
import { createClient } from '@supabase/supabase-js';


// const supabaseUrl = String(process.env.SUPABASE_URL);
// const supabaseKey = String(process.env.SUPABASE_ANON_KEY);

// export const supabase = createClient(supabaseUrl, supabaseKey)
export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)
