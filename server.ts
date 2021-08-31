import { logOutPermissions } from './permissions.ts'

await logOutPermissions()

const listener = Deno.listen({ port: 8000 });
console.log("Deno is listening on: http://localhost:8000/");
for await (const conn of listener) {
  (async () => {
    const requests = Deno.serveHttp(conn);
    for await (const { respondWith } of requests) {
      respondWith(new Response("Hello world"));
    }
  })();
}
