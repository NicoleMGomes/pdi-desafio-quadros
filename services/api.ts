import axios from 'axios'

export const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    `${process.env.VERCEL_URL}/api` ||
    'http://localhost:3000/api',
})
