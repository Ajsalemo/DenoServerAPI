import { logOutPermissions } from "./config/permissions.ts";
import { neighborhoods } from "./database/mongoClient.ts";
import { findAllNeighborhoodsController } from "./controllers/findAllNeighborhoodsController.ts";
import { findNeighborhoodByName } from "./controllers/findNeighborhoodByName.ts";
// Check and log out permissions defined in run.sh
await logOutPermissions();
// Listen on port 8080
const server = Deno.listen({ port: 8080 });
console.log("Deno is listening on port 8080");

for await (const conn of server) {
  // In order to not be blocking, we need to handle each connection individually
  // without awaiting the function
  serveHttp(conn);
}

async function serveHttp(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    const url = new URL(requestEvent.request.url);
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
      case "/api/neighborhood/find/all":
        try {
          await findAllNeighborhoodsController(requestEvent, neighborhoods);
        } catch (e) {
          console.log(e);
        }
        break;
      case "/api/neighborhood/find":
        try {
          const params = url.searchParams;
          const name = params.get("name");
          await findNeighborhoodByName(requestEvent, neighborhoods, name);
        } catch (e) {
          console.log(e);
        }
        break;
      // deno-lint-ignore no-case-declarations
      default:
        const notFoundResponse = "HTTP 404 - Not Found";
        requestEvent.respondWith(
          new Response(notFoundResponse, {
            status: 404,
          })
        );
        break;
    }
  }
}
