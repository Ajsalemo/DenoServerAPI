FROM denoland/deno:1.13.2

WORKDIR /app

# These steps will be re-run upon each file change in your working directory:
COPY . .
RUN deno cache server.ts

EXPOSE 8080

CMD ["run", "--allow-net --allow-read", "server.ts"]
