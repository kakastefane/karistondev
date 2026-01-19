# ARG definitions
ARG NODE_VERSION=20.11.1

# Stage 1: Build
FROM node:${NODE_VERSION}-alpine as builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Build application
RUN npm run build

# Stage 2: Runtime
FROM node:${NODE_VERSION}-alpine

WORKDIR /app

# Copy output from builder
COPY --from=builder /app/.output ./.output

# Environment variables
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV NODE_ENV=production

# Expose port
EXPOSE 3000

# Start command
CMD ["node", ".output/server/index.mjs"]
