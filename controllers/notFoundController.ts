export const notFoundController = (requestEvent: any) => {
  const notFoundResponse = "HTTP 404 - Not Found";
  requestEvent.respondWith(
    new Response(notFoundResponse, {
      status: 404,
    })
  );
};
