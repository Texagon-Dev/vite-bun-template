FROM oven/bun:1.2.19-slim AS build

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . ./


RUN bun run build

# size only 1.59MB
# FROM busybox:uclibc

# WORKDIR /app

# COPY --from=build /app/dist /app

# EXPOSE 3000

# CMD ["httpd", "-f", "-p", "3000", "-h", "/app"]

# size only 48MB
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# size arround 184MB
# FROM oven/bun:1.2.19-slim

# WORKDIR /app

# COPY --from=build /app/dist /app/dist

# RUN bun install -g serve

# EXPOSE 3000

# CMD ["serve", "-s", "dist", "-l", "3000"]
