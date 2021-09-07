export const rootController = (requestEvent: any) => {
  const body = `Your user-agent is:\n\n${
    requestEvent.request.headers.get("user-agent") ?? "Unknown"
  }`;
  requestEvent.respondWith(
    new Response(body, {
      status: 200,
    })
  );
};
