#!/bin/bash

# For local use, for now

# Putting commands in here to run when needed for laziness
# Ref: https://deno.land/manual@v1.13.2/getting_started/command_line_interface

# --watch = reloads on change, file watcher
# --allow-net = allows explicit access to 8080 (or port) over the network since it's blocked by design in Deno
# --lock = specify the lock file
# --lock-write = write hashes to the lock file for integrity checking 
# https://deno.land/manual@v1.13.2/linking_to_external_code/integrity_checking

# --allow-read = allow read access to the file system
# https://deno.land/manual@v1.13.2/getting_started/permissions

deno run --unstable --watch --allow-net --lock=lock.json --lock-write --allow-read --allow-env server.ts