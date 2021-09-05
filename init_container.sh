#!/bin/sh
set -e

echo "Starting SSH ..."
service ssh start

# Start Deno
exec deno run --unstable --allow-net --allow-read server.ts