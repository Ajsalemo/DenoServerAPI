import { logOutPermissions } from "./permissions.ts";

// Check and log out permissions defined in run.sh
await logOutPermissions();
// Listen on port 8080
const server = Deno.listen({ port: 8080 });
console.log(`Deno is listening on port 8080`);

for await (const conn of server) {
  // In order to not be blocking, we need to handle each connection individually
  // without awaiting the function
  serveHttp(conn);
}

async function serveHttp(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    const url = new URL(requestEvent.request.url)
    switch (url.pathname) {
      // deno-lint-ignore no-case-declarations
      case "/":
        const body = `Your user-agent is:\n\n${
          requestEvent.request.headers.get("user-agent") ?? "Unknown"
        }`;
        requestEvent.respondWith(
          new Response(body, {
            status: 200,
          })
        );
        break;
      // deno-lint-ignore no-case-declarations
      case "/test":
        const testBody = "This is /test";
        requestEvent.respondWith(
          new Response(testBody, {
            status: 200,
          })
        );
        break;
      // deno-lint-ignore no-case-declarations
      default:
        const notFoundResponse = "HTTP 404 - Not Found";
        requestEvent.respondWith(
          new Response(notFoundResponse, {
            status: 404,
          })
        );
    }
  }
}
