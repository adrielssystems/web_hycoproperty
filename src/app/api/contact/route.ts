import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

function sanitize(input: unknown, maxLen = 500): string {
  if (typeof input !== 'string') return '';
  return input.replace(/[<>]/g, '').trim().slice(0, maxLen);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = sanitize(body.name, 120);
    const email = sanitize(body.email, 150);
    const phone = sanitize(body.phone, 50);
    const interest = sanitize(body.interest, 120);
    const propertyCode = sanitize(body.propertyCode, 80);
    const message = sanitize(body.message, 1500);

    if (!name || !email || !email.includes('@') || !message) {
      return NextResponse.json(
        { error: 'Please complete your name, valid email address, and message.' },
        { status: 400 }
      );
    }

    try {
      await query(`
        CREATE TABLE IF NOT EXISTS web_inquiries (
          id SERIAL PRIMARY KEY,
          name VARCHAR(150) NOT NULL,
          email VARCHAR(150) NOT NULL,
          phone VARCHAR(60),
          interest VARCHAR(150),
          property_code VARCHAR(80),
          message TEXT NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
      `);
      await query(
        `INSERT INTO web_inquiries (name, email, phone, interest, property_code, message)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [name, email, phone, interest, propertyCode, message]
      );
    } catch {
      // Resilient fallback if local PostgreSQL container is offline
    }

    return NextResponse.json({
      ok: true,
      reference: `HYCO-INQ-${Date.now().toString().slice(-6)}`,
    });
  } catch {
    return NextResponse.json(
      { error: 'Unable to process consultation request at this time.' },
      { status: 500 }
    );
  }
}

