# bruca-demo → demo.bruca.space

Standalone Next.js app. Visitors enter their email; the server route `/api/request-demo`
forwards it to `cms.bruca.space/api/demo-requests` with the `x-demo-secret` header.

1. `cp .env.example .env.local` and fill `DEMO_REQUEST_SECRET`
2. `npm install && npm run dev`
3. Deploy on Vercel, add the same two env vars, attach domain `demo.bruca.space`
