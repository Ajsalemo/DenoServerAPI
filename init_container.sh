#!/bin/sh
set -e

echo "Starting SSH ..."
service ssh start

# Start Deno
exec deno run --unstable --allow-net --lock=lock.json --lock-write --allow-read --allow-env server.ts