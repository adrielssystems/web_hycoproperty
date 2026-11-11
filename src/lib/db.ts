import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL || '';

let pool: Pool | null = null;

export function getDbPool(): Pool | null {
  if (!connectionString) return null;
  if (!pool) {
    pool = new Pool({
      connectionString,
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 4000,
    });
  }
  return pool;
}

export async function query<T = unknown>(text: string, params?: unknown[]): Promise<T[]> {
  const p = getDbPool();
  if (!p) throw new Error('DATABASE_URL is not configured');
  const res = await p.query(text, params);
  return res.rows as T[];
}

