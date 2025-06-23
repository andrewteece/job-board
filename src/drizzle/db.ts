// import { env } from '@/data/env/server';
// import { drizzle } from 'drizzle-orm/node-postgres';
// import * as schema from '@/drizzle/schema';
// import { Pool } from 'pg';

// // export const db = drizzle(env.DATABASE_URL, { schema });
// const pool = new Pool({
//   connectionString: env.DATABASE_URL,
// });

// export const db = drizzle(pool);

import { env } from '@/data/env/server';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from '@/drizzle/schema';

export const db = drizzle(env.DATABASE_URL, { schema });
