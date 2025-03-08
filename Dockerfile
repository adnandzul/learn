# 1️⃣ Build Next.js
FROM node:20-alpine AS builder

WORKDIR /app

# Salin file dependency dan install
COPY package*.json ./
RUN npm install

# Salin seluruh project dan build Next.js
COPY . .
RUN npm run build

# 2️⃣ Menjalankan Next.js di Production Mode
FROM node:20-alpine AS runner

WORKDIR /app

# Salin hasil build Next.js dari tahap builder
COPY --from=builder /app /app

# Expose port 3000 agar bisa diakses oleh Nginx
EXPOSE 3000

# Jalankan Next.js dalam mode produksi
CMD ["npm", "run", "start"]
