# Build stage
FROM oven/bun:1.2.21 AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

# Runtime stage
FROM oven/bun:1.2.21 AS production
WORKDIR /app
COPY --from=build /app/dist ./dist

# Bun static server with SPA fallback
RUN echo 'const server = Bun.serve({\
  port: Number(process.env.PORT) || 3000,\
  async fetch(req) {\
    const url = new URL(req.url);\
    let path = url.pathname;\
    if (path === "/") path = "/index.html";\
    const file = Bun.file(`./dist${path}`);\
    if (!(await file.exists())) {\
      if (!path.includes(".")) {\
        return new Response(Bun.file("./dist/index.html"), { headers: { "Content-Type": "text/html" } });\
      }\
      return new Response("Not Found", { status: 404 });\
    }\
    const headers = {};\
    if (path.endsWith(".js")) headers["Content-Type"] = "application/javascript";\
    else if (path.endsWith(".css")) headers["Content-Type"] = "text/css";\
    else if (path.endsWith(".html")) headers["Content-Type"] = "text/html";\
    else if (path.endsWith(".json")) headers["Content-Type"] = "application/json";\
    else if (path.endsWith(".svg")) headers["Content-Type"] = "image/svg+xml";\
    if (path.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/)) {\
      headers["Cache-Control"] = "public, max-age=31536000, immutable";\
    }\
    return new Response(file, { headers });\
  },\
});\
console.log(`Server running at http://localhost:${server.port}`);' > server.js

ENV PORT=3000
EXPOSE 3000
CMD ["bun", "run", "server.js"]
