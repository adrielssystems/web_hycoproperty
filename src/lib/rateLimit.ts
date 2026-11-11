interface RateLimitRecord {
  timestamps: number[];
}

const store = new Map<string, RateLimitRecord>();

export interface RateLimitResult {
  allowed: boolean;
  limit: number;
  remaining: number;
  reset: number;
  retryAfter: number;
}

export function checkRateLimit(
  identifier: string,
  limit: number = 100,
  windowMs: number = 60_000
): RateLimitResult {
  const now = Date.now();
  const windowStart = now - windowMs;

  let record = store.get(identifier);
  if (!record) {
    record = { timestamps: [] };
    store.set(identifier, record);
  }

  record.timestamps = record.timestamps.filter((ts) => ts > windowStart);

  const reset = Math.ceil((now + windowMs) / 1000);
  if (record.timestamps.length >= limit) {
    const oldest = record.timestamps[0] || now;
    const retryAfter = Math.max(1, Math.ceil((oldest + windowMs - now) / 1000));
    return {
      allowed: false,
      limit,
      remaining: 0,
      reset,
      retryAfter,
    };
  }

  record.timestamps.push(now);
  return {
    allowed: true,
    limit,
    remaining: Math.max(0, limit - record.timestamps.length),
    reset,
    retryAfter: 0,
  };
}

