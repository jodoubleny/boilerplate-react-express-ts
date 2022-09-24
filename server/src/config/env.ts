import dotenv from 'dotenv';

if (!process.env.NODE_ENV) {
    console.error('[ENV] Set NODE_ENV to proceed.');
    process.exit(1);
}

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export const PORT = process.env.PORT || '5000';
export const ORIGIN_URI = process.env.ORIGIN_URI || '';