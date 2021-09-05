#!/bin/sh
set -e

echo "Starting SSH ..."
service ssh start

# Start Deno
exec deno run --allow-net --allow-read server.ts